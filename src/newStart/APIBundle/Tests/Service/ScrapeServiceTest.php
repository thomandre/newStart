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
	public function getInfosZalandoTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://www.zalando.fr/khujo-thered-veste-d-hiver-marron-kh122g02a-710.html?size=M');
		$this->assertEquals('khujo THERED - Veste d\'hiver - marron - ZALANDO.FR', $infos->title);
		$this->assertEquals('http://i2.ztat.net/detail/KH/12/2G/02/A7/10/KH122G02A-710@14.jpg', $infos->images[0]->src);
		$this->assertEquals('64,00 EUR', $infos->price);
	}

	/**
	 * @test
	 * @group scrape
	 */
	public function getInfosHarrodsTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://www.harrods.com/product/bottle-and-bib-set/chloe/000000000003633043?cat1=bc-chloe');
		$this->assertEquals('Chloé Bottle and Bib Set | Harrods', $infos->title);
		$this->assertEquals('http://s7v1.scene7.com/is/image/Harrods/3633043?$productMain$', $infos->images[0]->src);
		$this->assertEquals('£89.95', $infos->price);
	}
	 
	/**
	 * @test
	 * @group scrape
	 * @group ralphlauren
	 */
	public function getInfosRalphlaurenTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://www.ralphlauren.fr/product/index.jsp?productId=14996361');
		$this->assertEquals('Caban New Academy - &lt;b&gt;Vestes &amp; Manteaux&lt;/b&gt;  Prêt-à-Porter  - Ralph Lauren France', $infos->title);
		$this->assertEquals('http://s7d2.scene7.com/is/image/PoloGSI/s7-1027913_standard?$flyout_main$&cropN=0.12,0,0.75,1&iv=qG2d30&wid=1080&hei=1440&fit=fit,1', $infos->images[0]->src);
		$this->assertEquals('345,00 EUR', $infos->price);
	}
	 
	/**
	 * @test
	 * @group scrape
	 */
	public function getInfosBalibarisTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://www.balibaris.com/chemises/962-tribeca-chambray.html');
		$this->assertEquals('E-shop -  Chemises casual -  Tribeca // Chambray - Balibaris', $infos->title);
		$this->assertEquals('http://www.balibaris.com/962-5408-large/tribeca-chambray.jpg', $infos->images[0]->src);
		$this->assertEquals('100,00 EUR', $infos->price);
	}
	 
	/**
	 * @test
	 * @group scrape
	 */
	public function getInfosSaintJamesTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://www.boutique-saint-james.fr/pull-raye-homme-rochefort-p654-z6680.html');
		$this->assertEquals('SAINT JAMES Pull rayé homme ROCHEFORT', $infos->title);
		$this->assertEquals('http://www.boutique-saint-james.fr/ICEO_catalogue/pki21100006680.jpg', $infos->images[0]->src);
		$this->assertEquals('167,00 EUR', $infos->price);
	}
	 
	/**
	 * @test
	 * @group scrape
	 */
	public function getInfosLeviTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://www.levi.com/FR/fr_FR/men-jeans/p/191110003');
		$this->assertEquals('511 Slim Fit Commuter | Indigo Rigid | Jeans | Hommes | Levi\'s | France', $infos->title);
		$this->assertEquals('http://lsco.scene7.com/is/image/lsco//clothing/191110003-2012-fall-detail3-pdp.jpg?$1366x768$', $infos->images[0]->src);
		$this->assertEquals('95,00 EUR', $infos->price);
		
	}


	/**
	 * @test
	 * @group scrape
	 */
/*	public function twoImgScrapeTest()
	{
		$scrapeService = new ScrapeService();
		$images = $scrapeService->getImages('<html><img src="plop.jpg"><img src="klop.jpg"></html>');

		$this->assertTrue(in_array('plop.jpg', $images));
		$this->assertTrue(in_array('klop.jpg', $images));
	}
*/
	/**
	 * @test
	 * @group scrape
	 */
/*	public function realImgScrapeTest()
	{
		$scrapeService = new ScrapeService();
		$html = file_get_contents('http://www.balibaris.com/chemises/962-tribeca-chambray.html');

		$images = $scrapeService->getImages($html);
		//var_dump($images);
		$this->assertContains('/962-5407-large/tribeca-chambray.jpg', $images);
	}
*/
	/**
	 * @test
	 * @group scrape
	 */
/*	public function realImgAbsoluteUrlScrapeTest()
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
*/
	/**
	 * @test
	 * @group scrapeKO
	 * @group improvedscrape
	 */
/*	public function sortedImgScrapeTest()
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
*/
	/**
	 * @test
	 * @group scrape
	 * @group scrapeTitle
	 */
/*	public function titleScrapeTest()
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
*/


}
