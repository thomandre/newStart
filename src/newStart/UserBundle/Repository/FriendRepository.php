<?php

namespace newStart\UserBundle\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class FriendRepository extends EntityRepository
{

    public function getFriends($user, $str, $order)
    {
    	$em = $this->getEntityManager();

    	if($order != 'u.lastname ASC') {
    		$order = 'u.lastname ASC';
    	}

        $query = $em->createQuery('SELECT u, f.favorite
        							FROM UserBundle:User u, UserBundle:Friends f
        							WHERE f.friendsWithMe = :user
        							AND f.myFriends = u
        							AND (u.firstname LIKE :str 
    									OR u.lastname LIKE :str 
    									OR CONCAT(u.firstname, CONCAT(:space, u.lastname)) LIKE :str 
    									OR CONCAT(u.lastname, CONCAT(:space, u.firstname)) LIKE :str)
        							ORDER BY '.$order)
        			->setParameter('user', $user)
        			->setParameter('space', ' ')
        			->setParameter('str', '%'.$str.'%');

        //echo($query->getSql());
        return $query->getResult();
    }

}