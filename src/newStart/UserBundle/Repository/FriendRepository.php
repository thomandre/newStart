<?php

namespace newStart\UserBundle\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Doctrine\ORM\Query\ResultSetMapping;

class FriendRepository extends EntityRepository
{

    public function getFriends($user, $str, $order)
    {
    	$em = $this->getEntityManager();

        // default case 
        $orderClause = 'u.lastname ASC';

        if($order == 'birthday') {
    		$orderClause = 'distance ASC';
    	} 
        
        $rsm = new ResultSetMapping();

        $query = $em->createNativeQuery("SELECT u.*, f.favorite, IF(DAYOFYEAR(u.birthday) > DAYOFYEAR(CURRENT_DATE()), 
                                           DAYOFYEAR(u.birthday) - DAYOFYEAR(CURRENT_DATE()),
                                           DAYOFYEAR(u.birthday) - DAYOFYEAR(CURRENT_DATE()) + DAYOFYEAR(CONCAT(YEAR(CURRENT_DATE()), '-12-31'))
                                        )
                                        
                                        AS distance

        							FROM user u, friends f
        							WHERE f.friend_user_id = :user
        							AND f.friend_user_id = u.id
        							AND (u.firstname LIKE :str 
    									OR u.lastname LIKE :str 
    									OR CONCAT(u.firstname, ' ', u.lastname) LIKE :str 
    									OR CONCAT(u.lastname, ' ', u.firstname) LIKE :str)
        							ORDER BY ".$orderClause, $rsm)
        			->setParameter('user', $user)
        			->setParameter('str', '%'.$str.'%');

        //echo($query->getSql());
        return $query->getResult();
    }

}