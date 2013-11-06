<?php

namespace newStart\CommonBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;

/**
 * @Service("my_fos_facebook_auth_success_handler", public=true)
 */
class myFosFacebookAuthSuccessHandlerService implements AuthenticationSuccessHandlerInterface
{
	
	private $container;

    public function __construct($container)
    {
        $this->container = $container;
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token)
    {
        //$currentUser = $this->userManager->findUserBy(array('facebookId' => $token));
        $facebook = $this->container->get('fos_facebook.api');
        $em = $this->container->get('doctrine')->getEntityManager();
        $userRepository = $em->getRepository('UserBundle:User');
        $user = $token->getUser();
        //\Doctrine\Common\Util\Debug::dump($user);
        
        $friends = $facebook->api('/me/friends?fields=name,id,email');

        //($response);
        //var_dump($friends['data']);
        foreach($friends['data'] as $friend) {
            $friendObj = $userRepository->findOneByFacebookId($friend['id']);
//            \Doctrine\Common\Util\Debug::dump($friendObj);
            if($friendObj != null && $user->isMyFriend($friendObj) == false) {
                $user->addMyFriend($friendObj);
            }
            if($friendObj != null && $friendObj->isMyFriend($user) == false) {
                $friendObj->addMyFriend($user);
                $em->persist($friendObj);
            }

        }

        $em->persist($user);
//        $em->persist($friendObj);
        $em->flush();

    	return new RedirectResponse($this->container->get('router')->generate('me'));
    }


}

