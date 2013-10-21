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


        return array('gifts' => array(
                                        array('url' => 'http://lsco.scene7.com/is/image/lsco/Levi/clothing/131040002-2013-fall-front-pdp.jpg?$1366x768$', "title" => "Chino Levis Commuter"),
                                        array('url' => 'http://www.hast.fr/12-138/chemise-blanche.jpg', "title" => "Chemise popeline blanche Hast"),
                                        array('url' => 'http://gourmandisedeluxe.com/73-216-large/car.jpg', "title" => "Truffe noire 100gr"), 
                                        //array('url' => 'http://www.boutique-saint-james.fr/ICEO_catalogue/pki21100006680.jpg', "title" => "Pull marine St James"),
                                        //array('url' => 'http://www.cuissedegrenouille.com/109-615-large/ceinture-laine-tressee-rouge-bleu-anthracite-james.jpg', "title" => "Ceinture Cuisse de Grenouille")
                                ),
                    'user' => $user,
                    'fbFriends' => $fbFriends,
                    'friends' => $friends,
                    'img_size' => 75

        );

    }

}