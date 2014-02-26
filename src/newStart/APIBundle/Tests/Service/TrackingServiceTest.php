<?php

namespace newStart\APIBundle\Tests\Service;

use newStart\APIBundle\Service\TrackingService;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use newStart\CommonBundle\Tests\NewStartWebTestCase;

class TrackingServiceTest extends NewStartWebTestCase
{


	/**
	 * @test
	 * @group tracking
	 */
	public function returnTrackedUrlReturnNullForNull()
	{
		$trackingService = new TrackingService();
		$trackingService->container = $this->container;
		$trackedUrl = $trackingService->track(null);

		$this->assertNull($trackedUrl);
	}

	/**
	 * @test
	 * @group tracking
	 */
	public function returnTrackedUrlReturnRawURLForUntrackedUrl()
	{
		$trackingService = new TrackingService();
		$trackingService->container = $this->container;
		$trackedUrl = $trackingService->track('http://plop.com/klop.php');

		$this->assertEquals('http://plop.com/klop.php', $trackedUrl);
	}

	/**
	 * @test
	 * @group tracking
	 */
	public function returnTrackedUrlReturnTrackedURLForVigLinkUrl()
	{
		$trackingService = new TrackingService();
		$trackingService->container = $this->container;
		$trackedUrl = $trackingService->track('http://3mdirect.co.uk/klop.php');

		$this->assertEquals('http://redirect.viglink.com?key=0bc53335c15291439be2b9841cb6a076&u=http%3A%2F%2F3mdirect.co.uk%2Fklop.php', $trackedUrl);

	}

	/**
	 * @test
	 * @group tracking
	 */
	public function returnTrackedUrlReturnTrackedURLForSkimLinkUrl()
	{
		$trackingService = new TrackingService();
		$trackingService->container = $this->container;
		$trackedUrl = $trackingService->track('http://0044.co.uk/klop.php');

		$this->assertEquals('http://go.redirectingat.com?id=65175X1478468&xs=1&url=http%3A%2F%2F0044.co.uk%2Fklop.php', $trackedUrl);
	}

	/**
	 * @test
	 * @group tracking
	 */
	public function vgExempleIsOK()
	{
		$trackingService = new TrackingService();
		$trackingService->container = $this->container;
		$trackedUrl = $trackingService->track('http://amazon.com/dp/0316769487');

		$this->assertEquals('http://redirect.viglink.com?key=0bc53335c15291439be2b9841cb6a076&u=http%3A%2F%2Famazon.com%2Fdp%2F0316769487', $trackedUrl);

	}

	/**
	 * @test
	 * @group tracking
	 */
	public function vgExempleWithWwwIsOK()
	{
		$trackingService = new TrackingService();
		$trackingService->container = $this->container;
		$trackedUrl = $trackingService->track('http://www.amazon.com/dp/0316769487');

		$this->assertEquals('http://redirect.viglink.com?key=0bc53335c15291439be2b9841cb6a076&u=http%3A%2F%2Fwww.amazon.com%2Fdp%2F0316769487', $trackedUrl);

	}

	/**
	 * @test
	 * @group tracking
	 * @group wip
	 */
	public function vgExempleWithSubDomainIsOK()
	{
		$trackingService = new TrackingService();
		$trackingService->container = $this->container;
		$trackedUrl = $trackingService->track('http://kindle.amazon.com/dp/0316769487');

		$this->assertEquals('http://redirect.viglink.com?key=0bc53335c15291439be2b9841cb6a076&u=http%3A%2F%2Fkindle.amazon.com%2Fdp%2F0316769487', $trackedUrl);

	}

}