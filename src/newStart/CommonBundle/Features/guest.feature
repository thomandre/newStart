# language: fr
Fonctionnalité: Offrir un cadeau a un ami
Contexte: Je souhaite offir un cadeau

@javascript @guest @guest_step1
Scénario: Je suis Thomas et je veux partager un l'iPod dont je reve en secret depuis des annees
Soit je suis sur "/"
Soit je me logue en tant que "thomandr1@yahoo.fr" / "c@d153512"
Alors je devrais voir "Havefyve est le site le plus simple pour offrir les cadeaux qui font vraiment plaisir."
Alors je presse "Ok"
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
Et je me delogue

@javascript @guest @guest_step2
Scénario: Je suis la maman de Thomas, je n'ai pas de compte et je veux offrir un beau cadeau a mon fils
Soit je suis sur "http://192.168.0.11:8888/newstart/web/app_test.php/profiles/678776921#/profile/678776921"
Alors je devrais voir "Thomas André"
Et j'attend "1" secondes
Et je devrais voir "Sa liste de cadeaux"
Et je devrais voir "Apple - iPod Classic"
Soit je suis "Apple - iPod classic"
Et j'attend "0.5" secondes
Alors je devrais voir "Retour"
Et je devrais voir "Back in black !"