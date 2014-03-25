<?php

namespace newStart\APIBundle\DataFixtures\ORM;

use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use newStart\CommonBundle\Entity\Suggestion;

class SuggestionsData extends AbstractFixture implements OrderedFixtureInterface, ContainerAwareInterface
{

    public $container;

    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }

    public function load(ObjectManager $manager)
    {
    	$suggestion = new Suggestion();
    	$suggestion->setName('Pantalon chino slim Hudson');
    	$suggestion->setUrl('http://www.ralphlauren.fr/product/index.jsp?productId=19200271&cp=4663481.4663341.4664271&ab=ln_hommes_pr%EAt-%E0-porter_pantalons');
    	$suggestion->setPrice('135 EUR');
    	$suggestion->setImgUrl('http://s7d2.scene7.com/is/image/PoloGSI/s7-1051440_standard?wid=2000&hei=2000');
    	$suggestion->setGender('male');
        $manager->persist($suggestion);
        $manager->flush();

    	$suggestion = new Suggestion();
    	$suggestion->setName('Reflex Canon EOS 700D + Obj. Canon EF-S');
    	$suggestion->setUrl('http://www.fnac.com/Reflex-Canon-EOS-700D-Obj-Canon-EF-S-IS-STM-18-135-mm-f-3-5-5-6-Objectif-Canon-EF-50-mm-f-1-8-Fourre-tout-Canon-100EG/a6956211/w-4');
    	$suggestion->setPrice('1099.90 EUR');
    	$suggestion->setImgUrl('http://static.fnac-static.com/multimedia/Images/FR/NR/58/72/58/5796440/1520-1.jpg');
    	$suggestion->setGender('male');
        $manager->persist($suggestion);
        $manager->flush();

    	$suggestion = new Suggestion();
    	$suggestion->setName('Playstation 4 Sony');
    	$suggestion->setUrl('http://jeux-video.fnac.com/Console-PS4-Sony-Console-Playstation-4-Sony/a6387571/w-4');
    	$suggestion->setPrice('399 EUR');
    	$suggestion->setImgUrl('http://static.fnac-static.com/multimedia/Images/FR/NR/c7/ed/48/4779463/1505-1.jpg');
    	$suggestion->setGender('male');
        $manager->persist($suggestion);
        $manager->flush();

    	$suggestion = new Suggestion();
    	$suggestion->setName('MacBook Air 13"');
    	$suggestion->setUrl('http://www.rueducommerce.fr/Ordinateurs/Ordinateur-Portable/Ordinateur-Portable-Grand-Public/APPLE/4900138-MacBook-Air-13-Intel-Core-i5-Dual-Core-Haswell-1-3-GHz-SSD-128-Go-RAM-4-Go-Intel-HD-Graphics-5000-OS-X-Mountain-Lion.htm#moid:MO-19E29M22457656');
    	$suggestion->setPrice('1039 EUR');
    	$suggestion->setImgUrl('http://s3.static69.com/m/image-offre/3/d/9/d/3d9d7b4be53bbd7e925737d30989cbe5-500x500.jpg');
    	$suggestion->setGender('male');
        $manager->persist($suggestion);
        $manager->flush();


    	$suggestion = new Suggestion();
    	$suggestion->setName('Pantalon de costume coupe cigarette');
    	$suggestion->setUrl('http://shop.mango.com/FR/p0/mango/vetements/pantalon-de-costume-coupe-cigarette/?id=21023560_02&n=1&s=prendas.pantalones&ident=0__0_1395419851606&ts=1395419851606');
    	$suggestion->setPrice('34,99 EUR');
    	$suggestion->setImgUrl('http://st.mngbcn.com/rcs/pics/static/T2/fotos/S9/21023560_02.jpg');
    	$suggestion->setGender('female');
        $manager->persist($suggestion);
        $manager->flush();

    	$suggestion = new Suggestion();
    	$suggestion->setName('T-shirt à capuche Megan');
    	$suggestion->setUrl('http://fr-eu.abercrombie.com/shop/eu/womens-long-sleeve-fashion-tops/megan-hoodie-2137098_01');
    	$suggestion->setPrice('54 EUR');
    	$suggestion->setImgUrl('http://anf.scene7.com/is/image/anf/anf_73824_01_prod1?$productMagnify-anf$');
    	$suggestion->setGender('female');
        $manager->persist($suggestion);
        $manager->flush();

    	$suggestion = new Suggestion();
    	$suggestion->setName('Robe Bicolore Collier');
    	$suggestion->setUrl('http://www.zara.com/fr/fr/nouveaut%C3%A9s/femme/robe-bicolore-collier-c363008p1832506.html');
    	$suggestion->setPrice('39,95 EUR');
    	$suggestion->setImgUrl('http://static.zara.net/photos//2014/V/0/1/p/7901/027/250/2/w/1024/7901027250_2_1_1.jpg?timestamp=1395250521335');
    	$suggestion->setGender('female');
        $manager->persist($suggestion);
        $manager->flush();

    	$suggestion = new Suggestion();
    	$suggestion->setName('Pull Maille Torsadée Organza');
    	$suggestion->setUrl('http://www.zara.com/fr/fr/nouveaut%C3%A9s/femme/pull-maille-torsad%C3%A9e-organza-c363008p1741031.html');
    	$suggestion->setPrice('39,95 EUR');
    	$suggestion->setImgUrl('http://static.zara.net/photos//2014/V/0/1/p/2619/033/403/2/w/1024/2619033403_2_4_1.jpg?timestamp=1394796270594');
    	$suggestion->setGender('female');
        $manager->persist($suggestion);
        $manager->flush();





    }

    public function getOrder()
    {
        return 2;
    }
}