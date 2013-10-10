<?php

namespace newStart\CommonBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use newStart\CommonBundle\Entity\BetaUser;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\UserBundle\Security\User\Provider\FacebookProvider;

class RegistrationController extends Controller
{


    /**
     * @DI\Inject("doctrine.orm.entity_manager")
     * @var \Doctrine\ORM\EntityManager
     */
    public $em;

    /**
     * @Route("/friends-select/", name="friends-select")
     * @Template()
     */
    public function indexAction()
    {   
        $facebook = $this->container->get('fos_facebook.api');

        $response = $facebook->api('/me/friends?fields=name,id,email');
        $friends = $response['data'];
        
        //$friends = array_slice($friends, 0, 20*4);
        //print_r($friends);

        return array('friends' => $friends, 'bestFriendsLimit' => 5, 'img_size' => 75);
    }




}