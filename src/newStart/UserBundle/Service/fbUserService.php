<?php

namespace newStart\UserBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use newStart\UserBundle\Entity\User;
use newStart\UserBundle\Entity\Friends;


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

	/** @DI\Inject("facebook") */
	public $facebook;



	public function update($me) {
	    $userRepository = $this->em->getRepository('UserBundle:User');
	    $user = $userRepository->findOneByFacebookId($me['id']);

	    if(is_null($user)) {
	    	$user = new User();

	    	$user->setUsername($me['id']);
	    	$user->setEnabled(true);
	    	$user->setLocked(false);
	    	//$user->setExpire(false);
	    	$user->addRole('ROLE_FACEBOOK');
	    	$user->setCredentialsExpired(false);
	    	$user->setFacebookId($me['id']);

	        $user->setDisplayPopinProfile(true);
	        $user->setDisplayPopinFriends(true);
	        $user->setPublic(true);
	    }

    	$user->setLastLogin(new \Datetime());

	    // updating user info in case it had changed... Doesn't happend much, but it can ;-)
    	$user->setEmail($me['email']);
    	$user->setFirstname($me['first_name']);
    	$user->setLastname($me['last_name']);
    	$user->setPassword(' ');
    	// because some user enter fake and then change bqck to the real one
	    $birthday = explode('/', $me['birthday']);
	    $user->setBirthday(new \Datetime($birthday[2].'-'.$birthday[0].'-'.$birthday[1]));

	    $token = new UsernamePasswordToken($user, null, 'main', $user->getRoles()); // 'main' is the name of the firewall
	    $this->sc->setToken($token);

	    $user->setNew(false);
	    $this->em->persist($user);
	    $this->em->flush();


	    // managing friendship 
	    $friends = $this->facebook->api('/me/friends?fields=name,id,email');
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
	        }

	    }

	    $this->em->flush();

    }

}