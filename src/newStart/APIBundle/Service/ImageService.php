<?php

namespace newStart\APIBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\CommonBundle\Entity\Image;

/**
 * @Service("newstart_api_service_image", public=true)
 */
class ImageService
{
	public function dimentionCalculate($w, $h, $nw, $nh)
	{
		if($h == 0) {
			throw new \Exception('do not divide by 0.');			
		}

		$ratio = $w / $h;

		if($nh == null) {
			$nh = $nw / $ratio;
		}
		if($nw == null) {
			$nw = $nh * $ratio;			
		}

		return array(round($nw), round($nh));
	}

	public function getOffset($w, $h, $nw, $nh)
	{

		if(($w / $h) > ($nw / $nh)) {
			$wOffset = (($w / ($h / $nh)) - $nw) / 2;
			$hOffset = 0;
		} elseif(($w / $h) < ($nw / $nh)) {
			$wOffset = 0;
			$hOffset = (($h / ($w / $nw)) - $nh) / 2;			
		} else {
			$wOffset = 0;
			$hOffset = 0;
		}
		//$vOffset = $nh - ($h * $nw) / $w;
		//$hOffset = $nw - ($nh * $w) / $h;

		if($wOffset < 0) $wOffset = 0;
		if($hOffset < 0) $hOffset = 0;


		return array(round($wOffset), round($hOffset));
	}


	public function imageResize($data, $nw, $nh)
	{




	}

}