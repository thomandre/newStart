<?php


namespace newStart\UserBundle\Entity;

use FOS\UserBundle\Entity\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use newStart\CommonBundle\Entity\Product;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity
 * @ORM\Table(name="session")
 */
class Session
{
	/**
     * @ORM\Id
     * @ORM\Column(name="session_id", type="string")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $sessionId;

    /**
     * @ORM\Column(name="session_value", type="text")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $sessionValue;

    /**
     * @ORM\Column(name="session_time", type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $sessionTime;

}

