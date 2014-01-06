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
	 * @group price
	 * @group wip1
	 */
	public function priceScrapeTest()
	{
		$scrapeService = new ScrapeService();

		$this->assertEquals('13.64$', 						$scrapeService->getPrice('<html><body><b class="price">13.64$</b></body></html>'));
		$this->assertEquals('13.64EUR', 					$scrapeService->getPrice('<html><body><b class="price">13.64€</b></body></html>'));
		$this->assertEquals('13.64$', 						$scrapeService->getPrice('<html><body><span class="price">13.64$</span></body></html>'));
	 	$this->assertEquals('13.64 Eur', 					$scrapeService->getPrice('<b class="Price">13.64 Eur</b>'));
		$this->assertEquals('13.64 usd', 					$scrapeService->getPrice('<b class="Price">13.64 usd</b>'));
		$this->assertEquals(array('34$', '13.64$'),  		$scrapeService->getPrice('<span class="price">34$</span><b class="price">13.64$</b>'));
		$this->assertEquals('13.64$', 						$scrapeService->getPrice('<p>13.64$</p>'));
		$this->assertEquals('13.64 USD', 					$scrapeService->getPrice('<p>13.64 USD</p>'));
		$this->assertEquals('13.64USD',						$scrapeService->getPrice('<p>13.64USD</p>'));
		$this->assertEquals('13.64EUR',						$scrapeService->getPrice('<p>13.64EUR</p>'));
		$this->assertEquals('13.32 EUR',					$scrapeService->getPrice('<b class="price">13.32 EUR</b>'));
		$this->assertEquals('$8.24', 						$scrapeService->getPrice('<p><b class="priceLarge">$8.24</b></p>'));
		$this->assertEquals('$8.24',						$scrapeService->getPrice('<p><b>$8.24</b></p>'));
		$this->assertEquals('$8.24',						$scrapeService->getPrice('<p><b>$8.24</b><span>bla bla bla</span></p>'));
		$this->assertEquals('$8.24',						$scrapeService->getPrice('<p><span>bla bla bla</span><b>$8.24</b><span>bla bla bla</span></p>'));
		$this->assertEquals('$ 8.24',						$scrapeService->getPrice('<p><span>bla bla bla</span><b>$ 8.24</b><span>bla bla bla</span></p>'));
		$this->assertEquals('$ 8,24',						$scrapeService->getPrice('<p><span>bla bla bla</span><b>$ 8,24</b><span>bla bla bla</span></p>'));
		$this->assertEquals('$ 8,24',						$scrapeService->getPrice('<p><span>13.24</span>bla<b class="price">$ 8,24</b><span>bla bla bla</span></p>'));
		$this->assertEquals('100,00 EUR TTC',				$scrapeService->getPrice('<p class="price"><!-- --><span class="our_price_display"><span id="our_price_display">100,00 €</span> TTC</span></p>'));
		$this->assertEquals('$379.00',						$scrapeService->getPrice('<table class="product"><tbody><tr><td colspan="2" id="buyingPriceContent"><span id="buyingPriceValue"><b class="priceLarge kitsunePrice">$379.00</b></span></td><td id="kindle-price-prime-badge"><div>&nbsp;</div><div>FREE Shipping<a target="AmazonHelp" href="/gp/help/customer/display.html/ref=mk_sss_dp_1?ie=UTF8&amp;nodeId=527692&amp;pop-up=1">Details</a></div></td></tr></tbody></table>'));
		$this->assertEquals(array('$ 8,24', '8.22 EUR'),	$scrapeService->getPrice('<p><span>$ 8,24</span>pl<b>8.22 EUR</b><span>bla bla bla</span></p>'));
		$this->assertEquals('',								$scrapeService->getPrice('<p><span>8,24</span></p>'));
	}
	
	/**
	 * @test
	 * @group price
	 * @group wip2
	 */
	public function realPriceScrape()
	{
		$scrapeService = new ScrapeService();

		$html = file_get_contents('http://shop.swatch.com/FR/FR/Montres/Originals/Lady/LADY_PAPAYA-LJ107.aspx');
//		$this->assertEquals('40,00 EUR', $scrapeService->getPrice($html));

		$html = file_get_contents('http://www.castorama.fr/store/Rangement-modulable-Mixxit-pin-2-cases-prod10450017.html?navCount=2');
		$this->assertEquals(array('24,95 EUR'), $scrapeService->getPrice($html));
/*
		$html = file_get_contents('');
		$this->assertEquals('', $scrapeService->getPrice($html));
*/
	}

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
		$html = file_get_contents('http://www.levi.com/FR/fr_FR/men-jeans/p/191110003');

		$images = $scrapeService->getImages($html);
		//var_dump($images);
		$this->assertContains('/_ui/levis/img/product/hanger.jpg?$75x75$', $images);
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

		$scrapeService = new ScrapeService();
		$images = $scrapeService->getAbsoluteUrlImages('http://www.levi.com/FR/fr_FR/men-jeans/p/191110003');
//		var_dump($images);
		$this->assertContains('http://lsco.scene7.com/is/image/lsco/clothing/191110003-2012-fall-front-pdp.jpg?$1366x768$', $images);

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
		

		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;
		$images = $scrapeService->getBiggestImg('http://www.levi.com/FR/fr_FR/men-jeans/p/191110003');
//		var_dump($images);
		$this->assertEquals('http://lsco.scene7.com/is/image/lsco/clothing/191110003-2012-fall-detail1-pdp.jpg?$1366x768$', $images[0]->getOriginalUrl());

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
