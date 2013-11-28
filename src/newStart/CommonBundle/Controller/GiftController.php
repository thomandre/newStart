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
use Symfony\Component\HttpFoundation\RedirectResponse;


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
     * @Route("/me/", name="me")
     * @Template()
     */
    public function indexAction(Request $request)
    {   

        try {
            $facebook = $this->container->get('fos_facebook.api');
            $user = $this->getUser();
            if(!is_object($user)) {
//                var_dump($user);
                return new RedirectResponse($this->container->get('router')->generate('fbLogout'));
            }
        } catch (\Exception $e) {
            return new RedirectResponse($this->container->get('router')->generate('fbLogout'));
        }

        if ($request->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
            $error = $request->attributes->get(SecurityContext::AUTHENTICATION_ERROR);
        } else {
            $error = $request->getSession()->get(SecurityContext::AUTHENTICATION_ERROR);
        }

        try {
            $response = $facebook->api('/me/friends?fields=name,id,email');
        } catch (\Exception $e) {
            return new RedirectResponse($this->container->get('router')->generate('fbLogout'));
        }
        $fbFriends = $response['data'];
        $fbFriends = array_slice($fbFriends, 0, 10*5);


        $products = $this->em->getRepository('newStartCommonBundle:Product')->findBy(array('user' => $user, 'deleted' => false));
        $data = array();
        
        foreach($products as $p) {
            $tmp = $p->toArray();
            $tmp['thumb_url'] = $this->container->get('router')->generate('image_resize', array('width' => 189, 'height' => 222, 'image' => $p->getImageName()));
        
            $data[] = $tmp;
        }

        $displayPopIn = $user->getDisplayPopinProfile();
        $user->setDisplayPopinProfile(false);
        $this->em->persist($user);
        $this->em->flush();

        return array('gifts'        => $data,
                    'user'          => $user,
                    'fbFriends'     => $fbFriends,
                    'img_size'      => 75,
                    'displayPopIn'  => $displayPopIn

        );

    }

        /**
     * @Route("/me/settings", name="settings")
     * @Template()
     */
    public function settingsAction(Request $request)
    {
        try {
            $facebook = $this->container->get('fos_facebook.api');
            $user = $this->getUser();
            if(!is_object($user)) {
                return new RedirectResponse($this->container->get('router')->generate('fbLogout'));
            }
        } catch (\Exception $e) {
            return new RedirectResponse($this->container->get('router')->generate('fbLogout'));
        }

        if ($request->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
            $error = $request->attributes->get(SecurityContext::AUTHENTICATION_ERROR);
        } else {
            $error = $request->getSession()->get(SecurityContext::AUTHENTICATION_ERROR);
        }

        try {
            $response = $facebook->api('/me/friends?fields=name,id,email');
        } catch (\Exception $e) {
            return new RedirectResponse($this->container->get('router')->generate('fbLogout'));
        }

        return array('user' => $user);
    }

}