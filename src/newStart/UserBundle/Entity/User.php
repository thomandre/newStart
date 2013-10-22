<?php
namespace newStart\UserBundle\Entity;

use FOS\UserBundle\Entity\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use newStart\CommonBundle\Entity\Product;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity
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
     * @@ORM\OneToMany(targetEntity="\newStart\CommonBundle\Entity\Product", mappedBy="user")
     */
    protected $products;

    public function __construct()
    {
        parent::__construct();
        // your own logic        
    }

    public function setNew($new) {
        $this->new = $new;
    }
    
    public function isNew() {
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
     * @param string $facebookID
     * @return void
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
     * @return string
     */
    public function getFacebookID()
    {
        return $this->facebookId;
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
        if(count($this->products) < 5) {
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
    public function getProducts() {
        return $this->products;
    }

}