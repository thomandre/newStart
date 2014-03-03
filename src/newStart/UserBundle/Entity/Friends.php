<?php
namespace newStart\UserBundle\Entity;

use FOS\UserBundle\Entity\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use newStart\CommonBundle\Entity\Product;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity
 * @ORM\Table(name="friends")
 */
class Friends
{
    /**
     * @ORM\Id
     * @ORM\ManyToOne(targetEntity="User", inversedBy="myFriends")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    protected $friendsWithMe;

    /**
     * @ORM\Id
     * @ORM\ManyToOne(targetEntity="User", inversedBy="friendsWithMe")
     * @ORM\JoinColumn(name="friend_user_id", referencedColumnName="id")
     */
    protected $myFriends;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     */
    protected $favorite;

    /**
     * Set friendsWithMe
     *
     * @param \newStart\UserBundle\Entity\User $friendsWithMe
     * @return Friends
     */
    public function setFriendsWithMe(\newStart\UserBundle\Entity\User $friendsWithMe)
    {
        $this->friendsWithMe = $friendsWithMe;
    
        return $this;
    }

    /**
     * Get friendsWithMe
     *
     * @return \newStart\UserBundle\Entity\User 
     */
    public function getFriendsWithMe()
    {
        return $this->friendsWithMe;
    }

    /**
     * Set myFriends
     *
     * @param \newStart\UserBundle\Entity\User $myFriends
     * @return Friends
     */
    public function setMyFriends(\newStart\UserBundle\Entity\User $myFriends)
    {
        $this->myFriends = $myFriends;
    
        return $this;
    }

    /**
     * Get myFriends
     *
     * @return \newStart\UserBundle\Entity\User 
     */
    public function getMyFriends()
    {
        return $this->myFriends;
    }

    /**
     * Set favorite
     *
     * @param boolean $favorite
     * @return Friends
     */
    public function setFavorite($favorite)
    {
        $this->favorite = $favorite;
    
        return $this;
    }

    /**
     * Get favorite
     *
     * @return boolean 
     */
    public function isFavorite()
    {
        return $this->favorite;
    }
}