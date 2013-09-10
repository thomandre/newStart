<?php

namespace newStart\APIBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;

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
		var_dump($results->hasChildNodes());
		return $results->item(0)->firstChild->nodeValue;
	}	
}