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

class ApiController extends Controller
{

    /** @DI\Inject("newstart_api_service_scrape") */
    public $scrapeService;

    /**
     * @Route("/api/v1/product/scrape", name="scrape")
     * @Template()
     * @Cache(expires="+2hours", public="true")
     */
    public function scrapeProductAction(Request $request)
    {
        $images = array();
        $title = '';

        try {
            if($request->get('url') && $request->get('url') != '') {
                $images = $this->scrapeService->getBiggestImg($request->get('url'));
                $title  = $this->scrapeService->getTitle($request->get('url'));
            }
        } catch(\Exception $e) {
            if($e->getMessage() == '404') {
                throw $this->createNotFoundException('Le produit n\'existe pas');
            }
        }

        $response = new JsonResponse();
        $imagesArray = array();
        $imagesThumbArray = array();
        
        foreach($images as $image) {
            $imagesThumbArray[] = $this->container->get('router')->generate('image_resize', array('width' => 200, 'height' => 200, 'image' => $image->getName()));
            $imagesArray[] = $image->getCurrentUrl($request);
        }

        $response->setData(array('images' => $imagesArray, 'imagesThumb' => $imagesThumbArray, 'title' => $title, 'url' => $request->get('url')));

        return $response;

        //return array();
    }

    /**
     * @Route("/api/v1/product/add", name="product_add")
     * @Template()
     */
    public function addProductAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        
        $product = new Product();
//        var_dump($request->get('title'));
        $product->setName($request->get('title'));
//        var_dump($product->getName());
        $product->setUrl($request->get('url'));
        $product->setImgUrl($request->get('img'));
        $product->setComment($request->get('comment'));

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
    public function removeProductAction(Request $request, $productId)
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        
        $product = $em->getRepository('newStartCommonBundle:Product')->find($productId);

        if($product->getUser() == $user) {
            $em->remove($product);
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
        $products = $em->getRepository('newStartCommonBundle:Product')->findBy(array('user' => $user));

        $data = array();
        foreach($products as $p) {
            $tmp = $p->toArray();
            $tmp['thumb_url'] = $this->container->get('router')->generate('image_resize', array('width' => 189, 'height' => 222, 'image' => $p->getImageName()));
        
            $data[] = $tmp;
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
        $userProfile = $em->getRepository('UserBundle:User')->findOneByFacebookId($userId);    
        
        $data = array();
        foreach($userProfile->getProducts() as $key => $p) {
            $tmp = $p->toArray();
            $tmp['thumb_url'] = $this->container->get('router')->generate('image_resize', array('width' => 189, 'height' => 222, 'image' => $p->getImageName()));
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
        $data['thumb_url'] = $this->container->get('router')->generate('image_resize', array('width' => 183, 'height' => 222, 'image' => $product->getImageName()));
     
        $response = new JsonResponse();
        $response->setData($data);
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

}