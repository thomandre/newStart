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
    	$connection = $this->getEntityManager()->getConnection();

        // default case 
        $orderClause = 'u.lastname ASC';

        if($order == 'birthday') {
    		$orderClause = 'distance ASC';
    	}

        $query = "SELECT u.id, u.firstname, u.lastname, u.lastname, u.facebookId, u.displayPopinProfile, u.displayPopinFriends,
                            f.favorite as favorite, 

                            IF(DAYOFYEAR(u.birthday) > DAYOFYEAR(CURRENT_DATE()), 
                               DAYOFYEAR(u.birthday) - DAYOFYEAR(CURRENT_DATE()),
                               DAYOFYEAR(u.birthday) - DAYOFYEAR(CURRENT_DATE()) + DAYOFYEAR(CONCAT(YEAR(CURRENT_DATE()), '-12-31'))
                            )
                            
                            AS distance

						FROM user u, friends f
						WHERE f.user_id = '".$user->getId()."'
						AND f.friend_user_id = u.id
						AND (u.firstname LIKE '%".$str."%'
							OR u.lastname LIKE '%".$str."%'  
							OR CONCAT(u.firstname, ' ', u.lastname) LIKE '%".$str."%'
							OR CONCAT(u.lastname, ' ', u.firstname) LIKE '%".$str."%' 
                        )
						ORDER BY ".$orderClause;

        //echo $query;
        
        $iterator = $connection->query($query);

        while (is_object($iterator) AND ($array = $iterator->fetch()) !== FALSE) {  
            $data[] = $array;
        }
        return $data;
    }   

}