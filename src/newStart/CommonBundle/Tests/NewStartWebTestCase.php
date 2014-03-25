<?php

namespace newStart\CommonBundle\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Bundle\FrameworkBundle\Client;
use Doctrine\Common\DataFixtures\Executor\ORMExecutor;
use Doctrine\Common\DataFixtures\Purger\ORMPurger;
use Symfony\Component\Console\Input\ArrayInput;
use Behat\Behat\Console\BehatApplication;
use Symfony\Component\Console\Output\ConsoleOutput;


//
// Require 3rd-party libraries here:
//
//require_once 'PHPUnit/Autoload.php';
//require_once 'PHPUnit/Framework/Assert/Functions.php';
//


abstract class NewStartWebTestCase extends WebTestCase
{

    /**
     * @var Client
     */
    protected $client;

    /**
     * @var HttpKernelInterface
     */
    protected $kern;

    /**
     * @var ContainerInterface
     */
    protected $container;

    /**
     * @var EntityManager
     */
    protected $em;

    /**
     * @var Application
     */
    protected $app;

    protected function setup()
    {
        parent::setup();
        $this->client = static::createClient();
        $this->client->followRedirects();
        $this->kern = $this->client->getKernel();
        $this->container = $this->client->getContainer();
        $this->em = $this->container->get('doctrine.orm.entity_manager');
    }

    protected function tearDown()
    {
        //Close & unsets
        if (is_object($this->em)) {
            $this->em->getConnection()->close();
            $this->em->close();
        }
        parent::tearDown();
        unset($this->em);
        unset($this->container);
        unset($this->kern);
        unset($this->client);
        //Nettoyage des mocks
        $refl = new \ReflectionObject($this);
        foreach ($refl->getProperties() as $prop) {
            if (!$prop->isStatic() && 0 !== strpos($prop->getDeclaringClass()->getName(), 'PHPUnit_')) {
                $prop->setAccessible(true);
                $prop->setValue($this, null);
            }
        }
    }

    /**
     * Do login for user
     *
     * @param string $username
     * @param string $password
     * @return Client
     */
    protected function login($username, $password = 'test')
    {
        $crawler = $this->client->request('GET', '/login');

        $form = $crawler->selectButton('_submit')->form();

        $form['_username'] = $username;
        $form['_password'] = $password;

        $this->client->submit($form);
        return $this->client;
    }

    protected function userFixturesLoad()
    {
        $loader = new \Doctrine\Common\DataFixtures\Loader();
        $loader->loadFromDirectory('src/Grdf/UserBundle/DataFixtures/ORM/');
    }

    public function scenariosMeetAcceptanceCriteria($bundleName)
    {
        //Les dossiers de logs sont crees s'ils n'existent pas
        $dirFeatures = 'build/logs/features/';
        if (!is_dir($dirFeatures)) {
            mkdir($dirFeatures);
        }
        $dirFeaturesDefault = $dirFeatures.$bundleName.'/';
        if (!is_dir($dirFeaturesDefault)) {
            mkdir($dirFeaturesDefault);
        }
        $dirFeaturesJavascript = $dirFeaturesDefault.'javascript/';
        if (!is_dir($dirFeaturesJavascript)) {
            mkdir($dirFeaturesJavascript);
        }
        //BehatApplication et config
        $app = new BehatApplication('dev');
        $app->setAutoExit(false);
        $format = 'junit,html';
        $outputFileDefault = $dirFeaturesDefault.','.$dirFeaturesDefault.'index.html';
        $outputFileJavascript = $dirFeaturesJavascript.','.$dirFeaturesJavascript.'index.html';
        //PHPUnit lance avec l'option --verbose (-v) permettra d'afficher dans la console la sortie de Behat :
        if (in_array('--verbose', $_SERVER['argv']) || in_array('-v', $_SERVER['argv'])) {
            $format = 'pretty,'.$format;
            $outputFileDefault = ','.$outputFileDefault;
            $outputFileJavascript = ','.$outputFileJavascript;
        }
        //Le profil Behat : default
        $resultDefault = $app->run(new ArrayInput(array(
            '--ansi' => null,
            '--format' => $format,
            '--out' => $outputFileDefault,
            'features' => '@'.$bundleName
            )), new ConsoleOutput());
        //Le profil Behat : javascript ou javascript_jenkins
        $profile = 'javascript';
        //Si on detecte que les tests sont lances depuis Jenkins, on utilise le profil "javascript_jenkins"
        if (strpos(getcwd(), '/var/lib/jenkins/jobs/') !== false) {
            $profile = 'javascript_jenkins';
        }
        $resultJavascript = $app->run(new ArrayInput(array(
            '--ansi' => null,
            '--format' => $format,
            '--out' => $outputFileJavascript,
            '--profile' => $profile,
            'features' => '@'.$bundleName
            )), new ConsoleOutput());
        //Assertion
        $this->assertEquals(0, $resultDefault, "Au moins un des scénarios Behat échoue pour '".$bundleName."', plus d'info disponible dans '".$outputFileDefault."' !");
        $this->assertEquals(0, $resultJavascript, "Au moins un des scénarios JS Behat échoue pour '".$bundleName."', plus d'info disponible dans '".$outputFileDefault."' !");
    }

}

