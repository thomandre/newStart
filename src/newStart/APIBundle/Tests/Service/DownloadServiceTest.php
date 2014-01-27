<?php

namespace newStart\APIBundle\Tests\Service;

use newStart\APIBundle\Service\DownloadService;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use newStart\CommonBundle\Tests\NewStartWebTestCase;

class downloadServiceTest extends NewStartWebTestCase
{

	/**
	 * @test
	 * @group download
	 */
	public function returnContentforExistantUrlTest()
	{
		$downloadService = new DownloadService();
		$downloadService->container = $this->container;
		$content = $downloadService->download('http://www.nomorerack.com/daily_deals/view/261387-new_ipad_1ghz_64gb_9_7__with_wifi_and_bonus_premium_package');

		$this->assertRegExp('/Apple iPad 3 1GHz 64GB 9.7" Tablet & Accessories Package/', $content);

		//$content = $downloadService->download("http://www.levi.com/FR/fr_FR/men-jeans/p/191110003");
		//$this->assertRegExp('/511 Slim Fit Commuter/', $content);
	}
	
	/**
	 * @test
	 * @group download
	 */
	public function saveImgTest()
	{
		$downloadService = new DownloadService();
		$downloadService->container = $this->container;
		$content = $downloadService->download('http://www.wornby.co.uk/media/catalog/product/cache/1/image/483x/17f82f742ffe127f42dca9de82fb58b1/W/o/Worn_By_Graffiti_Alley_Sweat_1_2.jpg');
		$result = $downloadService->saveImage($content, 'Worn_By_Graffiti_Alley_Sweat_1_2.jpg');

		$this->assertNotEquals(false, strpos($result, 'web/images/Worn_By_Graffiti_Alley_Sweat_1_2.jpg'));

	}

	/**
	 * @test
	 * @group download
	 */
	public function getImageViaCacheTest()
	{	
		$downloadService = new DownloadService();
		$downloadService->container = $this->container;
		$url ='http://www.wornby.co.uk/media/catalog/product/cache/1/image/483x/17f82f742ffe127f42dca9de82fb58b1/W/o/Worn_By_Graffiti_Alley_Sweat_1_2.jpg';
		$image = $downloadService->getImageViaCache($url);
		$this->assertNotNull($image);
		$this->assertNotEquals(false, strpos($image->getPath(), 'web/images/'));
		$this->assertEquals($url, $image->getOriginalUrl());
		$this->assertEquals(656, $image->getHeight());
		$this->assertEquals(483, $image->getWidth());


	}

	/**
	 * @test
	 * @group download
	 */
	public function getExtensionTest()
	{	
		$downloadService = new DownloadService();
		$downloadService->container = $this->container;
		
		$ext = $downloadService->getExtension('http://www.wornby.co.uk/media/catalog/product/cache/1/image/483x/17f82f742ffe127f42dca9de82fb58b1/W/o/Worn_By_Graffiti_Alley_Sweat_1_2.jpg');		
		$this->assertEquals('jpg', $ext);

		$ext = $downloadService->getExtension('http://www.wornby.co.uk/media/catalog/product/cache/1/image/483x/17f82f742ffe127f42dca9de82fb58b1/W/o/Worn_By_Graffiti_Alley_Sweat_1_2.pdf');		
		$this->assertEquals('pdf', $ext);

		$ext = $downloadService->getExtension('http://www.wornby.co.uk/media/catalog/product/cache/1/image/483x/17f82f742ffe127f42dca9de82fb58b1/W/o/Worn_By_Graffiti_Alley_Sweat_1_2.TXT');		
		$this->assertEquals('txt', $ext);
	}
}
