<?php

namespace newStart\APIBundle\Tests\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use newStart\APIBundle\Service\ScrapeService;
use newStart\APIBundle\Service\UrlService;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;


class scrapeServiceTest extends WebTestCase
{

	/**
	 * @test
	 * @group price
	 */
	public function priceScrapeTest()
	{
		$scrapeService = new ScrapeService();

		$this->assertEquals('13.64$', $scrapeService->getPrice('<html><b class="price">13.64$</b></html>'));
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
	

	/**
	 * @test
	 * @group wip
	 */
	public function imgScrapeTest() {
		$scrapeService = new ScrapeService();
		$images = $scrapeService->getImages('<html><img src="plop.jpg"></html>');

		$this->assertTrue(in_array('plop.jpg', $images));

	}

	/**
	 * @test
	 * @group wip
	 */
	public function twoImgScrapeTest() {
		$scrapeService = new ScrapeService();
		$images = $scrapeService->getImages('<html><img src="plop.jpg"><img src="klop.jpg"></html>');

		$this->assertTrue(in_array('plop.jpg', $images));
		$this->assertTrue(in_array('klop.jpg', $images));
	}

	/**
	 * @test
	 * @group wip
	 */
	public function realImgScrapeTest() {
		$scrapeService = new ScrapeService();
		$html = file_get_contents('http://fr.selfhtml.org/');

		//var_dump($html);
		$images = $scrapeService->getImages($html, $url);
		$this->assertTrue(in_array('//src.selfhtml.org/logo.gif', $images));
	}

	/**
	 * @test
	 * @group wip
	 */
	public function realImgAbsoluteUrlScrapeTest() {
		$scrapeService = new ScrapeService();

		$images = $scrapeService->getAbsoluteUrlImages('http://fr.selfhtml.org/');
		$this->assertTrue(in_array('http://src.selfhtml.org/logo.gif', $images));

		$images = $scrapeService->getAbsoluteUrlImages('http://www.wornby.co.uk/mens/sweats/graffiti-alley-sweat-grey-marl.html');
		$this->assertTrue(in_array('http://www.wornby.co.uk/media/catalog/product/cache/1/image/483x/17f82f742ffe127f42dca9de82fb58b1/W/o/Worn_By_Graffiti_Alley_Sweat_1_2.jpg', $images));
	}

	/**
	 * @test
	 * @group wip
	 */
	public function BigestImgScrapeTest() {
		$scrapeService = new ScrapeService();

		$image = $scrapeService->getBiggestImg('http://www.wornby.co.uk/mens/sweats/graffiti-alley-sweat-grey-marl.html');
		$this->assertEquals('http://www.wornby.co.uk/media/catalog/product/cache/1/image/483x/17f82f742ffe127f42dca9de82fb58b1/W/o/Worn_By_Graffiti_Alley_Sweat_1_2.jpg', $image);
		
	}

	// Step 2 : acceder aux images (quel que soit le format de l'url)
	// Step 3 : detecter les dimensions
	// Step 4 : DL les images
	// 


}
