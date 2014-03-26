<?php

namespace newStart\UserBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use newStart\UserBundle\Entity\User;
use newStart\UserBundle\Entity\Friends;
use newStart\CommonBundle\Service\Mail;


/**
 * @Service("fbUserService", public=true)
 */
class fbUserService {

    /**
     * @DI\Inject("doctrine.orm.entity_manager")
     * @var \Doctrine\ORM\EntityManager
     */
    public $em;

    /** @DI\Inject("security.context") */
	public $sc;

    /** @DI\Inject("newstart_common_service_mail") */
	public $mail;

	/** @DI\Inject("facebook") */
	public $facebook;

	/** @DI\Inject("router") */
	public $router;

	public function update($me) {
	    $userRepository = $this->em->getRepository('UserBundle:User');
	    $user = $userRepository->findOneByFacebookId($me['id']);
		$settingsUrl = $this->router->generate('settings', array(), true);

	    if(is_null($user)) {
	    	$user = new User();

	    	$user->setUsername($me['id']);
	    	$user->setEnabled(true);
	    	$user->setLocked(false);
	    	$user->setEmailStop(false);
	    	$user->addRole('ROLE_FACEBOOK');
	    	$user->setCredentialsExpired(false);
	    	$user->setFacebookId($me['id']);
	        $user->setDisplayPopinProfile(true);
	        $user->setDisplayPopinFriends(true);
	        $user->setPublic(true);

			$this->mail->load('newStartCommonBundle:Mails:welcome.html.twig');
			$body = $this->mail->renderBody(array('settingsUrl' => $settingsUrl));
		    $this->mail->sendMessage($me['email'], 'Bienvenue sur Welovegifts, le reseau social des idées de cadeau', $body);
	    }

    	$user->setLastLogin(new \Datetime());

	    // updating user info in case it had changed... Doesn't happend much, but it can ;-)
        $user->setGender($me['gender']);
    	$user->setEmail($me['email']);
    	$user->setFirstname($me['first_name']);
    	$user->setLastname($me['last_name']);
    	$user->setPassword(' ');

    	// because some user enter fake and then change back to the real one
	    $birthday = explode('/', $me['birthday']);
	    $user->setBirthday(new \Datetime($birthday[2].'-'.$birthday[0].'-'.$birthday[1]));

	    $token = new UsernamePasswordToken($user, null, 'main', $user->getRoles()); // 'main' is the name of the firewall
	    $this->sc->setToken($token);

	    $user->setNew(false);
	    $this->em->persist($user);
	    $this->em->flush();

	    // managing friendship 

	    try{ 
			$friends = $this->facebook->api('/me/friends', 'GET');
	    } catch(\Exception $e) {
	    	var_dump('Erreur lors de la recuperation des amis FB.');
	    	$friends['data'] = array();
	    }
	    		
	    foreach($friends['data'] as $friend) {
	        $friendObj = $userRepository->findOneByFacebookId($friend['id']);
	        if($friendObj != null && $user->isMyFriend($friendObj) == false) {
	            $friend = new Friends();
	            $friend->setFriendsWithMe($friendObj);
	            $friend->setMyFriends($user);

	            $this->em->persist($friend);
	        }
	        if($friendObj != null && $friendObj->isMyFriend($user) == false) {
	            $friend = new Friends();
	            $friend->setFriendsWithMe($user);
	            $friend->setMyFriends($friendObj);

	            $this->em->persist($friend);

				$this->mail->load('newStartCommonBundle:Mails:newfriend.html.twig');
				$profileUrl = $this->router->generate('profile', array('userId' => $user->getFacebookId()), true);
				$body = $this->mail->renderBody(array('username' =>$user->getFullname(), 'profileUrl' => $profileUrl, 'settingsUrl' => $settingsUrl, 'user' => $user));
			    $this->mail->sendMessage($friendObj->getEmail(), $user->getFullname().' est maintenant sur Welovegifts', $body);
	        }
	    }

	    $this->em->flush();
    }

}