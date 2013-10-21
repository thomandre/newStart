<?php

namespace newStart\APIBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\APIBundle\Service\UrlService;

/**
 * @Service("newstart_api_service_scrape", public=true)
 */
class ScrapeService
{
	public function getPrice($html)
	{
		$dom = new \DOMDocument();
		$dom->loadHTML($html);
		$xpath = new \DOMXPath($dom);
		$xpath->registerNamespace("html", "http://www.w3.org/1999/xhtml"); 
		 
		//Put your XPath Query here
		$my_xpath_query = "//b[@class='price']";

		$results = $xpath->query($my_xpath_query);
		//var_dump($results->hasChildNodes());
		return $results->item(0)->firstChild->nodeValue;
	}

	public function getImages($html) 
	{
		$dom = new \DOMDocument();
		$dom->loadHTML($html);
		$dom->strictErrorChecking = false;
		libxml_use_internal_errors(true);
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
		$html = $dlService->download($url);

		$images = $this->getImages($html);

		foreach($images as $key => $image) {
			$images[$key] = $urlService->url_to_absolute($url, $image);
			if($images[$key] == false || $images[$key] == '') {
				unset($images[$key]);
			}
		}

		return $images;
	}

	public function getBiggestImg($url) 
	{
		$images = $this->getAbsoluteUrlImages($url);

		usort($images, function ($a, $b) {
			try {
				list($aWidth, $aHeight) = getimagesize($a);
			} catch(\Exception $e) {
				return -1;
			}
			try {
				list($bWidth, $bHeight) = getimagesize($b);
			} catch(\Exception $e) {
				return 1;
			}

			if(($aWidth * $aHeight) >= ($bWidth * $bHeight)) {
				return -1;
			} else {
				return 1;
			}

		});

		return $images;
	}

}