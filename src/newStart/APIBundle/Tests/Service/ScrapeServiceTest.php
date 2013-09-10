<?php

namespace newStart\APIBundle\Tests\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\APIBundle\Service\ScrapeService;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;


class scrapeServiceTest extends WebTestCase
{

	/**
	 * @test
	 * @group wip
	 */
	public function priceScrapeTest()
	{
		$scrapeService = new ScrapeService();

		$this->assertEquals('13.64$', $scrapeService->getPrice('<html><b class="pricep">13.64$</b></html>'));
		// $this->assertEquals($scrapeService->getPrice('<b class="Price">13.64 Eur</b>'), '13.64 Eur');
		// $this->assertEquals($scrapeService->getPrice('<b class="Price">13.64 usd</b>'), '13.64 usd');
		// $this->assertEquals($scrapeService->getPrice('<span>34$</span><b class="MMpriCeKK">13.64$</b>'), '13.64$');
		// $this->assertEquals($scrapeService->getPrice('<p>13.64$</p>'), '13.64$');
		// $this->assertEquals($scrapeService->getPrice('<p>13.64 USD</p>'), '13.64 USD');
		// $this->assertEquals($scrapeService->getPrice('<p>13.64USD</p>'), '13.64USD');
		// $this->assertEquals($scrapeService->getPrice('<p>13.64EUR</p>'), '13.64EUR');
		// $this->assertEquals($scrapeService->getPrice('<b class="price">13.32 EUR</b>'), '13.32 EUR');
		// $this->assertEquals($scrapeService->getPrice('<p><b class="priceLarge">$8.24</b></p>'), '$8.24');
		// $this->assertEquals($scrapeService->getPrice('<p><b>$8.24</b></p>'), '$8.24');

	}
	

}
