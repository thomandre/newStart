<?php

namespace newStart\CommonBundle\Tests\Entity;

use newStart\CommonBundle\Tests\NewStartWebTestCase;
use newStart\UserBundle\Entity\User;

class UserTest extends NewStartWebTestCase
{

    /**
     * @test
     * @group user
     * @group wip
     */
    public function getDaysToBirtdayIsOk()
    {
    	$user = new User();
    	$user->setBirthday(new \Datetime('1983-01-27'));

    	$this->assertEquals(266, $user->getDaysToBirtday(2014, new \Datetime('2014-05-06')));
    }

}