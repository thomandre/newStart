<?php

namespace newStart\UserBundle\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class UserRepository extends EntityRepository
{

    public function getNextBirthdays($date)
    {
		$qb = $this->createQueryBuilder('u')
  		           ->where('DAYOFYEAR(u.birthday) = :date')
		           ->setParameter('date', $date);

		$query = $qb->getQuery();
	   	$result = $query->getResult();
	   	return $result;
    }

}
