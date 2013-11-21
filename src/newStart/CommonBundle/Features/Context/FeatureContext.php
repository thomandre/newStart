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
use Behat\Behat\Context\Step;
/**
 * Features context
 */
class FeatureContext extends FeatureGlobal
{

    public $originalWindowName = '';

    /**
     * @Given /^je me delogue$/
     */
    public function jeMeDelogue()
    {
        return array(
            new Step\When('je vais sur "/"'),
            new Step\When('je recharge la page'),
            new Step\When('j\'attend que "#u_0_1" soit sur l\'iFrame "2"'),
            new Step\When('je clique sur "#u_0_1" dans l\'iFrame "2"'),
        );
    }


    /**
     * @Given /^je ne devrais plus voir l\'element "([^"]*)"$/
     */
    public function jeNeDevraisPlusVoirLElement($arg1)
    {
        $div = $this->getSession()->getPage()->findAll('css', $arg1);
        $style = $div[0]->getAttribute('style');
        if(strpos(str_replace(' ', '', $style), 'display:none') === false) {
            throw new \Exception('L\'élément "'.$arg1.'" est visible.');
        }
    }
    
    /**
     * @Given /^j\'attend que "([^"]*)" soit visible$/
     */
    public function jAttendQueSoitVisible($arg1)
    {
        $this->getSession()->wait(30000,
            "$('".$arg1."').css('display') != 'none';"
        );
        
    }


    /**
     * @Given /^j\'attend que "([^"]*)" soit sur l\'iFrame "([^"]*)"$/
     */
    public function jAttendQueSoitSurLIFrame($arg1, $arg2)
    {
        $this->getSession()->wait(30000,
            "function () {var iframe = $('iframe'); return (iframe[".$arg2."].contents().find('".$arg1."').length > 0);}"
        );
    }

    /**
     * @Given /^j\'attend que "([^"]*)" soit sur la page$/
     */
    public function jAttendQueSoitSurLaPage($arg1)
    {
        $this->getSession()->wait(30000,
            "$('".$arg1."').length > 0;"
        );
    }

    /**
     * @Given /^je me logue en tant que "([^"]*)" \/ "([^"]*)"$/
     */
    public function jeMeLogueEnTantQue($arg1, $arg2)
    {
        return array(
            new Step\When('je clique sur le bouton Facebook Connect'),
            new Step\When('je remplis "email" avec "'.$arg1.'"'),
            new Step\When('je remplis "pass" avec "'.$arg2.'"'),
            new Step\When('je valide le formulaire'),
            new Step\Then('je reviens sur la fenêtre principale'),
            new Step\When('j\'attend que ".products h2" soit sur la page'),
            new Step\Then('je devrais voir "Ma liste de cadeaux"'),
        );
    }



    /**
     * @Given /^je remplis mon login avec "([^"]*)"$/
     */
    public function jeRemplisMonLoginAvec($arg1)
    {
        return array(
            new Step\When('je remplis "email" avec "'.$arg1.'"'),
            new Step\When('je remplis "pass" avec "projetreecomate"'),
        );
    }


    /**
     * @Given /^je clique sur le bouton Facebook Connect$/
     */
    public function jeCliqueSurLeBoutonFacebookConnect()
    {
        return array(
            new Step\When('j\'attend que "#u_0_0" soit sur l\'iFrame "2"'),
            new Step\When('je clique sur "#u_0_0" dans l\'iFrame "2"'),
            new Step\When('j\'attend "1" secondes'),
            new Step\When('je bascule sur la popup'),
            new Step\When('j\'attend "1" secondes'),
            new Step\Then('je devrais voir "Facebook"'),
            new Step\Then('je devrais voir "HaveFyve"')
        );
    }

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
     * @Given /^je clique sur "([^"]*)" dans l\'iFrame "([^"]*)"$/
     */
    public function jeCliqueSurDansLIframe($arg1, $arg2)
    {
        $iframes = $this->getSession()->getPage()->findAll('css', 'iframe');
        $name = $iframes[$arg2]->getAttribute('name');
        
        $this->getSession()->switchToIFrame($name);
        
        $element = $this->getSession()->getPage()->findAll('css', $arg1);
        if($element != false) {
            $element[0]->click();
        } else {
            throw new \Exception('L\'élément "'.$arg1.'" n\'a pas été trouvé dans la page.');
        }
    }

    /**
     * @Given /^je valide le formulaire$/
     */
    public function jeValideLeFormulaire()
    {
        $submit = $this->getSession()->getPage()->findAll('css', '#u_0_1');
        $submit[0]->click();

        try {
            $this->getSession()->wait(1000*10);
          
            $this->getSession()->switchToWindow($this->originalWindowName);           
        } catch(\Exception $e) {}
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


    /**
     * @Given /^je valide la fenetre de confirmation$/
     */
    public function jeValideLaFenetreDeConfirmation()
    {
        $this->getSession()->getDriver()->getWebDriverSession()->accept_alert();    
    }


}
