<?php
namespace newStart\UserBundle\Entity;

use FOS\UserBundle\Entity\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use newStart\CommonBundle\Entity\Product;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity(repositoryClass="newStart\UserBundle\Repository\UserRepository")
 * @ORM\Table(name="user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
    
    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    protected $firstname;

    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    protected $lastname;

    /**
     * @var string
     * @ORM\Column(type="string", nullable=true)
     */
    protected $facebookId;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=false)
     */
    protected $new;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true, options={"default" = true})
     */
    protected $displayPopinProfile;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true, options={"default" = true})
     */
    protected $displayPopinFriends;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true, options={"default" = true})
     */
    protected $public;

    /**
     * @ORM\OneToMany(targetEntity="\newStart\CommonBundle\Entity\Product", mappedBy="user")
     */
    protected $products;

    /**
     * @ORM\OneToMany(targetEntity="newStart\UserBundle\Entity\Friends", mappedBy="myFriends", cascade={"persist"})
     */
    protected $friendsWithMe;

    /**
     * @ORM\OneToMany(targetEntity="newStart\UserBundle\Entity\Friends", mappedBy="friendsWithMe", cascade={"persist"})
     */
    protected $myFriends;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="birthday", type="datetime", nullable=true)
     */
    protected $birthday;

    public function __construct()
    {
        parent::__construct();
        $this->friendsWithMe = new \Doctrine\Common\Collections\ArrayCollection();
        $this->myFriends = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function toArray() {
        return array(
                        'id'            => $this->id,
                        'firstname'     => $this->firstname,
                        'lastname'      => $this->lastname,
                        'facebookId'    => $this->facebookId,
                        'fullName'      => $this->getFullname(),
                    );
    }

    public function setPublic($public)
    {
        $this->public = $public;
        return $this;
    }

    public function getPublic()
    {
        return $this->public;
    }


    public function setDisplayPopinProfile($displayPopinProfile)
    {
        $this->displayPopinProfile = $displayPopinProfile;
        return $this;
    }

    public function getDisplayPopinProfile()
    {
        return $this->displayPopinProfile;
    }

    public function setDisplayPopinFriends($displayPopinFriends)
    {
        $this->displayPopinFriends = $displayPopinFriends;
        return $this;
    }

    public function getDisplayPopinFriends()
    {
        return $this->displayPopinFriends;
    }


    public function setBirthday(\DateTime $birthday)
    {
        $this->birthday = $birthday;
        return $this;
    }

    public function getBirthday()
    {
        return $this->birthday;
    }

    public function setNew($new)
    {
        $this->new = $new;
    }
    
    public function isNew()
    {
        return $this->new;
    }

    public function serialize()
    {
        return serialize(array($this->facebookId, parent::serialize()));
    }

    public function unserialize($data)
    {
        list($this->facebookId, $parentData) = unserialize($data);
        parent::unserialize($parentData);
    }
    
    /**
     * @return string
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * @param string $firstname
     */
    public function setFirstname($firstname=null)
    {
        $this->firstname = $firstname;
    }

    /**
     * @return string
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * @param string $lastname
     */
    public function setLastname($lastname=null)
    {
        $this->lastname = $lastname;
    }

    /**
     * Get the full name of the user (first + last name)
     * @return string
     */
    public function getFullName()
    {
        return $this->getFirstName() . ' ' . $this->getLastname();
    }


    /**
     * Set facebookId
     *
     * @param string $facebookId
     * @return User
     */
    public function setFacebookID($facebookID=null)
    {
        $this->facebookId = $facebookID;        
        if ($this->username=="")    //si on n'a pas de username
        {
            //on met le facebook id a la place
            $this->setUsername($facebookID);
        }        
    }

    /**
     * @param Array
     */
    public function setFBData($fbdata)
    {        
        if (isset($fbdata['id'])) {
            $this->setFacebookID($fbdata['id']);
            $this->addRole('ROLE_FACEBOOK');
        }
        if (isset($fbdata['first_name'])) {
            $this->setFirstname($fbdata['first_name']);
        }
        if (isset($fbdata['last_name'])) {
            $this->setLastname($fbdata['last_name']);
        }
        if (isset($fbdata['email'])) {
            $this->setEmail($fbdata['email']);
        }
    }

    /**
     * @param Product
     */
    public function addProduct(Product $product) 
    {
        $activeProducts = 0;

        foreach($this->products as $p) {
            if($p->getDeleted() == false) {
                $activeProducts++;
            }
        }

        if($activeProducts < 5) {
            $this->products[] = $product;
            $product->setUser($this);
        } else {
            throw new \Exception('5 products max');
        }
    }
    
    /**
     * Remove Product
     *
     * @param Product $product
     */
    public function removeProduct(Product $product)
    {
        $this->request->removeElement($product);
    }

    
    /**
     * Get products
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getProducts()
    {
        return $this->products;
    }

    /**
     * Set products
     *
     */
    public function setProducts($products)
    {
        $this->products = $products;
        return $this;
    }


    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get new
     *
     * @return boolean 
     */
    public function getNew()
    {
        return $this->new;
    }

    public function isMyFriendWithMe(\newStart\UserBundle\Entity\User $friendTest)
    {
        foreach($this->friendsWithMe as $friend) {
            if($friendTest->getId() == $friend->getMyFriends()->getId()) {
                return true;
            }
        }
        return false;
    }

    /**
     * Get friendsWithMe
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getFriendsWithMe()
    {
        return $this->friendsWithMe;
    }

    public function isMyFriend(\newStart\UserBundle\Entity\User $friendTest)
    {
        foreach($this->myFriends as $friend) {
            if($friendTest->getId() == $friend->getMyFriends()->getId()) {
                return true;
            }
        }
        return false;
    }

    /**
     * Get myFriends
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getMyFriends()
    {
        return $this->myFriends;
    }

    /**
     * Get facebookId
     *
     * @return string 
     */
    public function getFacebookId()
    {
        return $this->facebookId;
    }

    /**
     * Add friendsWithMe
     *
     * @param \newStart\UserBundle\Entity\Friends $friendsWithMe
     * @return User
     */
    public function addFriendsWithMe(\newStart\UserBundle\Entity\Friends $friendsWithMe)
    {
        $this->friendsWithMe[] = $friendsWithMe;
    
        return $this;
    }

    /**
     * Remove friendsWithMe
     *
     * @param \newStart\UserBundle\Entity\Friends $friendsWithMe
     */
    public function removeFriendsWithMe(\newStart\UserBundle\Entity\Friends $friendsWithMe)
    {
        $this->friendsWithMe->removeElement($friendsWithMe);
    }

    /**
     * Add myFriends
     *
     * @param \newStart\UserBundle\Entity\Friends $myFriends
     * @return User
     */
    public function addMyFriend(\newStart\UserBundle\Entity\Friends $myFriends)
    {
        $this->myFriends[] = $myFriends;
    
        return $this;
    }

    /**
     * Remove myFriends
     *
     * @param \newStart\UserBundle\Entity\Friends $myFriends
     */
    public function removeMyFriend(\newStart\UserBundle\Entity\Friends $myFriends)
    {
        $this->myFriends->removeElement($myFriends);
    }


}