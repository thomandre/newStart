<?php

namespace newStart\APIBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\APIBundle\Service\UrlService;
use JMS\DiExtraBundle\Annotation\Inject;
use JMS\DiExtraBundle\Annotation\InjectParams;
use Symfony\Component\Process\Process;

/** @DI\Service("newstart_api_service_scrape") */
class ScrapeService
{

	protected $html;

    /** @DI\Inject("service_container") */
    public $container;

	public function getInfos($url) 
	{
		$path = $this->container->getParameter('kernel.root_dir').'/../getComputedStyle.js';

        $command = 'unset DYLD_LIBRARY_PATH; phantomjs --disk-cache=yes '.$path.' '.$url.' 1024 768 ';
        //var_dump($command);
        $process = new Process($command);
        $process->run();

        $buffer = $process->getOutput();

        $match = array();
        $res = preg_match('/@@@(.*)@@@/', $buffer, $match);

        if($res) {
        	$phantomResponse = json_decode($match[1]);
        	if($phantomResponse != null) {
	        	return $phantomResponse;
        	}
    		throw new \Exception('JSON decode failed : command: '.$command.' Returned: '.$buffer);
        }
    	throw new \Exception('Preg Match Failed : command: '.$command.' Returned: '.$buffer);


	}

}