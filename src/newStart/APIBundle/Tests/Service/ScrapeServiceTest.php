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
	 * @group zalando
	 */
	public function getInfosZalandoTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://havefyve.local:8888/newStart/web/test/khujo%20THERED%20-%20Veste%20d%27hiver%20-%20marron%20-%20ZALANDO.FR.html');
		$this->assertEquals('khujo THERED - Veste d\'hiver - marron - ZALANDO.FR', $infos->title);
		$this->assertEquals('http://havefyve.local:8888/newStart/web/test/khujo%20THERED%20-%20Veste%20d\'hiver%20-%20marron%20-%20ZALANDO.FR_files/KH122G02A-710@14(1).jpg', $infos->images[0]->src);
		$this->assertEquals('80,00 EUR', $infos->price);
	}

	/**
	 * @test
	 * @group scrape
	 * @group harrods
	 */
	public function getInfosHarrodsTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://havefyve.local:8888/newStart/web/test/Chloe%CC%81%20Bottle%20and%20Bib%20Set%20%20%20Harrods.html');
		$this->assertEquals('Chloé Bottle and Bib Set | Harrods', $infos->title);
		$this->assertEquals('http://havefyve.local:8888/newStart/web/test/Chlo%C3%A9%20Bottle%20and%20Bib%20Set%20%20%20Harrods_files/3633043(1)', $infos->images[0]->src);
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

		$infos = $scrapeService->getInfos('http://havefyve.local:8888/newStart/web/test/Doudoune%20Ether%20-%20Doudounes%20&%20Gilets%20Vestes%20&%20Manteaux%20-%20Ralph%20Lauren%20France.html');
		$this->assertEquals('Doudoune Ether - Doudounes &amp; Gilets Vestes &amp; Manteaux - Ralph Lauren France', $infos->title);
		$this->assertEquals('http://s7d2.scene7.com/is/image/PoloGSI/s7-1069246_standard?$flyout_main$&cropN=0.12,0,0.75,1&iv=uzUcV2&wid=1080&hei=1440&fit=fit,1', $infos->images[0]->src);
		$this->assertEquals('245,00 EUR', $infos->price);
	}
	 
	/**
	 * @test
	 * @group scrape
	 * @group balibaris
	 */
	public function getInfosBalibarisTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://havefyve.local:8888/newStart/web/test/E-shop%20-%20Chemises%20casual%20-%20Tribeca%20%20%20%20Chambray%20-%20Balibaris.html');
		$this->assertEquals('E-shop -  Chemises casual -  Tribeca // Chambray - Balibaris', $infos->title);
		$this->assertEquals('http://www.balibaris.com/962-5408-large/tribeca-chambray.jpg', $infos->images[0]->src);
		$this->assertEquals('100,00 EUR', $infos->price);
	}
	 
	/**
	 * @test
	 * @group scrape
	 * @group stjames
	 */
	public function getInfosSaintJamesTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://havefyve.local:8888/newStart/web/test/SAINT%20JAMES%20Pull%20raye%CC%81%20homme%20ROCHEFORT.html');
		$this->assertEquals('SAINT JAMES Pull rayé homme ROCHEFORT', $infos->title);
		$this->assertEquals('http://havefyve.local:8888/newStart/web/test/SAINT%20JAMES%20Pull%20ray%C3%A9%20homme%20ROCHEFORT_files/pki21100006680.jpg', $infos->images[0]->src);
		$this->assertEquals('167,00 EUR', $infos->price);
	}
	 
	/**
	 * @test
	 * @group scrape
	 * @group levis
	 */
	public function getInfosLevisTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://havefyve.local:8888/newStart/web/test/511%20Slim%20Fit%20Commuter%20%20%20Indigo%20Rigid%20%20%20Jeans%20%20%20Hommes%20%20%20Levi%27s%20%20%20France.html');
		$this->assertEquals('511 Slim Fit Commuter | Indigo Rigid | Jeans | Hommes | Levi\'s | France', $infos->title);
		$this->assertEquals('http://havefyve.local:8888/newStart/web/test/511%20Slim%20Fit%20Commuter%20%20%20Indigo%20Rigid%20%20%20Jeans%20%20%20Hommes%20%20%20Levi\'s%20%20%20France_files/191110003-2012-fall-front-pdp.jpg', $infos->images[0]->src);
		$this->assertEquals('95,00 EUR', $infos->price);
		
	}


	/**
	 * @test
	 * @group scrape
	 * @group asos
	 * @group asos1
	 */
	public function getInfosAsosTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://havefyve.local:8888/newStart/web/test/Superdry%20|%20Superdry%20-%20Brad%20-%20Veste%20en%20cuir%20chez%20ASOS.html');
		$this->assertEquals('Superdry | Superdry - Brad - Veste en cuir chez ASOS', $infos->title);
		$this->assertEquals('http://havefyve.local:8888/newStart/web/test/Superdry%20%7C%20Superdry%20-%20Brad%20-%20Veste%20en%20cuir%20chez%20ASOS_fichiers/image1xl.jpg', $infos->images[0]->src);
		$this->assertEquals('223,00 £', $infos->price);
	}
	/**
	 * @test
	 * @group scrape
	 * @group asos
	 * @group asos2
	 */
	public function getInfosAsos2Test()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://havefyve.local:8888/newStart/web/test/ASOS%20|%20ASOS%20-%20Caban%20style%20militaire%20-%20Bleu%20marine%20chez%20ASOS.html');
		$this->assertEquals('ASOS | ASOS - Caban style militaire - Bleu marine chez ASOS', $infos->title);
		$this->assertEquals('http://havefyve.local:8888/newStart/web/test/ASOS%20%7C%20ASOS%20-%20Caban%20style%20militaire%20-%20Bleu%20marine%20chez%20ASOS_fichiers/image1xl.jpg', $infos->images[0]->src);
		$this->assertEquals('59,73  EUR', $infos->price);
	}

	/**
	 * @test
	 * @group scrape
	 * @group monshowroom
	 */
	public function getInfosMonshowroomTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://havefyve.local:8888/newStart/web/test/Robe%20imprime%CC%81e%20Aunil%20Noir%202two%20en%20promotion%20sur%20MonShowroom.com.html');
		$this->assertEquals('Robe imprimée Aunil Noir 2two en promotion sur MonShowroom.com', $infos->title);
		$this->assertEquals('http://havefyve.local:8888/newStart/web/test/Robe%20imprime%CC%81e%20Aunil%20Noir%202two%20en%20promotion%20sur%20MonShowroom.com_fichiers/140932-01-e.jpg', $infos->images[0]->src);
		$this->assertEquals('68.50EUR', $infos->price);
	}
	
	/**
	 * @test
	 * @group scrape
	 * @group mango
	 */
	public function getInfosMangoTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://havefyve.local:8888/newStart/web/test/MANGO%20-%20Accessoires%20-%20Bijoux%20-%20Ras-de-cou%20double%20me%CC%81tallique.html');
		$this->assertEquals('MANGO - Accessoires - Bijoux - Ras-de-cou double métallique', $infos->title);
		$this->assertEquals('http://st.mngbcn.com/rcs/pics/static/T2/fotos/S9/23030141_94.jpg', $infos->images[0]->src);
		$this->assertEquals('24,99EUR', $infos->price);
	}

	/**
	 * @test
	 * @group scrape
	 * @group zara
	 */
	public function getInfosZaraTest()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('http://havefyve.local:8888/newStart/web/test/MANTEAU%20COURT%20LAINE%20CAPUCHE%20-%20Manteaux%20-%20FEMME%20|%20ZARA%20France.html');
		$this->assertEquals('MANTEAU COURT LAINE CAPUCHE - Manteaux - FEMME | ZARA France', $infos->title);
		$this->assertEquals('http://static.zara.net/photos//2014/V/0/1/p/2128/303/620/2/w/1920/2128303620_1_1_1.jpg?timestamp=1390244997469', $infos->images[0]->src);
		$this->assertEquals('79,95  EUR', $infos->price);
	}
	

	/**
	 * @test
	 * @group scrape
	 */
	/*public function getInfosAsos2Test()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('');
		$this->assertEquals('', $infos->title);
		$this->assertEquals('', $infos->images[0]->src);
		$this->assertEquals('', $infos->price);
	}*/

	/**
	 * @test
	 * @group scrape
	 */
	/*public function getInfosAsos2Test()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('');
		$this->assertEquals('', $infos->title);
		$this->assertEquals('', $infos->images[0]->src);
		$this->assertEquals('', $infos->price);
	}*/

	/**
	 * @test
	 * @group scrape
	 */
	/*public function getInfosAsos2Test()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('');
		$this->assertEquals('', $infos->title);
		$this->assertEquals('', $infos->images[0]->src);
		$this->assertEquals('', $infos->price);
	}*/

	/**
	 * @test
	 * @group scrape
	 */
	/*public function getInfosAsos2Test()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('');
		$this->assertEquals('', $infos->title);
		$this->assertEquals('', $infos->images[0]->src);
		$this->assertEquals('', $infos->price);
	}*/

	/**
	 * @test
	 * @group scrape
	 */
	/*public function getInfosAsos2Test()
	{
		$scrapeService = new ScrapeService();
		$scrapeService->container = $this->container;

		$infos = $scrapeService->getInfos('');
		$this->assertEquals('', $infos->title);
		$this->assertEquals('', $infos->images[0]->src);
		$this->assertEquals('', $infos->price);
	}*/

	

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
