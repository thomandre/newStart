<?php

namespace newStart\CommonBundle\Features\Context;

use Behat\Behat\Context\ClosuredContextInterface,
    Behat\Behat\Context\TranslatedContextInterface,
    Behat\Symfony2Extension\Context\KernelAwareInterface,
    Behat\Behat\Context\BehatContext,
    Behat\Behat\Exception\PendingException;
use Behat\Gherkin\Node\PyStringNode,
    Behat\Gherkin\Node\TableNode;
use newStart\CommonBundle\Features\Context\FeatureGlobal;

/**
 * Features context
 */
class FeatureContext extends FeatureGlobal
{

    /**
     * @Given /^j\'attend "([^"]*)" secondes$/
     */
    public function jAttendSecondes($arg1)
    {
        usleep($arg1*1000);
    }
    
}
