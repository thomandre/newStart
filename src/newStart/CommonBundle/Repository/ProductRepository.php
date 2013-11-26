<?php

namespace newStart\CommonBundle\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class ProductRepository extends EntityRepository
{

    public function getProductsFeedForUser($user)
    {
        $em = $this->getEntityManager();

        $query = $em->createQuery('SELECT p FROM newStartCommonBundle:Product p, UserBundle:Friends f 
        						   WHERE p.user = f.myFriends
                                   AND f.friendsWithMe = :user
                                   AND p.beenBought = 0
                                   AND p.deleted = 0
                                   ORDER BY p.id DESC')
                ->setParameter('user', $user);

        return $query->getResult();

    }

}
