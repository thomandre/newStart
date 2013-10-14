<?php

namespace newStart\CommonBundle\Features\Context;

use Behat\Behat\Context\ClosuredContextInterface,
    Behat\Behat\Context\TranslatedContextInterface,
    Behat\Symfony2Extension\Context\KernelAwareInterface,
    Behat\Behat\Context\BehatContext,
    Behat\Behat\Exception\PendingException;
use Behat\Gherkin\Node\PyStringNode,
    Behat\Gherkin\Node\TableNode;
use Symfony\Component\HttpKernel\KernelInterface;
use Behat\MinkExtension\Context\MinkContext;
use Behat\Mink\Exception\ExpectationException;

//
// Require 3rd-party libraries here:
//
require_once 'PHPUnit/Autoload.php';
require_once 'PHPUnit/Framework/Assert/Functions.php';
//

/**
 * Features context.
 */
class FeatureGlobal extends MinkContext
{

    /**
     * Initializes context.
     * Every scenario gets it's own context object.
     *
     * @param array $parameters context parameters (set them up through behat.yml)
     */
    public function __construct(array $parameters)
    {
        
    }

    /**
     * @Given /^je décoche la checkbox "([^"]*)"$/
     */
    public function jeDecocheLaCheckbox($arg1)
    {
        $checkboxes = $this->getSession()->getPage()->findAll('css', $arg1);

        foreach ($checkboxes as $checkbox) {
            if (is_object($checkbox)) {
                $checkbox->uncheck();
            } else {
                $message = 'The checkbox was not found or was not checked.';
                throw new ExpectationException($message, $this->getSession());
            }
        }
    }

    /**
     * Test le contenu des reponses des exports CSV
     * 
     * @Then /^la réponse devrait contenir un CSV :$/
     */
    public function laReponseDevraitContenirUnCSV(PyStringNode $text)
    {
        $actual = utf8_encode($this->getSession()->getPage()->getContent());
        $regex = '/' . preg_quote($text, '/') . '/ui';

        if (!preg_match($regex, $actual)) {
            $message = sprintf('The string "%s" was not found anywhere in the HTML response of the current page.', $text);
            throw new ExpectationException($message, $this->getSession());
        }
    }

    /**
     * @Given /^je trouve le lien "([^"]*)"$/
     */
    public function jeTrouveLeLien($title)
    {
        $this->assertPageContainsText($title);
    }

    /**
     * @Given /^je ne trouve pas le lien "([^"]*)"$/
     */
    public function jeNeTrouvePasLeLien($title)
    {
        $this->assertPageNotContainsText($title);
    }

    /**
     * @Given /^je ne devrais pas voir les lignes suivantes dans le tableau "([^"]*)" :$/
     */
    public function jeNeDevraisPasVoirLesLignesSuivantesDansLeTableau($tableClass, TableNode $table)
    {
        $result = $this->isLineInFile($tableClass, $table);

        if ($result == true) {
            throw new ExpectationException('The line was found in the HTML response of the current page (and it should not !)', $this->getSession());
        }
    }

    /**
     * @Given /^je devrais voir les lignes suivantes dans le tableau "([^"]*)" :$/
     */
    public function jeDevraisVoirLesLignesSuivantesDansLeTableau($tableClass, TableNode $table)
    {
        $result = $this->isLineInFile($tableClass, $table);

        if ($result == false) {
            throw new ExpectationException('The line was not found anywhere in the HTML response of the current page.', $this->getSession());
        }
    }

    protected function isLineInFile($tableClass, TableNode $table)
    {
        $rows = $table->getRows();
        $line = $rows[0];

        $trTableau = $this->getSession()->getPage()->findAll('css', 'table.' . $tableClass . ' tr');

        $htmlTableContent = array();
        foreach ($trTableau as $trElement) {
            $htmlLineContent = array();
            $tdTableau = $trElement->findAll('css', 'td');
            foreach ($tdTableau as $tdElement) {
                $htmlLineContent[] = trim($tdElement->getHtml());
            }
            $htmlTableContent[] = $htmlLineContent;
        }

        //var_dump($htmlTableContent);
        $lineFound = false;

        foreach ($htmlTableContent as $htmlLineContent) {
            $found = true;
            foreach ($line as $k => $cell) {
                if ((trim($cell) == "*" || (isset($htmlLineContent[$k]) && trim($cell) == $htmlLineContent[$k])) && $found == true) {
                    $found = true;
                } else {
                    $found = false;
                }
            }
            if ($found == true) {
                $lineFound = true;
            }
        }

        return $lineFound;
    }

    /**
     * @Given /^je clique sur le lien "([^"]*)" contenu dans la ligne "([^"]*)" du tableau "([^"]*)"$/
     */
    public function jeCliqueSurLeLienContenuDansLaLigneDuTableau($arg1, $arg2, $arg3)
    {
        $lignesTableau = $this->getSession()->getPage()->findAll('css', 'table.' . $arg3 . ' tbody tr');
        $trouve = false;

        $ligneX = $lignesTableau[$arg2 - 1];

        $cols = $ligneX->findAll('css', 'td');
        foreach ($cols as $col) {
            $liens = $col->findAll('css', 'a');
            /* @var $lienElement \Behat\Mink\Element\NodeElement */
            foreach ($liens as $lienElement) {
                if (strpos($lienElement->getHtml(), $arg1) !== false || strpos($lienElement->getAttribute('title'), $arg1) !== false) {
                    $lienElement->click();
                    $trouve = true;
                    break 2;
                }
            }
        }

        assertEquals($trouve, true, '"' . $arg1 . '" non trouvé');
    }
    
        /**
     * @Given /^je clique sur le bouton "([^"]*)" contenu dans la ligne "([^"]*)" du tableau "([^"]*)"$/
     */
    public function jeCliqueSurLeBoutonContenuDansLaLigneDuTableau($arg1, $arg2, $arg3)
    {
        $lignesTableau = $this->getSession()->getPage()->findAll('css', 'table.' . $arg3 . ' tbody tr');
        $trouve = false;

        $ligneX = $lignesTableau[$arg2 - 1];

        $cols = $ligneX->findAll('css', 'td');
        foreach ($cols as $col) {
            $liens = $col->findAll('css', 'input');

            foreach ($liens as $lienElement) {
                if (strpos($lienElement->getHtml(), $arg1) !== false || strpos($lienElement->getAttribute('value'), $arg1) !== false) {
                    $lienElement->click();
                    $trouve = true;
                    break 2;
                }
            }
        }

        assertEquals($trouve, true, '"' . $arg1 . '" non trouvé');
    }

    /**
     * @Given /^je clique sur le lien numéro "([^"]*)" contenu dans "([^"]*)"$/
     */
    public function jeCliqueSurLeLienNumeroContenuDans($arg1, $arg2)
    {
        $container = $this->getSession()->getPage()->find('css', '#' . $arg2);

        if (!$container) {
            $container = $this->getSession()->getPage()->find('css', '.' . $arg2);
        }

        if ($container) {
            $links = $container->findAll('css', 'a');
            $link = $links[$arg1 - 1];
            if ($link) {
                $link->click();
            } else {
                throw new \Exception('Le lien numéro ' . $arg1 . ' n\'a pas été trouvé');
            }
        } else {
            throw new \Exception('Le container ' . $arg2 . ' n\'a pas été trouvé');
        }
    }

    /**
     * @Given /^le tableau "([^"]*)" devrait etre vide$/
     */
    public function leTableauDevraitEtreVide($tableau)
    {
        $lignesTableau = $this->getSession()->getPage()->findAll('css', 'table.' . $tableau . ' tbody tr');

        if (empty($lignesTableau)) {
            return true;
        }
        return false;
    }

    /**
     * @Given /^je remplis le champ de nom "([^"]*)" avec "([^"]*)"$/
     */
    public function jeRemplisLeChampDeNomAvec($name, $value)
    {
        $field = $this->getSession()->getPage()->find('css', 'input[name="' . $name . '"]');
        if (!$field) {
            throw new \Exception('Le champ ' . $name . ' n\'existe pas');
        }
        $field->setValue($value);
    }

    /**
     * Test le contenu des reponses des exports CSV
     * 
     * @Then /^la réponse devrait contenir un CSV ne contenant pas:$/
     */
    public function laReponseDevraitContenirUnCSVNeContenantPas(PyStringNode $text)
    {
        $actual = utf8_encode($this->getSession()->getPage()->getContent());
        $regex = '/' . preg_quote($text, '/') . '/ui';

        if (preg_match($regex, $actual)) {
            $message = sprintf('The string "%s" was found in the HTML response of the current page.', $text);
            throw new ExpectationException($message, $this->getSession());
        }
    }

    /**
     * @Given /^je coche le bouton radio "([^"]*)"$/
     *
     */
    public function jeCocheLeBoutonRadio($name)
    {
        $radio = $this->getSession()->getPage()->findField($name);
        if ($radio == null) {
            throw new \Exception('The radio button '.$name.' doesn\'t exists.');
        }
        $value = $radio->getAttribute('value');
        $this->fillField($name, $value);
    }
    
    
    /**
    * @Given /^je verifie que mes go equivalent a mon stock$/
    */
    public function jeVerifieQueMesGoEquivalentAMonStock() {
        $value = $this->getSession()->getPage()->find('css', '#blockGererGO h3 span#valueStockTotal');
        if ($value == null) {
            throw new \Exception('Le stock n\'est pas affiché sur cette page...');
        }
        
        $stockReel = $value->getHtml();
        
        $link = $this->getSession()->getPage()->find('css', '.exportBlockGo');
        $link->click();
        
        $linesArray = preg_split('/\n|\r/', $this->getSession()->getPage()->getContent());
        $numLines = count($linesArray); 
        
        if(($numLines-1) > $stockReel) {
            throw new ExpectationException('Il y a plus de GO trouvées que le stock réel');
        } elseif(($numLines-1) < $stockReel) {
            throw new ExpectationException('Il y a moins de GO trouvées que le stock réel');
        }
        
    }
    
    /**
     * @Given /^je remplis le champ "([^"]*)" avec la date "([^"]*)"$/
     */
    public function jeRemplisLeChampAvecLaDate($fieldName, $relativeDate)
    {
        $date = date('d/m/Y', strtotime($relativeDate));
        
        if($date == false) {
            throw new PendingException('The date "'.$relativeDate.'" was not intepreted well by strtotime().');
        }
        
        $field = $this->getSession()->getPage()->findField($fieldName);
        if($field == null) {
            throw new PendingException('The field "'.$fieldName.'" was not found.');
        }
        
        $field->setValue($date);
    }

}
