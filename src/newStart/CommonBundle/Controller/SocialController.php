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

class SocialController extends Controller
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


    /**
     * @Route("/friends/", name="friends")
     * @Template()
     */
    public function friendsAction()
    {
        $user = $this->getUser();
        return array('user' => $user);
    }

    /**
     * @Route("/profiles/{userId}", name="profile")
     * @Template()
     */
    public function profileAction($userId)
    {
        try {
            $facebook = $this->container->get('fos_facebook.api');
            $user = $this->getUser();
            $response = $facebook->api('/me/friends?fields=name,id,email');
        } catch (\Exception $e) {
            return new RedirectResponse($this->container->get('router')->generate('public_home'));
        }
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $userProfile = $em->getRepository('UserBundle:User')->findOneByFacebookId($userId);    
        $products = $em->getRepository('newStartCommonBundle:Product')->findBy(array('user' => $userProfile, 'deleted' => false, 'beenBought' => false));

        $gifts = array();

        foreach($products as $key => $p) {
            $tmp = $p->toArray();
            $tmp['thumb_url'] = $this->container->get('router')->generate('image_resize', array('width' => 189, 'height' => 222, 'image' => $p->getImageName()));
            $gifts[] = $tmp;
        }

        return array('user' => $user, 'userProfile' => $userProfile, 'gifts' => $gifts);
    }

    /**
     * @Route("/feed/", name="feed")
     * @Template()
     */
    public function feedAction()
    {
        try {
            $facebook = $this->container->get('fos_facebook.api');
            $user = $this->getUser();
            $response = $facebook->api('/me/friends?fields=name,id,email');
        } catch (\Exception $e) {
            return new RedirectResponse($this->container->get('router')->generate('public_home'));
        }       $user = $this->getUser();

        return array('user' => $user);
    }

}