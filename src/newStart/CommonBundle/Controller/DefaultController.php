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

class DefaultController extends Controller
{


    /**
     * @DI\Inject("doctrine.orm.entity_manager")
     * @var \Doctrine\ORM\EntityManager
     */
    public $em;

    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction()
    {
        return array();
    }

    /**
     * @Route("/register_beta")
     */
    public function registerBetaAction(Request $request)
    {
    	$email = $request->get('email');
    	if(preg_match("/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i", $email)) {
    		$betaUser = new BetaUser();
    		$betaUser->setEmail($email);

            try {
                $this->getDoctrine()->getManager()->persist($betaUser);
                $this->getDoctrine()->getManager()->flush();
            } catch (\Exception $e) {
                return new JsonResponse(array('status' => 'ko', 'message' => 'This email is already used.'));
            }

	        return new JsonResponse(array('status' => 'ok', 'email' => $email));
    	}
        return new JsonResponse(array('status' => 'ko', 'message' => 'This email doesn\'t seems to be valid.'));
    }

    /**
     * @Route("/register_beta/show")
     */
    public function registerBetaSHowAction(Request $request)
    {
        $betaUsers = $this->getDoctrine()->getEntityManager()->getRepository('newStartCommonBundle:BetaUser')->findAll();

        var_dump($betaUsers);
		return new JsonResponse();
    }

    
    

}
