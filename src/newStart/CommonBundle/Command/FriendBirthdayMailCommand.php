<?php

namespace newStart\CommonBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Console\Input\InputArgument;

class FriendBirthdayMailCommand extends ContainerAwareCommand
{
    
    protected function configure()
    {
        $this
            ->setName('newStart:birthday:friend:send')
            ->setDescription('Lance l\'envoi de mails de notification aux amis des gens dont c\'est l\'anniv dans [DAYS] jours')
            ->addArgument('days', InputArgument::REQUIRED, 'Nombre de jours')
            ->addArgument('debug', InputArgument::OPTIONAL, 'Debug mode activé')
        ;
    }

    /**
     * Lancement mails de notification 
     * @param  InputInterface  $input
     * @param  OutputInterface $output
     * @return void
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $em     = $this->getContainer()->get('doctrine.orm.entity_manager');
        $mail   = $this->getContainer()->get('newstart_common_service_mail');
        $router = $this->getContainer()->get('router');

        $debug = $input->getArgument('debug');
        $days  = $input->getArgument('days');

        $output->writeln("newStart:birthday:friend:send started: ".gmdate('Y-m-d H:i:s'));

        $settingsUrl = $router->generate('settings', array(), true);

        $dayOfYear = gmdate('z') + 1;
        $users = $em->getRepository('UserBundle:User')->getNextBirthdays($dayOfYear + $days);

        $mailSent = 0;
        $userBirtdays = 0;
        foreach($users as $user) {
            $userBirtdays++;
            foreach($user->getFriendsWithMe() as $friend) {
                if($friend->isFavorite() && $friend->getFriendsWithMe()->getEmailStop() == false) {
                    $mail->load('newStartCommonBundle:Mails:friendBirthdaySoon.html.twig');
                    $profileUrl = $router->generate('profile', array('userId' => $user->getFacebookId()), true);
                    $body = $mail->renderBody(array('friend' => $friend->getFriendsWithMe(), 'user' => $user, 
                                                    'profileUrl' => $profileUrl, 'settingsUrl' => $settingsUrl));

                    if($debug == 'true') {
                        var_dump($body);
                    } else {
                        $subject = 'Bientôt l\'anniv’ de '.$user->getFullName();
                        $mail->sendMessage($friend->getFriendsWithMe()->getEmail(), $subject, $body, true);
                        $mailSent++;
                    }
                }
            }  
        }

        $output->writeln('User birthdays: '.$userBirtdays);
        $output->writeln('Email sent: '.$mailSent);
        $output->writeln("------------------------------------------------");
    }

}
