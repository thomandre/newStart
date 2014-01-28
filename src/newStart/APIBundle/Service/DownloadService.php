<?php

namespace newStart\APIBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\CommonBundle\Entity\Image;

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
		curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
		curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
		$content = curl_exec($ch);
		$infos = curl_getinfo($ch);

		curl_close($ch);
		if($infos['http_code'] == '404') {
			throw new \Exception('404');
		}
		return $content;
	}

	public function saveImage($content, $name)
	{
		$rootDir = $this->container->getParameter('kernel.root_dir');
		$filePath = $rootDir.'/../web/images/'.$name;

		if(file_put_contents($filePath, $content) === false) {
			throw new \Exception('Erreur lors de la savegarde de '.$filePath);
		}
		
		return $filePath;
	}


	public function getImagesNotInCache($images) 
	{
		$mh = curl_multi_init();
		$curly = array();
		$result = array();

		foreach($images as $key => $image) {
	  		//var_dump($image);
			$curly[$key] = curl_init();
			curl_setopt($curly[$key], CURLOPT_URL, $image); 
			curl_setopt($curly[$key], CURLOPT_RETURNTRANSFER, 1); 
			curl_setopt($curly[$key], CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 6.1; fr; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13'); 
			curl_setopt($curly[$key], CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );

    		curl_multi_add_handle($mh, $curly[$key]);
		}

		$running = null;
		do {
			curl_multi_exec($mh, $running);
		} while($running > 0);

	    foreach($curly as $key => $c) {
		    $result[$key] = curl_multi_getcontent($c);
		    curl_multi_remove_handle($mh, $c);
		}

		curl_multi_close($mh);

		$arrayResult = array();
		$em = $this->container->get('doctrine.orm.entity_manager');

	  	foreach($result as $key => $r) {
	  		if($this->getImageIfInCache($images[$key]) == null) {
		  		$image = new Image();
				$image->setOriginalUrl($images[$key]);

				// on detecte l'extention
	 			$ext = $this->getExtension($images[$key]);

				// on génère un nom
				$name = $this->generateRandomString(15).'.'.$ext;

				$path = $this->saveImage($r, $name);
				try {
					list($width, $height) = getimagesize($path);
				} catch(\Exception $e) {
					$width = 0;
					$height = 0;
				}

				$image->setHeight($height);
				$image->setWidth($width);

				$image->setPath($path);
				
				// on sauve l'image dans la base
				try {
			        $em->persist($image);
			        $em->flush();
				} catch(\exception $e) {
					echo 'erreur 334455 : '.$e->getMessage();
				}
			}

			$arrayResult[] = $image;
		}

		return $arrayResult;
	}

	public function getImageIfInCache($url) 
	{
		$em = $this->container->get('doctrine.orm.entity_manager');
        $image = $em->getRepository('newStartCommonBundle:Image')->findOneByOriginalUrl(substr($url, 0, 255));

		return $image;
	}

	public function getImageViaCache($url) 
	{
		$em = $this->container->get('doctrine.orm.entity_manager');
        $image = $em->getRepository('newStartCommonBundle:Image')->findOneByOriginalUrl(substr($url, 0, 255));

		if($image == null) {
			$image = new Image();
			$image->setOriginalUrl($url);

			// on detecte l'extention
 			$ext = $this->getExtension($url);

			// on génère un nom
			$name = $this->generateRandomString(15).'.'.$ext;

			// @TODO : on vérifie que le nom n'est pas déjà pris

			// on dl l'image
			$content = $this->download($url);

			// on la sauve sur le disque
			$path = $this->saveImage($content, $name);
			list($width, $height) = getimagesize($path);

			$image->setHeight($height);
			$image->setWidth($width);

			$image->setPath($path);
			
			// on sauve l'image dans la base
			try {
		        $em->persist($image);
		        $em->flush();
			} catch(\exception $e) {
				echo 'erreur 334455 : '.$e->getMessage();
			}

			return $image;
		} else {
			return $image;
		}
	}

	public function getExtension($url) {
		$filename_from_url = parse_url($url);
		$ext = pathinfo($filename_from_url['path'], PATHINFO_EXTENSION);

		return strtolower($ext);
	}

	protected function generateRandomString($length = 10) {
	    return substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $length);
	}


}
