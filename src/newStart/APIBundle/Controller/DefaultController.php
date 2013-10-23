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


class DefaultController extends Controller
{

    /** @DI\Inject("newstart_api_service_scrape") */
    public $scrapeService;

    /**
     * @Route("/api/v1/product/scrape", name="scrape")
     * @Template()
     * @Cache(expires="+50min")
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
        $response->setData(array('images' => $images, 'title' => $title));
        return $response;
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
        $product->setName(stripslashes($request->get('title')));
        $product->setUrl($request->get('url'));
        $product->setImgUrl($request->get('img'));
        //$product->setUser($user);

        $user->addProduct($product);
        $em->persist($product);
        $em->persist($user);
        $em->flush();

        $products = $em->getRepository('newStartCommonBundle:Product')->findAll(array('user' => $user));

        $data = array();
        foreach($products as $product) {
            $data[] = array(
                            'id' => $product->getId(),
                            'name' => $product->getName(),
                            'comment' => $product->getComment(),
                            'url' => $product->getUrl(),
                            'img_url' => $product->getImgUrl(),
                        );
        }

        $response = new JsonResponse();
        $response->setData($data);
        return $response;
    }

}
