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

        $query = $em->createQuery('SELECT p FROM newStartCommonBundle:Product p 
                                   LEFT JOIN UserBundle:Friends f 
        						               WITH ((p.user = f.myFriends AND f.friendsWithMe = :user) OR (p.user = :user))
                                   WHERE p.deleted = 0
                                   AND ((p.user = f.myFriends AND f.friendsWithMe = :user) OR (p.user = :user))
                                   ORDER BY p.id DESC')
                ->setParameter('user', $user);

        return $query->getResult();

    }

}
