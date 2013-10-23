<?php
namespace newStart\CommonBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation\Type;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity()
 */
class Product
{
	/**
     * @var integer
     *
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=true)
     */
    protected $name;


    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=true)
     */
    protected $comment;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=false)
     */
    protected $url;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=true)
     */
    protected $imgUrl;

    /**
     * @ORM\ManyToOne(targetEntity="\newStart\UserBundle\Entity\User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

    /**
     * Set id
     *
     * @param $id
     * @return Product
     */
    public function setId($id)
    {
        $this->id = $id;
    
        return $this;
    }

    /**
     * Get id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     * @return Product
     */
    public function setName($name)
    {
        $this->name = $name;
    
        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set comment
     *
     * @param string $comment
     * @return Product
     */
    public function setComment($comment)
    {
        $this->comment = $comment;
    
        return $this;
    }

    /**
     * Get comment
     *
     * @return string 
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * Set description
     *
     * @param string $imgUrl
     * @return Product
     */
    public function setImgUrl($imgUrl)
    {
        $this->imgUrl = $imgUrl;
    
        return $this;
    }

    /**
     * Get imgUrl
     *
     * @return string 
     */
    public function getImgUrl()
    {
        return $this->imgUrl;
    }

    /**
     * Set price
     *
     * @param $price
     * @return Product
     */
    public function setPrice($price)
    {
        $this->price = $price;
    
        return $this;
    }

    /**
     * Get price
     *
     * @return  
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set url
     *
     * @param string $url
     * @return Product
     */
    public function setUrl($url)
    {
        $this->url = $url;
    
        return $this;
    }

    /**
     * Get url
     *
     * @return string 
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Set user
     *
     * @param \newStart\UserBundle\Entity\User $user
     * @return \newStart\MarketplaceBundle\Entity\BuyOffer
     */
    public function setUser(\newStart\UserBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \newStart\UserBundle\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }

}