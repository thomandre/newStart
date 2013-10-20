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

    var $originalWindowName = '';

    /**
     * @Given /^j\'attend "([^"]*)" secondes$/
     */
    public function jAttendSecondes($arg1)
    {
        //usleep($arg1*1000);
        $this->getSession()->wait(1000*$arg1);
        //return true;
    }

    /**
     * @Given /^je clique sur "([^"]*)" dans l\'iFrame$/
     */
    public function jeCliqueSurDansLIframe($arg1)
    {
        $iframes = $this->getSession()->getPage()->findAll('css', 'iframe');

        $name = $iframes[2]->getAttribute('name');
        $this->getSession()->switchToIFrame($name);
        
        //var_dump($this->getSession()->getPage()->getContent());

        $element = $this->getSession()->getPage()->findAll('css', $arg1);
        if($element != false) {
            $element[0]->click();
        } else {
            throw new \Exception('L\'élément "'.$arg1.'" n\'a pas été trouvé dans la page.');
        }
    }

    /**
     * @Given /^je fais mon job$/
     */
    public function jeFaisMonJob()
    {
        try {
            $submit = $this->getSession()->getPage()->findAll('css', '#u_0_1');
            $submit[0]->click();

            $this->getSession()->wait(1000*10);
          
            $this->getSession()->switchToWindow($this->originalWindowName);           
        } catch(\Exception $e) {
//            var_dump('error deal with it.');
        }

        //throw new PendingException();
    }


    /**
     * @Given /^je bascule sur la popup$/
     */
    public function jeBasculeSurLaPopup()
    {
        $originalWindowName = $this->getSession()->getWindowName(); //Get the original name

        if (empty($this->originalWindowName)) {
            $this->originalWindowName = $originalWindowName;
        }

        $popupName = $this->getNewPopup($originalWindowName);

        //Switch to the popup Window
        $this->getSession()->switchToWindow($popupName);
    }

    /**
     * @Given /^je reviens sur la fenêtre principale$/
     */
    public function jeReviensSurLaFenetrePrincipale()
    {
        //Switch to the original window
        $this->getSession()->switchToWindow($this->originalWindowName);
    }
    

    /**
     * This gets the window name of the new popup.
     */
    private function getNewPopup($originalWindowName = NULL) {
        //Get all of the window names first
        $names = $this->getSession()->getWindowNames();

        //Now it should be the last window name
        $last = array_pop($names);

        if (!empty($originalWindowName)) {
            while ($last == $originalWindowName && !empty($names)) {
                $last = array_pop($names);
            }
        }

        return $last;
    }


}
