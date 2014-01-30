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

    /** @DI\Inject("facebook") */
    public $facebook;

    /**
     * @Route("/friends/", name="friends")
     * @Template()
     */
    public function friendsAction()
    {
        try {
            $user = $this->getUser();
        } catch (\Exception $e) {
            return new RedirectResponse($this->container->get('router')->generate('logout'));
        }

        $em = $this->getDoctrine()->getManager();

        $user = $this->getUser();
        if($user == null) {
            return new RedirectResponse($this->container->get('router')->generate('logout'));
        }
        $displayPopIn = $user->getDisplayPopinFriends();
        $user->setDisplayPopinFriends(false);

        $this->em->persist($user);
        $this->em->flush();

        return array('user' => $user, 'displayPopIn' => $displayPopIn);
    }

    /**
     * @Route("/profiles/{userId}", name="profile")
     * @Template()
     */
    public function profileAction($userId)
    {
        $em = $this->getDoctrine()->getManager();
        $userProfile = $em->getRepository('UserBundle:User')->findOneByFacebookId($userId);    
        $user = $this->getUser();
        if($user == null) {
            if($userProfile->getPublic() == false) {
                return new RedirectResponse($this->container->get('router')->generate('logout'));
            } else {
                $user = null;
            }
        }
        $products = $em->getRepository('newStartCommonBundle:Product')->findBy(array('user' => $userProfile, 'deleted' => false, 'beenBought' => false));

        $gifts = array();

        foreach($products as $key => $p) {
            $tmp = $p->toArray();
            $tmp['thumb_url'] = $this->container->get('router')->generate('image_resize', array('width' => 176, 'height' => 222, 'image' => $p->getImageName()));
            $gifts[] = $tmp;
        }

        return array('user' => $user, 'userProfile' => $userProfile, 'gifts' => $gifts, 'facebook' => $this->facebook);
    }

    /**
     * @Route("/feed/", name="feed")
     * @Template()
     */
    public function feedAction()
    {
        try {
            $user = $this->getUser();
        } catch (\Exception $e) {
            return new RedirectResponse($this->container->get('router')->generate('logout'));
        }
        $user = $this->getUser();
        if($user == null) {
            return new RedirectResponse($this->container->get('router')->generate('logout'));
        }
        $em = $this->getDoctrine()->getManager();
        $products = $em->getRepository('newStartCommonBundle:Product')->getProductsFeedForUser($user);    
        $data = array();
        foreach($products as $p) {
            $tmp = $p->toArray();
            $tmp['thumb_url'] = $this->container->get('router')->generate('image_resize', array('width' => 176, 'height' => 165, 'image' => $p->getImageName()));
            $tmp['user'] = $p->getUser()->toArray();
            $data[] = $tmp;
        }

        return array('user' => $user, 'products' => $data);
    }

}







