<?php

namespace newStart\APIBundle\Tests\Service;

use newStart\APIBundle\Service\DownloadService;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use newStart\CommonBundle\Tests\NewStartWebTestCase;

class DownloadServiceTest extends NewStartWebTestCase
{

	/**
	 * @test
	 * @group download
	 */
	public function returnContentforExistantUrlTest()
	{
		$downloadService = new DownloadService();
		$downloadService->container = $this->container;
		$content = $downloadService->download('http://www.nomorerack.com/daily_deals/view/936751-armor_hybrid_shockproof_case_for_iphone__174___4___5___assorted_colors');

		$this->assertRegExp('/Armor Hybrid Shockproof Case/', $content);

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
	public function getImageBase64ViaCacheTest()
	{
		$downloadService = new DownloadService();
		$downloadService->container = $this->container;
		$url ='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCAEsASwDASIAAhEB';
		$image = $downloadService->getImageViaCache($url);
		$this->assertNotNull($image);
		$this->assertNotEquals(false, strpos($image->getPath(), 'web/images/'));
		$this->assertEquals($url, $image->getOriginalUrl());
		$this->assertEquals(300, $image->getHeight());
		$this->assertEquals(300, $image->getWidth());
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
