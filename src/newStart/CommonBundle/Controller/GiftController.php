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
use Symfony\Component\Security\Core\SecurityContext;

class GiftController extends Controller
{

    /** @DI\Inject("security.context") */
    private $sc;

    /**
     * @DI\Inject("doctrine.orm.entity_manager")
     * @var \Doctrine\ORM\EntityManager
     */
    public $em;

    /**
     * @Route("/me/")
     * @Template()
     */
    public function indexAction(Request $request)
    {   

        $user = $this->getUser();
        var_dump($user);

        if ($request->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
            $error = $request->attributes->get(SecurityContext::AUTHENTICATION_ERROR);
        } else {
            $error = $request->getSession()->get(SecurityContext::AUTHENTICATION_ERROR);
        }



        return array('gifts' => array('http://www.balibaris.com/862-4963-large/mercer-clan-rouge-navy.jpg', 
                                 'http://lsco.scene7.com/is/image/lsco/Levi/clothing/131040002-2013-fall-front-pdp.jpg?$1366x768$'));

    }

}