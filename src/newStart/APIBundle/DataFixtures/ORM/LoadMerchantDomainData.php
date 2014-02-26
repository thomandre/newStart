<?php

namespace Grdf\CarmaBundle\DataFixtures\ORM;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use newStart\CommonBundle\Entity\MerchantDomain;

class MerchantDomainData extends AbstractFixture implements OrderedFixtureInterface, ContainerAwareInterface
{

    public $container;

    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }

    /*private function loadFromCSV($manager)
    {
        $file = $this->container->get('kernel')->locateResource('@GrdfCarmaBundle/Resources/data/merchants.csv');
        if (($handle = fopen($file, 'r'))) {
            $data = fgetcsv($handle, 0, ';'); //On saute la premiere ligne
            while (($data = fgetcsv($handle, 0, ';'))) {
                $e = new MerchantDomain();
                $e->setPostcode(utf8_encode(trim($data[0])));
                $e->setName(utf8_encode(trim($data[1])));
                $manager->persist($e);
            }
            fclose($handle);
            $manager->flush();
        }
    }*/

    private function loadFromSQL($manager)
    {
        $file = $this->container->get('kernel')->locateResource('@newStartAPIBundle/Resources/data/merchants-light.sql');
        $content = file_get_contents($file);
        $inserts = explode(';', $content);

        for ($i = 0; $i < (count($inserts) - 1); $i++) {
            $request = $manager->getConnection()->prepare($inserts[$i]);
            $request->execute();
        }
    }

    public function load(ObjectManager $manager)
    {
        //Si le fichier Excel change, le sauvegarder au format CSV puis lancer le chargement avec la fonction "loadFromCSV".
        //Ensuite, exporter la table chargee au format SQL (phpMyAdmin) avant de relancer les fixtures avec la fonction "loadFromSQL"
        //$this->loadFromCSV($manager);

        $merchantDomain = new MerchantDomain();
        $merchantDomain->setDomain('3mdirect.co.uk');
        $merchantDomain->setName('3mdirect');
        $merchantDomain->setTracker('viglink');
        $merchantDomain->setPriority('1');
        $manager->persist($merchantDomain);

        $merchantDomain2 = new MerchantDomain();
        $merchantDomain2->setDomain('3mdirect.co.uk');
        $merchantDomain2->setName('3mdirect');
        $merchantDomain2->setTracker('skimlink');
        $merchantDomain2->setPriority('2');
        $manager->persist($merchantDomain2);

        $merchantDomain3 = new MerchantDomain();
        $merchantDomain3->setDomain('amazon.com');
        $merchantDomain3->setName('amazon');
        $merchantDomain3->setTracker('viglink');
        $merchantDomain3->setPriority('1');
        $manager->persist($merchantDomain3);

        $merchantDomain4 = new MerchantDomain();
        $merchantDomain4->setDomain('0044.co.uk');
        $merchantDomain4->setName('0044.co.uk');
        $merchantDomain4->setTracker('skimlink');
        $merchantDomain4->setPriority('2');
        $manager->persist($merchantDomain4);

        $manager->flush();

        //$this->loadFromSQL($manager);
    }

    public function getOrder()
    {
        return 1;
    }

}
