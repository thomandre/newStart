<?php

namespace newStart\APIBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;

/**
 * @Service("newstart_api_service_download", public=true)
 */
class DownloadService
{

    /** @DI\Inject("service_container") */
    public $container;


	public function download($url)
	{
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 6.1; fr; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13'); 
		$content = curl_exec($ch);
		curl_close($ch);

		return $content;
	}

	public function save($content, $name)
	{
		$rootDir = $this->container->getParameter('kernel.root_dir');
		$filePath = $rootDir.'/../web/images/'.$name;

		return file_put_contents($filePath, $content);
	}

}
