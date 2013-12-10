<?php
namespace newStart\CommonBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation\Type;
use Symfony\Component\Validator\Constraints as Assert;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity()
 */
class Bug
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
     * @ORM\Column(type="text", nullable=true)
     */
    protected $conditions;

    /**
     * @var string
     *
     * @ORM\Column(type="text", nullable=true)
     */
    protected $causes;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=true)
     */
    protected $type;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=true)
     */
    protected $priority;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=true)
     */
    protected $userAgent;

    /**
     * @var string
     *
     * @ORM\Column(type="string", nullable=true)
     */
    protected $userName;


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
     * Set conditions
     *
     * @param string $conditions
     * @return Bug
     */
    public function setConditions($conditions)
    {
        $this->conditions = $conditions;
    
        return $this;
    }

    /**
     * Get conditions
     *
     * @return text 
     */
    public function getConditions()
    {
        return $this->conditions;
    }

    /**
     * Set causes
     *
     * @param text $causes
     * @return Bug
     */
    public function setCauses($causes)
    {
        $this->causes = $causes;
    
        return $this;
    }

    /**
     * Get causes
     *
     * @return text 
     */
    public function getCauses()
    {
        return $this->causes;
    }

    /**
     * Set type
     *
     * @param text $type
     * @return Bug
     */
    public function setType($type)
    {
        $this->type = $type;
    
        return $this;
    }

    /**
     * Get type
     *
     * @return string 
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set priority
     *
     * @param string $priority
     * @return Bug
     */
    public function setPriority($priority)
    {
        $this->priority = $priority;
    
        return $this;
    }

    /**
     * Get priority
     *
     * @return string 
     */
    public function getPriority()
    {
        return $this->priority;
    }

    /**
     * Set userAgent
     *
     * @param string $userAgent
     * @return Bug
     */
    public function setUserAgent($userAgent)
    {
        $this->userAgent = $userAgent;
    
        return $this;
    }

    /**
     * Get userAgent
     *
     * @return string 
     */
    public function getUserAgent()
    {
        return $this->userAgent;
    }

    /**
     * Set userName
     *
     * @param string $userName
     * @return Bug
     */
    public function setUserName($userName)
    {
        $this->userName = $userName;
    
        return $this;
    }

    /**
     * Get userName
     *
     * @return string 
     */
    public function getUserName()
    {
        return $this->userName;
    }
}