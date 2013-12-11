<?php

namespace newStart\UserBundle\Security\User\Provider;

use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use JMS\DiExtraBundle\Annotation as DI;
use \BaseFacebook;
use \FacebookApiException;
use Facebook;

class FacebookProvider implements UserProviderInterface
{
    /**
     * @var \Facebook
     */
    protected $facebook;
    protected $userManager;
    protected $validator;
    protected $service_container;

    public function __construct(BaseFacebook $facebook, $userManager, $validator, $service_container)
    {
        Facebook::$CURL_OPTS[CURLOPT_SSL_VERIFYPEER] = false;
        Facebook::$CURL_OPTS[CURLOPT_SSL_VERIFYHOST] = 2;
        
        $this->facebook          = $facebook;
        $this->userManager       = $userManager;
        $this->validator         = $validator;
        $this->service_container = $service_container;
    }

    public function supportsClass($class)
    {
        return $this->userManager->supportsClass($class);
    }

    public function findUserByFbId($fbId)
    {
        return $this->userManager->findUserBy(array('facebookId' => $fbId));
    }

    public function loadUserByUsername($username)
    {           
        $user = $this->findUserByFbId($username);
        
        try {
            $fbdata = $this->facebook->api('/me');            
        } catch (FacebookApiException $e) {            
            $fbdata = null;
        }

        if (!empty($fbdata)) {
            if(!isset($fbdata['email'])) {
                $this->service_container->get('session')->getFlashBag()->add('error', 'Merci de confirmer votre email sur Facebook avant de vous inscrire sur HaveFyve.');
                throw new UsernameNotFoundException('Merci de confirmer votre email sur Facebook avant de vous inscrire sur HaveFyve.');
            }

            $user_by_mail=$this->userManager->findUserBy(array('email'=>$fbdata['email']));
            
            if(!empty($user_by_mail))   //on se connecte avec fb, mais l'email est déjà présent dans la base (cas d'une personne déjà enregistrée auparavant)
            {
                //il va falloir mettre à jour ce user
                $user=$user_by_mail;              
            } elseif (empty($user)) 
            {    //si on a pas de user trouvé correspondant déjà à un user fb dans notre base (l'id facebook=un username de notre base de données)
                //on crée un nouveau user                
                $user = $this->userManager->createUser();
                $user->setEnabled(true);
                $user->setNew(true);
                $user->setPassword('');
            }

            // TODO use http://developers.facebook.com/docs/api/realtime            
            $user->setFBData($fbdata);            
            
            if (count($this->validator->validate($user, 'Facebook'))) {
                // TODO: the user was found obviously, but doesnt match our expectations, do something smart                
                $this->service_container->get('session')->getFlashBag()->add('error', 'L\'utilisateur n\'a pas pu etre enregistré.');
                throw new UsernameNotFoundException('L\'utilisateur n\'a pas pu etre enregistré.');
            }
            $this->userManager->updateUser($user);            
        }

        if (empty($user)) {
            $this->service_container->get('session')->getFlashBag()->add('error', 'Cet utilisateur n\'est pas authentifié sur Facebook.');
            throw new UsernameNotFoundException('Cet utilisateur n\'est pas authentifié sur Facebook.');
        }

        return $user;
    }

    public function refreshUser(UserInterface $user)
    {        
        if (!$this->supportsClass(get_class($user)) || !$user->getFacebookId()) {
            $this->service_container->get('session')->getFlashBag()->add('error', 'Instances of "%s" are not supported.');
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', get_class($user)));
        }

        return $this->loadUserByUsername($user->getFacebookId());
    }
}
