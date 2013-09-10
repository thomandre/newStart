<?php

namespace newStart\APIBundle\Tests\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\APIBundle\Service\DownloadService;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;


class downloadServiceTest extends WebTestCase
{

	/**
	 * @test
	 * @group download
	 */
	public function returnContentforExistantUrlTest()
	{
		$downloadService = new DownloadService();
		$content = $downloadService->download('http://www.nomorerack.com/daily_deals/view/261387-new_ipad_1ghz_64gb_9_7__with_wifi_and_bonus_premium_package');

		$this->assertRegExp('/Apple iPad 3 1GHz 64GB 9.7" Tablet & Accessories Package/', $content);


	}
	

}
