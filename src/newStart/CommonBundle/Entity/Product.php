<?php
namespace newStart\CommonBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation\Type;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass="newStart\CommonBundle\Repository\ProductRepository")
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
     * @ORM\Column(type="text", nullable=false)
     */
    protected $url;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=false)
     */
    protected $price;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=true)
     */
    protected $imgUrl;

    /**
     * @ORM\ManyToOne(targetEntity="\newStart\UserBundle\Entity\User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer", options={"default":0}))
     */
    protected $beenBought;

    /**
     * @var integer
     *
     * @ORM\Column(type="integer", options={"default":0}))
     */
    protected $deleted;



    public function toArray() {
        return array(
                        'id'        => $this->id,
                        'name'      => $this->name,
                        'comment'   => $this->comment,
                        'url'       => $this->url,
                        'price'     => $this->price,
                        'imgUrl'    => $this->imgUrl,
                        'beenBought'=> $this->beenBought, 
                        'userId'    => $this->user->getId(),
                        'fbUserId'  => $this->user->getFacebookId(),
                        'fullName'  => $this->user->getFullname(),
                        'firstName' => $this->user->getFirstname(),

                    );
    }

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
        $this->name = strip_tags(stripslashes(str_replace('&nbsp;', ' ', $name)));
        //$this->name = str_replace('&nbsp;', ' ', filter_var($name
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
        $this->comment = strip_tags(stripslashes(str_replace('&nbsp;', ' ', $comment)));
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
     * Get imgResizedUrl
     *
     * @return string 
     */
    public function getImgResizedUrl($w, $h)
    {
        $imgResizedUrl = str_replace('web/images', 'web/app_dev.php/api/v1/image/resize/'.$w.'/'.$h, $this->getImgUrl());

        return $imgResizedUrl;
    }

    public function getImageName()
    {
        return basename($this->getImgUrl());
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

    /**
     * Set beenBought
     *
     * @param $beenBought
     * @return Product
     */
    public function setBeenBought($beenBought)
    {
        $this->beenBought = $beenBought;
    
        return $this;
    }

    /**
     * Get beenBought
     */
    public function getBeenBought()
    {
        return $this->beenBought;
    }

    /**
     * Set deleted
     *
     * @param $deleted
     * @return Product
     */
    public function setDeleted($deleted)
    {
        $this->deleted = $deleted;
    
        return $this;
    }

    /**
     * Get deleted
     */
    public function getDeleted()
    {
        return $this->deleted;
    }

}