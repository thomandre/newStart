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
        } catch (\Exception $e) {
            var_dump("not logged");
        }

        if ($request->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
            $error = $request->attributes->get(SecurityContext::AUTHENTICATION_ERROR);
        } else {
            $error = $request->getSession()->get(SecurityContext::AUTHENTICATION_ERROR);
        }

        try {
            $response = $facebook->api('/me/friends?fields=name,id,email');
        } catch (\Exception $e) {
            return new RedirectResponse($this->container->get('router')->generate('public_home'));
        }
        $fbFriends = $response['data'];
        $fbFriends = array_slice($fbFriends, 0, 10*5);

        $friends = array(
                            array('id' => '516107440', 'name' => 'Alban Margain'),
                            array('id' => '197811250', 'name' => 'Angus Ross'),
                            array('id' => '538657916', 'name' => 'Charlotte Hao-Chiu André'),
                            array('id' => '581496566', 'name' => 'Charles Pugliesi-Conti'),
                            array('id' => '607175812', 'name' => 'Pierre du Chesne'),
                            array('id' => '507231631', 'name' => 'Maxime Aoustin'),
                            array('id' => '513728698', 'name' => 'Michael Canil'),
                            array('id' => '693496533', 'name' => 'François Le Pøul'),

                        );

        $products = $this->em->getRepository('newStartCommonBundle:Product')->findAll(array('user' => $user));

        return array('gifts' => $products,
                    'user' => $user,
                    'fbFriends' => $fbFriends,
                    'friends' => $friends,
                    'img_size' => 75

        );

    }

}