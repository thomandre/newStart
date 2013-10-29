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
		$this->assertEquals(array(0, 6), $result);

		$result = $imageService->getOffset(300, 120, 40, 60);
		$this->assertEquals(array(55, 0), $result);

	}

	/**
	 * @test
	 * @group image
	 */
	public function imageResizeIsOk() 
	{
		
	}

}

