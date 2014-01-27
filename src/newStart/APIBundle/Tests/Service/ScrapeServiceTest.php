<?php

namespace newStart\APIBundle\Tests\Service;

use newStart\APIBundle\Service\ScrapeService;
use newStart\APIBundle\Service\UrlService;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use newStart\CommonBundle\Tests\NewStartWebTestCase;


class scrapeServiceTest extends NewStartWebTestCase
{

	/**
	 * @test
	 * @group scrape
	 */
	public function imgScrapeTest()
	{
		$scrapeService = new ScrapeService();
		$images = $scrapeService->getImages('<html><img src="plop.jpg"></html>');

		$this->assertTrue(in_array('plop.jpg', $images));

	}

	/**
	 * @test
	 * @group scrape
	 */
	public function twoImgScrapeTest()
	{
		$scrapeService = new ScrapeService();
		$images = $scrapeService->getImages('<html><img src="plop.jpg"><img src="klop.jpg"></html>');

		$this->assertTrue(in_array('plop.jpg', $images));
		$this->assertTrue(in_array('klop.jpg', $images));
	}

	/**
	 * @test
	 * @group scrape
	 */
	public function realImgScrapeTest()
	{
		$scrapeService = new ScrapeService();
		$html = file_get_contents('http://www.balibaris.com/chemises/962-tribeca-chambray.html');

		$images = $scrapeService->getImages($html);
		//var_dump($images);
		$this->assertContains('/962-5407-large/tribeca-chambray.jpg', $images);
	}

	/**
	 * @test
	 * @group scrape
	 */
	public function realImgAbsoluteUrlScrapeTest()
	{
		//$scrapeService = new ScrapeService();
		//$images = $scrapeService->getAbsoluteUrlImages('http://www.decathlon.fr/tente-t2-id_2859520.html');
		//$this->assertContains('http://www.decathlon.fr/media/285/2859520/zoom_400PX_asset_70437021.jpg', $images);

		$scrapeService = new ScrapeService();
		$images = $scrapeService->getAbsoluteUrlImages('http://www.wornby.co.uk/mens/sweats/graffiti-alley-sweat-grey-marl.html');
		$this->assertContains('http://www.wornby.co.uk/media/catalog/product/cache/1/image/483x/17f82f742ffe127f42dca9de82fb58b1/W/o/Worn_By_Graffiti_Alley_Sweat_1_2.jpg', $images);

//		$scrapeService = new ScrapeService();
//		$images = $scrapeService->getAbsoluteUrlImages('http://www.levi.com/FR/fr_FR/men-jeans/p/191110003');
//		var_dump($images);
//		$this->assertContains('http://lsco.scene7.com/is/image/lsco/clothing/191110003-2012-fall-front-pdp.jpg?$1366x768$', $images);

//		$this->assertContains('', $images);

//		$scrapeService = new ScrapeService();
//		$images = $scrapeService->getAbsoluteUrlImages('');
//		var_dump($images);
//		$this->assertContains('', $images);

	}

	/**
	 * @test
	 * @group scrapeKO
	 * @group improvedscrape
	 */
	public function sortedImgScrapeTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$images = $scrapeService->getBiggestImg('http://www.wornby.co.uk/mens/sweats/graffiti-alley-sweat-grey-marl.html');
		$this->assertEquals('http://www.wornby.co.uk/media/catalog/product/cache/1/image/483x/17f82f742ffe127f42dca9de82fb58b1/W/o/Worn_By_Graffiti_Alley_Sweat_1_2.jpg', $images[0]->getOriginalUrl());
		$this->assertEquals('http://www.wornby.co.uk/media/catalog/product/cache/1/thumbnail/155x/17f82f742ffe127f42dca9de82fb58b1/w/o/worn_by_graffiti_alley_sweat_2.jpg', $images[1]->getOriginalUrl());
		$this->assertEquals('http://www.wornby.co.uk/media/catalog/product/cache/1/thumbnail/155x/17f82f742ffe127f42dca9de82fb58b1/W/o/Worn_By_Graffiti_Alley_Sweat_1_2.jpg', $images[2]->getOriginalUrl());
		

//		$scrapeService = new ScrapeService();
//		$scrapeService->container = $this->container;
//		$images = $scrapeService->getBiggestImg('http://www.levi.com/FR/fr_FR/men-jeans/p/191110003');
//		var_dump($images);
//		$this->assertEquals('http://lsco.scene7.com/is/image/lsco/clothing/191110003-2012-fall-detail1-pdp.jpg?$1366x768$', $images[0]->getOriginalUrl());

	}

	/**
	 * @test
	 * @group scrape
	 * @group scrapeTitle
	 */
	public function titleScrapeTest()
	{
		$scrapeService = new ScrapeService();
		$title = $scrapeService->getTitle('http://www.wornby.co.uk/mens/sweats/graffiti-alley-sweat-grey-marl.html');
		$this->assertEquals('Graffiti Alley Sweat - Grey Marl   | Worn By', $title);

		$scrapeService = new ScrapeService();
		$title = $scrapeService->getTitle('http://www.apple.com/fr/ipad-mini/?cid=wwa-fr-kwg-ipad-com');
		$this->assertEquals('Apple - iPad mini avec écran Retina', $title);

		$scrapeService = new ScrapeService();
		$title = $scrapeService->getTitle('http://www.boutique-saint-james.fr/pull-raye-homme-rochefort-p654-z6680.html');
		$this->assertEquals('SAINT JAMES Pull rayé homme ROCHEFORT', $title);
	}



}
