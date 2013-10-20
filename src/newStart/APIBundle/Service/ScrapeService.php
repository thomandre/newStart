<?php

namespace newStart\APIBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\APIBundle\Service\UrlService;

/**
 * @Service("newstart.api.service.scrape", public=true)
 */
class scrapeService
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
		$html = file_get_contents($url);

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
		$biggestImages = "";
		$biggestSurface = 0;

		foreach($images as $img) {
			try {
				list($width, $height) = getimagesize($img);

				$imgSurface = $width * $height;
				if($imgSurface > $biggestSurface) {
					$biggestSurface = $imgSurface;
					$biggestImage = $img;
				}
			} catch(\Exception $e) {
				// add some log here
			}
		}

		return $biggestImage;
	}

}