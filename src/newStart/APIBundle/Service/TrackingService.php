<?php

namespace newStart\APIBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\CommonBundle\Entity\Image;

/**
 * @Service("newstart_api_service_tracking", public=true)
 */
class TrackingService
{

	
	const VIGKEY  = '0bc53335c15291439be2b9841cb6a076';
	const SKIMKEY = '65175X1478468';
    /** @DI\Inject("service_container") */
    public $container;

    public function track($url)
    {
		if($url == null) {
			return null;
		} else {
			$urlService = new UrlService();
			$splittedUrl = $urlService->split_url($url);

			$host = str_replace('www.', '', $splittedUrl['host']);
			$em = $this->container->get('doctrine.orm.entity_manager');
			$domains = $em->getRepository('newStartCommonBundle:MerchantDomain')
						  ->findBy(array('domain' => $host), array('priority' => 'ASC'));

			if(isset($domains[0]) && is_object($domains[0])) {
				return $this->transform($domains[0], $url);
			} else {
				$hostNames = explode(".", $host);
				$host = $hostNames[count($hostNames)-2] . "." . $hostNames[count($hostNames)-1];

				$domains = $em->getRepository('newStartCommonBundle:MerchantDomain')
						  ->findBy(array('domain' => $host), array('priority' => 'ASC'));
			  	if(isset($domains[0]) && is_object($domains[0])) {
					return $this->transform($domains[0], $url);
				} else {
					return $url;
				}
			}
		}
	}

	private function transform($domain, $url)
	{
		switch ($domain->gettracker()) {
			case 'viglink': 
				$url = 'http://redirect.viglink.com?key='.self::VIGKEY.'&u='.urlencode($url);
				return $url;
				break;
			case 'skimlink': 
				$url = 'http://go.redirectingat.com?id='.self::SKIMKEY.'&xs=1&url='.urlencode($url);
				return $url;
				break;
		}
	}

}	