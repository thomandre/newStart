<?php

namespace newStart\CommonBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

/**
 * @Service("my_fos_facebook_auth_success_handler", public=true)
 */
class myFosFacebookAuthSuccessHandlerService implements AuthenticationSuccessHandlerInterface
{
	
	private $userManager;

    public function __construct($userManager)
    {
        $this->userManager = $userManager;
    }

    /**
     * @DI\Inject("doctrine.orm.entity_manager")
     * @var \Doctrine\ORM\EntityManager
     */
    public $em;


    public function onAuthenticationSuccess(Request $request, TokenInterface $token)
    {
        //$currentUser = $this->userManager->findUserBy(array('facebookId' => $token));

        if($token->getUser()->isNew()) {
        	echo 'You must select 20 friends.';
        } else {
        	echo 'Everything is good my friend';
        }
        
    }


}