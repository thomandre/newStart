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
     * @Route("/me/product/{id}", name="my_product")
     * @Template()
     */
    public function indexAction(Request $request)
    {   

        try {
            $user = $this->getUser();
            if(!is_object($user)) {
                return new RedirectResponse($this->container->get('router')->generate('logout'));
            }
        } catch (\Exception $e) {
            return new RedirectResponse($this->container->get('router')->generate('logout'));
        }

        $products = $this->em->getRepository('newStartCommonBundle:Product')->findBy(array('user' => $user, 'deleted' => false));
        $data = array();
        
        foreach($products as $p) {
            $tmp = $p->toArray();
            $tmp['thumb_url'] = $this->container->get('router')->generate('image_resize', array('width' => 189, 'height' => 222, 'image' => $p->getImageName()));
        
            $data[] = $tmp;
        }

        return array('gifts'        => $data,
                    'user'          => $user,
                    'img_size'      => 75
        );
    }

    /**
     * @Route("/me/settings", name="settings")
     * @Template()
     */
    public function settingsAction(Request $request)
    {
        try {
            $user = $this->getUser();
            if(!is_object($user)) {
                return new RedirectResponse($this->container->get('router')->generate('logout'));
            }
        } catch (\Exception $e) {
            return new RedirectResponse($this->container->get('router')->generate('logout'));
        }

        return array('user' => $user);
    }

}