<?php

namespace newStart\APIBundle\Tests\Service;

use newStart\APIBundle\Service\ImageService;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use newStart\CommonBundle\Tests\NewStartWebTestCase;

class ImageServiceTest extends NewStartWebTestCase
{

	/**
	 * @test
	 * @group image
	 */
	public function newDimentionsAreOkWithAutoHeight()
	{
		$imageService = new ImageService();

		$result = $imageService->dimentionCalculate(300, 120, 30, null);
		$this->assertEquals(array(30, 12), $result);
		$result = $imageService->dimentionCalculate(250, 150, 25, null);
		$this->assertEquals(array(25, 15), $result);
	}

	/**
	 * @test
	 * @group image
	 */
	public function newDimentionsAreOkWithAutoWidth()
	{
		$imageService = new ImageService();

		$result = $imageService->dimentionCalculate(300, 120, null, 12);
		$this->assertEquals(array(30, 12), $result);
		$result = $imageService->dimentionCalculate(250, 150, null, 15);
		$this->assertEquals(array(25, 15), $result);
	}

	/**
	 * @test
	 * @group image
	 */
	public function offsetIsOK()
	{
		$imageService = new ImageService();

		$result = $imageService->getOffset(300, 120, 60, 12);
		$this->assertEquals(array(0, 12), $result);

		$result = $imageService->getOffset(300, 120, 40, 60);
		$this->assertEquals(array(110, 0), $result);

	}

	/**
	 * @test
	 * @group image
	 */
	public function dimentionBeforeResizeIsOK()
	{
		$imageService = new ImageService();

		$result = $imageService->getDimentionBeforeResize(300, 120, 60, 12);
		$this->assertEquals(array(300, 60), $result);

		$result = $imageService->getDimentionBeforeResize(300, 120, 40, 60);
		$this->assertEquals(array(80, 120), $result);

	}

	/**
	 * @test
	 * @group image
	 */
	public function imageResizeIsOk() 
	{
		$imageService = new ImageService();

		$name = 'levis';
		$nw = 330;
		$nh = 400;
 	    $imageService->imageResize('web/test/'.$name.'.jpg', 'web/test/'.$name.'-test.jpg', $nw, $nh);
 	    list($w, $h) = getimagesize('web/test/'.$name.'-test.jpg');
 	    $this->assertEquals(array($nw, $nh), array($w, $h));

	}

}

