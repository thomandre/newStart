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

		$content = $downloadService->download("http://us.levi.com/product/index.jsp?productId=21467686&");
		$this->assertRegExp('/Slim Fit Pants/', $content);
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
		$result = $downloadService->save($content, 'Worn_By_Graffiti_Alley_Sweat_1_2.jpg');

		$this->assertNotEquals(false, $result);

	}



}
