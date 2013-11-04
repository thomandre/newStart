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

	public function getDimentionBeforeResize($w, $h, $nw, $nh)
	{
		if(($w / $h) < ($nw / $nh)) {
			$iw = $w;
			$ih = $w / ($nw / $nh);			
		} elseif(($w / $h) > ($nw / $nh)) {
			//$iw = $h / ($nh / $nw);
			$iw = $h * ($nw / $nh);
			$ih = $h;
		} else {
			$iw = $w;
			$ih = $w;
		}
		return array(round($iw), round($ih));
	}

	public function getOffset($w, $h, $nw, $nh)
	{
		if(($w / $h) < ($nw / $nh)) {
			$wOffset = 0;
			$hOffset = (($h / ($w / $nw)) - $nh) / 2;			
		} elseif(($w / $h) > ($nw / $nh)) {
			$wOffset = (($w / ($h / $nh)) - $nw) / 2;
			$hOffset = 0;
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


	public function imageResize($fileSrc, $fileDest, $nw, $nh)
	{
		if(file_exists($fileDest)) {
			return true;
		}
 	    $imgData = file_get_contents($fileSrc);
 	    list($w, $h) = getimagesize($fileSrc);

		$image = imagecreatefromstring($imgData);
		$nimage = imagecreatetruecolor($nw, $nh);

		if($nw == null || $nh == null) {
			list($nw, $nh) = $this->dimentionCalculate($w, $h, $nw, $nh);
		}

		list($wOffset, $hOffset) = $this->getOffset($w, $h, $nw, $nh);
		list($iw, $ih) = $this->getDimentionBeforeResize($w, $h, $nw, $nh);

		$result = imagecopyresampled($nimage, $image, 0, 0, $wOffset, $hOffset, $nw, $nh, $iw, $ih);

		if($result == false) {
			throw new \Exception();
		}

 	    $result = imagejpeg($nimage, $fileDest);

		if($result == false) {
			throw new \Exception();
		}
	}

}