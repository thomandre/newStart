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
        $facebook = $this->container->get('fos_facebook.api');
        $em = $this->container->get('doctrine')->getEntityManager();
        $userRepository = $em->getRepository('UserBundle:User');
        $user = $token->getUser();        
        $friends = $facebook->api('/me/friends?fields=name,id,email');

        foreach($friends['data'] as $friend) {
            $friendObj = $userRepository->findOneByFacebookId($friend['id']);
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

        $birthday = explode('/', $me['birthday']);
        $user->setBirthday(new \Datetime($birthday[2].'-'.$birthday[0].'-'.$birthday[1]));

        if($user->getDisplayPopinProfile() === null) {
            $user->setDisplayPopinProfile(true);
            $user->setDisplayPopinFriends(true);
            $user->setPublic(true);
        }

        $user->setNew(false);

        $em->persist($user);
        $em->flush();

    	return new RedirectResponse($this->container->get('router')->generate('me'));
    }


}

