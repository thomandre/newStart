<?php

namespace newStart\CommonBundle\Tests\Entity;

use newStart\CommonBundle\Tests\NewStartWebTestCase;
use newStart\CommonBundle\Entity\Product;

class ProductTest extends NewStartWebTestCase
{

    /**
     * @test
     * @group product
     */
    public function setNameIsOk()
    {
    	$product = new Product();

    	$product->setName('Apple - iPad&nbsp;mini avec écran Retina');
    	$this->assertEquals('Apple - iPad mini avec écran Retina', $product->getName());

    	$product->setName('Apple - <b>iPad&nbsp;mini avec écran Retina</b>');
    	$this->assertEquals('Apple - iPad mini avec écran Retina', $product->getName());

    	$product->setName('Apple - <script>alert("plop");</script>iPad&nbsp;mini avec écran Retina');
    	$this->assertEquals('Apple - alert("plop");iPad mini avec écran Retina', $product->getName());

    	$product->setName('Levi\'s Levis® Commuter™ 511™ Slim Fit Pants - Performance Hunter - Jeans');
    	$this->assertEquals('Levi\'s Levis® Commuter™ 511™ Slim Fit Pants - Performance Hunter - Jeans', $product->getName());

  }

}




