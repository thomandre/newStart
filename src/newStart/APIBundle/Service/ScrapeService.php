<?php

namespace newStart\APIBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\APIBundle\Service\UrlService;

use JMS\DiExtraBundle\Annotation\Inject;
use JMS\DiExtraBundle\Annotation\InjectParams;

/** @DI\Service("newstart_api_service_scrape") */
class ScrapeService
{

	protected $html;

    /** @DI\Inject("service_container") */
    public $container;

    public $sw;

	public function getPrice($html)
	{
		$dom = new \DOMDocument();
		$dom->loadHTML($html);
		$xpath = new \DOMXPath($dom);
		$xpath->registerNamespace("html", "http://www.w3.org/1999/xhtml"); 
		 
		//Put your XPath Query here
		$my_xpath_query = "//b[@class='price']";

		$results = $xpath->query($my_xpath_query);
		return $results->item(0)->firstChild->nodeValue;
	}

	public function getImages($html) 
	{
		libxml_use_internal_errors(true);
		$dom = new \DOMDocument();
		$dom->strictErrorChecking = false;
		$dom->loadHTML($html);
		$xpath = new \DOMXPath($dom);
		$xpath->registerNamespace("html", "http://www.w3.org/1999/xhtml"); 
		 
		$my_xpath_query = "//img";

		$results = $xpath->query($my_xpath_query);
		$img = array();

		foreach($results as $result) {
			if((string) $result->getAttribute('src') != '') {
				$img[] = (string) $result->getAttribute('src');
			} else {
				// add some log here
				// var_dump($result);
			}
		}
		return $img;
	}


	public function getAbsoluteUrlImages($url) 
	{
		$urlService = new UrlService();
		$dlService  = new DownloadService(); 
		if(!isset($this->html)) {
			$this->html = $dlService->download($url);
		}

		$images = $this->getImages($this->html);

		foreach($images as $key => $image) {
			$images[$key] = $urlService->url_to_absolute($url, $image);
			if($images[$key] == false || $images[$key] == '') {
				unset($images[$key]);
			}
		}

		return $images;
	}

	public function getTitle($url) {
		$urlService = new UrlService();
		$dlService  = new DownloadService(); 

		if(!isset($this->html)) {
			$this->html = $dlService->download($url);
		}
		
		libxml_use_internal_errors(true);
		$dom = new \DOMDocument();
		$dom->strictErrorChecking = false;
		$dom->loadHTML($this->html);
		$xpath = new \DOMXPath($dom);
		$xpath->registerNamespace("html", "http://www.w3.org/1999/xhtml"); 
		 
		$my_xpath_query = "//title";

		$results = $xpath->query($my_xpath_query);
		if($results == false) {
			return '';
		} else {
			return (string) $results->item(0)->nodeValue;
		}
	}

	public function getBiggestImg($url) 
	{
		$dlService = $this->container->get('newstart_api_service_download');
		$sortableImages = array();

		$images = $this->getAbsoluteUrlImages($url);
		
		foreach($images as $image) {
			try {
				$imageEntity = $dlService->getImageViaCache($image);
				if($imageEntity->getSurface() > 7000 && ($imageEntity->getRatio() < 3 && $imageEntity->getRatio() > 0.33)) {
					$sortableImages[] = $imageEntity;
				}
			} catch(\Exception $e) {
			}			
		}

		usort($sortableImages, function ($a, $b) {			
			if($a->getSurface() == $b->getSurface()) {
				return 0;
			} else {
				if($a->getSurface() > $b->getSurface()) {
					return -1;
				} else {
					return 1;
				}
			}
		});


		//var_dump($sortableImages);
		return $sortableImages;
	}

}