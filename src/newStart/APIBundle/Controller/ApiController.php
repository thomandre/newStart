<?php

namespace newStart\APIBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\CommonBundle\Entity\Product;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use \Doctrine\Common\Util\Debug;
use newStart\APIBundle\Service\ImageService;
use newStart\CommonBundle\Entity\Bug;
use Symfony\Component\Process\Process;

class ApiController extends Controller
{

    /** @DI\Inject("newstart_api_service_scrape") */
    public $scrapeService;

    /** @DI\Inject("newstart_api_service_download") */
    public $dlService;

    /**
     * @Route("/api/v1/profile/private", name="profile_prive")
     * @Template()
     */
    public function privateProfileAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        if(!is_object($user)) {
            $response = new JsonResponse();
            $response->setData(array('status' => 'ko'));
            return $response;
        }

        $user->setPublic($request->get('publicProfile'));
        $em->persist($user);

        $em->flush();

        $response = new JsonResponse();
        $response->setData(array('status' => 'ok', 'isPublic' => $user->getPublic()));
        return $response;
    }

     /**
     * @Route("/api/v1/profile/mail", name="profile_mail")
     * @Template()
     */
    public function emailStopAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        if(!is_object($user)) {
            $response = new JsonResponse();
            $response->setData(array('status' => 'ko'));
            return $response;
        }

        $user->setEmailStop($request->get('emailStop'));
        $em->persist($user);

        $em->flush();

        $response = new JsonResponse();
        $response->setData(array('status' => 'ok', 'emailStop' => $user->getEmailStop()));
        return $response;
    }

    /**
     * @Route("/api/v1/product/scrape", name="scrape")
     * @Template()
     * @Cache(expires="+2hours", public="true")
     */
    public function scrapeProductAction(Request $request)
    {
        $title = '';

        try {
            if($request->get('url') && $request->get('url') != '') {
                $title  = $this->scrapeService->getTitle($request->get('url'));
            }
        } catch(\Exception $e) {
            if($e->getMessage() == '404') {
                throw $this->createNotFoundException('Le produit n\'existe pas');
            }
        }

        $response = new JsonResponse();
        $response->setData(array('title' => $title, 'url' => $request->get('url')));

        return $response;
    }

    /**
     * @Route("/api/v1/image/scrape", name="image_scrape")
     * @Cache(expires="+2hours", public="true")
     */
    public function scrapeImagesAction(Request $request) 
    {
        $response = new JsonResponse();
        $dlService = $this->dlService;
        $router = $this->container->get('router');

        if($request->get('url') && $request->get('url') != '') {
            //var_dump($response);
            $command = 'unset DYLD_LIBRARY_PATH; phantomjs ../getComputedStyle.js '.$request->get('url').' 1024 768 ';
            
            $process = new Process($command);
            $process->run();

            $buffer = $process->getOutput();

            $match = array();
            $res = preg_match('/@@@([^@]*)@@@/', $buffer, $match);

            $imagesArray      = array();
            $imagesThumbArray = array();

            if($res) {
                $phantomResponse = json_decode($match[1]);
                if($phantomResponse == null) {
                    echo 'Error : "'.$match[1].'" is not a valid JSON.';
                } else {
                    $srcs = array();
                    foreach($phantomResponse->images as $i) {
                        $imageEntity = $dlService->getImageViaCache($i->src);
                        $imagesArray[] = $imageEntity->getCurrentUrl($request);

                        $imagesThumbArray[] = $router->generate('image_resize', array('width' => 200, 'height' => 200, 'image' => $imageEntity->getName()));
                    }

                    $response->setData(array('title' => $phantomResponse->title, 'price' => $phantomResponse->price, 'images' => $imagesArray, 'imagesThumb' => $imagesThumbArray, 'imgNumber' => count($phantomResponse->images)));
                }
            } else {
                var_dump($res);
            }
        }

        //var_dump($response);

        return $response;
    }

    /**
     * @Route("/api/v1/product/add", name="product_add")
     * @Template()
     */
    public function addProductAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $dlService = $this->dlService;

        $content = $this->get("request")->getContent();

        if (!empty($content)) {
            $params = json_decode($content, true); // 2nd param to get as array
        }

        $user = $this->getUser();
        
        $product = new Product();
        $product->setName($params['title']);
        $product->setUrl($params['url']);

        if($params['img'] == null || $params['img'] == 'null') {
            $command = 'unset DYLD_LIBRARY_PATH; phantomjs ../getComputedStyle.js '.$params['url'].' 1024 768 2> /dev/null';
            $process = new Process($command);
            $process->run();
            
            $buffer = $process->getOutput();

            $match = array();
            $res = preg_match('/@@@([^@]*)@@@/', $buffer, $match);
            if($res) {
                $phantomResponse = json_decode($match[1]);
                if($phantomResponse == null || $phantomResponse->images == null) {
                    //echo 'Error : "'.$match[1].'" is not a valid JSON.';
                    $router = $this->container->get('router');
                    $siteUrl = $router->generate('public_home', array(), true);
                    $imageEntity = $dlService->getImageViaCache($siteUrl.'../bundles/newstartcommon/images/imageNotFoundStd.jpg');
                    $product->setImgUrl($imageEntity->getCurrentUrl($request));
                } else {
                    $imageEntity = $dlService->getImageViaCache($phantomResponse->images[0]->src);
                    $product->setImgUrl($imageEntity->getCurrentUrl($request));
                    $product->setPrice($phantomResponse->price);
                }
            }
        } else {
            $product->setImgUrl($params['img']);
            $product->setPrice($params['price']);
        }

        if(!isset($params['comment'])) {
            $params['comment'] = '';
        }
        $product->setComment($params['comment']);
        $product->setBeenBought(false);
        $product->setDeleted(false);

        $em->persist($product);
        $user->addProduct($product);
        $em->persist($user);

        $em->flush();

        $response = $this->forward('newStartAPIBundle:Api:myProducts', array());
        return $response;
    }

    /**
     * @Route("/api/v1/product/remove/{productId}", name="product_remove")
     * @Template()
     */
    public function removeProductAction(Request $request, $productId = null)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        
        $product = $em->getRepository('newStartCommonBundle:Product')->find($productId);

        if($product->getUser() == $user) {
            $product->setDeleted(true);
            $em->persist($product);
            $em->flush();
        } else {
            throw $this->createNotFoundException('Fais pas ci, fais pas ça...');
        }

        $response = $this->forward('newStartAPIBundle:Api:myProducts', array());
        return $response;
    }


    /**
     * @Route("/api/v1/product/list-mine", name="product_show")
     * @Template()
     */
    public function myProductsAction()
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $products = $em->getRepository('newStartCommonBundle:Product')->findBy(array('user' => $user, 'deleted' => false));

        $data = array();
        foreach($products as $p) {
            $tmp = $p->toArray();
            $tmp['thumb_url'] = $this->container->get('router')->generate('image_resize', array('width' => 180, 'height' => 222, 'image' => $p->getImageName()));
        
            $data[] = $tmp;
        }
        
        $nbProducts = count($data);

        for($i=$nbProducts; $i < 5; $i++) {
            $data[] = array();
        }

        $response = new JsonResponse();
        $response->setData($data);
        return $response;
    }

    /**
     * @Route("/api/v1/product/list/{userId}", name="user_product_show")
     * @Template()
     */
    public function productsListAction($userId)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $userProfile = $em->getRepository('UserBundle:User')->findOneBy(array('facebookId' => $userId));    
        $products = $em->getRepository('newStartCommonBundle:Product')->findBy(array('user' => $userProfile, 'deleted' => false, 'beenBought' => false));

        $data = array();
        foreach($products as $key => $p) {
            $tmp = $p->toArray();
            $tmp['thumb_url'] = $this->container->get('router')->generate('image_resize', array('width' => 180, 'height' => 222, 'image' => $p->getImageName()));
            $data[] = $tmp;
        }

        $response = new JsonResponse();
        $response->setData($data);
        return $response;
    }

    /**
     * @Route("/api/v1/product/show/{productId}", name="product_detail")
     * @Template()
     */
    public function detailProductAction($productId)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $product = $em->getRepository('newStartCommonBundle:Product')->find($productId);

        $data = $product->toArray();
        $data['thumb_url'] = $this->container->get('router')->generate('image_resize', array('width' => 180, 'height' => 222, 'image' => $product->getImageName()));
     
        $response = new JsonResponse();
        $response->setData($data);
        return $response;
    }

    /**
     * @Route("/api/v1/product/bought", name="have_bought")
     * @Template()
     */
    public function haveBoughtProductAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $productId = $request->get('productId');
        $user = $this->getUser();
        $product = $em->getRepository('newStartCommonBundle:Product')->find($productId);
        if($product->getUser() == $user) {
            $product->setDeleted(true);
        }
        $product->setBeenBought(true);
        $em->persist($product);
        $em->flush();

        $response = new JsonResponse();
        $response->setData(array('success' => true));
        return $response;
    }

    /**
     * @Route("/api/v1/friends/list-mine/{friendName}", name="friend_api")
     * @Template()
     */
    public function friendsAction($friendName = null)
    {
        $user = $this->getUser();

        $data = array();
        foreach($user->getMyFriends() as $friend) {
            $patern = '/^'.$friendName.'/i';
            if(preg_match($patern, $friend->getMyFriends()->getFirstName()) || preg_match($patern, $friend->getMyFriends()->getLastName()) || preg_match($patern, $friend->getMyFriends()->getFullName())) {
                $tmp = $friend->getMyFriends()->toArray();
                $tmp['favorite'] = $friend->isFavorite();
                $data[] = $tmp;                
            }
        }
        $response = new JsonResponse();
        $response->setData($data);
        
        return $response;
    }

    /**
     * @Route("/api/v1/friends/favorize/{friendId}", name="friend_favorize")
     * @Template()
     */
    public function friendFavorizeAction($friendId)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();

        foreach($user->getMyFriends() as $friend) {
            if($friend->getMyFriends()->getFacebookId() == $friendId) {
                if($friend->isFavorite()) {
                    $friend->setFavorite(false);
                } else {
                    $friend->setFavorite(true);                    
                }
                $em->persist($friend);
                $em->flush();
        
                $response = new JsonResponse();
                $response->setData(array('success' => true, 'favorized' => $friend->isFavorite()));
                
                return $response;
            }
        }
        $response = new JsonResponse();
        $response->setData(array('success' => false));

        return $response;
    }

    /**
     * @Route("/api/v1/image/resize/{width}/{height}/{image}", name="image_resize")
     * @Template()
     * @Cache(expires="+2hours", public="true")
     */
    public function imageResizeAction($width, $height, $image)
    {
        $imageService = new ImageService();

        $rootDir = $this->container->getParameter('kernel.root_dir');
        if(!is_dir($rootDir.'/../web/images/thumb/')) {
            mkdir($rootDir.'/../web/images/thumb/');
        }
        try {
            $filePath = $rootDir.'/../web/images/'.$image;
            $fileDest = $rootDir.'/../web/images/thumb/'.$width.'_'.$height.'_'.$image;
            $image = $imageService->imageResize($filePath, $fileDest, $width, $height);
        } catch(\Exception $e) {
            throw $this->createNotFoundException('L\'image n\'existe pas');
        }

        $imageData = file_get_contents($fileDest);

        $response = new Response($imageData, 200);
        $response->headers->set('Content-Type', 'image/jpg');
        return $response;
    }


    /**
     * @Route("/api/v1/bug-report", name="bug_report")
     * @Template()
     */
    public function bugReportAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();

        $bug = new Bug();
        $bug->setConditions($request->get('conditions'));
        $bug->setCauses($request->get('causes'));
        $bug->setType($request->get('type'));
        $bug->setPriority($request->get('priority'));
        $bug->setUserName($user->getFullName());
        $bug->setUserAgent($request->headers->get('user-agent'));

        $em->persist($bug);
        $em->flush();

        $response = new JsonResponse();
        $response->setData(array('success' => true));

        return $response;
    }
}
