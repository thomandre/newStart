# language: fr
Fonctionnalité: Offrir un cadeau a un ami en tant que guest
Contexte: Je souhaite offir un cadeau

@javascript @guest @guest_step1
Scénario: Je suis Thomas et je veux partager un l'iPod dont je reve en secret depuis des annees
Soit je suis sur "/"
Soit je me logue en tant que "thomandr1@yahoo.fr"
Alors je remplis "url" avec "http://www.apple.com/fr/ipodclassic/"
Et je presse "Go !"
Et je ne devrais pas voir "Go !"
Et j'attend que "#completeContainer" soit visible 
Alors je devrais voir "Apple - iPod Classic"
Soit je remplis "comment" avec "Back in black !"
Et je presse "Enregistrer"
Et j'attend que "#completeContainer" ne soit plus visible 
Et le champ "url" devrait contenir ""
Et je devrais voir "Apple - iPod Classic"
Et je vais sur "/me/settings"
Alors je devrais voir "Profil privé"
Et la case à cocher "prive" ne devrait pas être cochée
Et le champ "profileUrl" devrait contenir "http://havefyve.local:8888/newStart/web/app_test.php/profiles/678776921#/profile/678776921"
Alors je coche "prive"
Et j'attend "0.5" secondes
Et je recharge la page
Et la case à cocher "prive" devrait être cochée
Et je me delogue
Soit je vais sur "https://www.facebook.com"
Et je clique sur "#userNavigationLabel"
Et je presse "Déconnexion"

@javascript @guest @guest_step2
Scénario: Je suis un mechant pirate et je veux voir le profil de Thomas
Soit je suis sur "http://havefyve.local:8888/newstart/web/app_test.php/profiles/678776921#/profile/678776921"
Et j'attend "4" secondes
Alors je ne devrais pas voir "Thomas André"
Alors je devrais voir "Vos meilleurs cadeaux"
Alors je devrais voir "Se connecter via Facebook"

@javascript @guest @guest_step3
Scénario: Je suis Thomas et je veux partager passer mon profil en public
Soit je suis sur "/"
Soit je me logue en tant que "thomandr1@yahoo.fr"
Et je vais sur "/me/settings"
Alors je devrais voir "Profil privé"
Et la case à cocher "prive" devrait être cochée
Alors je décoche "prive"
Et j'attend "0.5" secondes
Et je recharge la page
Et la case à cocher "prive" ne devrait pas être cochée
Et je me delogue
Soit je vais sur "https://www.facebook.com"
Et je clique sur "#userNavigationLabel"
Et je presse "Déconnexion"

@javascript @guest @guest_step4
Scénario: Je suis la maman de Thomas, je n'ai pas de compte et je veux offrir un beau cadeau à mon fils
Soit je suis sur "http://havefyve.local:8888/newstart/web/app_test.php/profiles/678776921#/profile/678776921"
Et j'attend "2" secondes
Alors je devrais voir "Thomas André"
Et je devrais voir "Sa liste de cadeaux"
Et je devrais voir "Apple - iPod Classic"
Soit je suis "Apple - iPod classic"
Et j'attend "0.5" secondes
Alors je devrais voir "Retour"
Et je devrais voir "Back in black !"

