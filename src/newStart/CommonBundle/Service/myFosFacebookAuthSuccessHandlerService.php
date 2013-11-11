<?php

namespace newStart\CommonBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use newStart\UserBundle\Entity\Friends;

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
                $friend = new Friends();
                $friend->setFriendsWithMe($friendObj);
                $friend->setMyFriends($user);

                $em->persist($friend);
            }
            if($friendObj != null && $friendObj->isMyFriend($user) == false) {
                $friend = new Friends();
                $friend->setFriendsWithMe($user);
                $friend->setMyFriends($friendObj);

                $em->persist($friend);
            }

        }

        $me = $facebook->api('/me/');

        //var_dump($me['birthday']);
        $birthday = explode('/', $me['birthday']);
        $user->setBirthday(new \Datetime($birthday[2].'-'.$birthday[0].'-'.$birthday[1]));

        $user->setNew(false);
        $em->persist($user);
//        $em->persist($friendObj);
        $em->flush();

    	return new RedirectResponse($this->container->get('router')->generate('me'));
    }


}

