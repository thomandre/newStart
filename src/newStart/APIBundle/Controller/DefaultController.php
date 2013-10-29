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

class DefaultController extends Controller
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

        //$imgResizeRoute = $this->container->get('router')->generate('image_resize');

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

        $response = $this->forward('newStartAPIBundle:Default:myProducts', array());
        return $response;
    }

    /**
     * @Route("/api/v1/product/show", name="product_show")
     * @Template()
     */
    public function myProductsAction()
    {
        $em = $this->getDoctrine()->getManager();
        $user = $this->getUser();
        $products = $em->getRepository('newStartCommonBundle:Product')->findAll(array('user' => $user));

        $data = array();
        foreach($products as $p) {
            $data[] = array(
                            'id' => $p->getId(),
                            'name' => $p->getName(),
                            'comment' => $p->getComment(),
                            'url' => $p->getUrl(),
                            'img_url' => $p->getImgResizedUrl(222, 183),
                        );
        }

        $response = new JsonResponse();
        $response->setData($data);
        return $response;
    }

    /**
     * @Route("/api/v1/image/resize/{width}/{height}/{image}", name="image_resize")
     * @Template()
     */
    public function imageResizeAction($image, $height, $width)
    {
        $imageService = new ImageService();

        $rootDir = $this->container->getParameter('kernel.root_dir');
        try {
            $filePath = $rootDir.'/../web/images/'.$image;
            $fileDest = $rootDir.'/../web/images/thumb/'.$width.'_'.$height.'_'.$image;
            $image = $imageService->imageResize($filePath, $fileDest, $height, $width);
        } catch(\Exception $e) {
            throw $this->createNotFoundException('L\'image n\'existe pas');
        }

        $imageData = file_get_contents($fileDest);

        $response = new Response($imageData, 200);
        $response->headers->set('Content-Type', 'image/jpg');
        return $response;
    }

}
