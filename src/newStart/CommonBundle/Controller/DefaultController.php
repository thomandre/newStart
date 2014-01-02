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
use Symfony\Component\HttpFoundation\RedirectResponse;

class DefaultController extends Controller
{


    /**
     * @DI\Inject("doctrine.orm.entity_manager")
     * @var \Doctrine\ORM\EntityManager
     */
    public $em;

    /** @DI\Inject("mailer") */
    public $mailer;

    /** @DI\Inject("swiftmailer.transport.real") */
    public $transport;

    /** @DI\Inject("security.context") */
    private $sc;

    /** @DI\Inject("kernel") */
    public $kernel;    

    /** @DI\Inject("facebook") */
    public $facebook;


    /**
     * @Route("/", name="public_home")
     * @Template()
     */
    public function indexAction()
    {   
        if($this->kernel->getEnvironment() == 'test') {
            try {
                //session_start();
            } catch(\Exception $e) {

            }
        }

        if(strpos($_SERVER['HTTP_USER_AGENT'], 'Googlebot') === false) {
            $isGoogle = false;
        } else {
            $isGoogle = true;
        }
        
        return array('isGoogle' => $isGoogle, 'facebook' => $this->facebook);
    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logout(Request $request) {
        $session = $this->getRequest()->getSession();
        $token = $session->get('token');
        $this->get("request")->getSession()->invalidate();
        $this->get("security.context")->setToken(null);
        $this->getRequest()->getSession()->remove('token');

        return $this->redirect($facebook->getLoginUrl(array('redirect_uri' => 'public_home')));
    }

    /**
     * @Route("/fblogin", name="fblogin")
     */
    public function login(Request $request) {
        $fbUserService  = $this->get('fbUserService');

        if($facebookId = $this->facebook->getUser()){
            $me = $this->facebook->api('/me/');
            // you can do whatever you want, so nobody told me what to do 
            // and there was no preconception of what to do

            $fbUserService->update($me);

            return new RedirectResponse($this->container->get('router')->generate('me'));
        } else {
            // When does this happens ?
            // not authenticated.
            // redirect to home
            return $this->redirect($this->facebook->getLoginUrl(array('redirect_uri' => 'http://havefyve.local:8888/newStart/web/app_dev.php/')));
        }

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
                return new JsonResponse(array('status' => 'ko', 'message' => 'Cet email est déjà utilisé.'));
            }


            $mail = \Swift_Message::newInstance();

            $mail
                    ->setFrom('admin@havefyve.com')
                    ->setTo($email)
                    ->setSubject('test')
                    ->setBody('this is a test')
                    ->setContentType('text/html');

            //$result = $this->mailer->send($mail, $failures);
            
            //SPOOL
            //$spool = $this->mailer->getTransport()->getSpool();
            //$spool->flushQueue($this->transport);




	        return new JsonResponse(array('status' => 'ok', 'email' => $email));
    	}
        return new JsonResponse(array('status' => 'ko', 'message' => 'Cet email ne semble pas valide.'));
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
