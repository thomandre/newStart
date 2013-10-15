<?php

namespace newStart\CommonBundle\Service;

use JMS\DiExtraBundle\Annotation\Service;
use JMS\DiExtraBundle\Annotation as DI;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;

/**
 * @Service("my_fos_facebook_auth_success_handler", public=true)
 */
class myFosFacebookAuthSuccessHandlerService implements AuthenticationSuccessHandlerInterface
{
	
	private $container;

    public function __construct($container)
    {
        $this->container = $container;
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token)
    {
        //$currentUser = $this->userManager->findUserBy(array('facebookId' => $token));
        //if($token->getUser()->isNew()) {
		//	return new RedirectResponse($this->container->get('router')->generate('friends-select'));
        //} else {
        	return new RedirectResponse($this->container->get('router')->generate('me'));
        //}

    }


}

