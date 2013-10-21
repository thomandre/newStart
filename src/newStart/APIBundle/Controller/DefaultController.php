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

class DefaultController extends Controller
{

    /** @DI\Inject("newstart_api_service_scrape") */
    public $scrapeService;

    /**
     * @Route("/api/v1/product/scrape", name="scrape")
     * @Template()
     */
    public function scrapeProductAction(Request $request)
    {
        if($request->get('url') && $request->get('url') != '') {
            $images = $this->scrapeService->getBiggestImg($request->get('url'));
            $title  = $this->scrapeService->getTitle($request->get('url'));
        }

        $response = new JsonResponse();
        $response->setData(array('images' => $images, 'title' => $title));
        return $response;
    }

    /**
     * @Route("/api/v1/product/add")
     * @Template()
     */
    public function addProductAction(Request $request)
    {
        $product = new Product();
        $product->setName('no name');
        $product->setUrl($this->get('url'));
        $product->setImgUrl($this->get('img'));
    }

}
