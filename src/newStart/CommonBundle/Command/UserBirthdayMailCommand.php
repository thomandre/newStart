<?php

namespace newStart\CommonBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Console\Input\InputArgument;

class UserBirthdayMailCommand extends ContainerAwareCommand
{
    
    const DAYS = 13;

    protected function configure()
    {
        $this
            ->setName('newStart:birthday:user:send')
            ->setDescription('Lance l\'envoi de mails de notification aux gens dont l\'anniversaire est dans '.self::DAYS.' jours')
            ->addArgument('debug', InputArgument::OPTIONAL, 'Debug mode activé')
        ;
    }

    /**
     * Lancement mails de notification avec informations compilées sur les fiches client transmises
     * @param  InputInterface  $input
     * @param  OutputInterface $output
     * @return void
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $em   = $this->getContainer()->get('doctrine.orm.entity_manager');
        $mail = $this->getContainer()->get('newstart_common_service_mail');
        $router = $this->getContainer()->get('router');

        $debug = $input->getArgument('debug');

        $dayOfYear = gmdate('z') + 1;
        $users = $em->getRepository('UserBundle:User')->getNextBirthdays($dayOfYear + self::DAYS);
        $settingsUrl = $router->generate('settings', array(), true);

        $mailSent = 0;
        foreach($users as $user) {
            $mail->load('newStartCommonBundle:Mails:userBirthdaySoon.html.twig');
            $body = $mail->renderBody(array('settingsUrl' => $settingsUrl));

            if($debug == 'true') {
                var_dump($body);            
            } else {
                $mail->sendMessage($user->getEmail(), 'Bientôt ton anniv’', $body, true);
                $mailSent++;
            }
        }

        $output->writeln('Email sent: '.$mailSent);
        $output->writeln("Fin");
    }

}
