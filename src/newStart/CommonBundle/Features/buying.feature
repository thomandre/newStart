# language: fr
Fonctionnalité: Offrir un cadeau a un ami
Contexte: Je souhaite offir un cadeau

@javascript @buying @buying_step1
Scénario: Je suis Thomas et je veux partager un le MacBook Air de mes reves
Soit je suis sur "/"
Soit je me logue en tant que "thomandr1@yahoo.fr"
Et j'attend "0.5" secondes
Alors je devrais voir "Welovegifts est le site le plus simple pour offrir les cadeaux qui font vraiment plaisir."
Alors je presse "Ok"
Alors je remplis "url" avec "http://www.apple.com/fr/macbook-air/"
Et je presse "Go !"
Et je ne devrais pas voir "Go !"
Et j'attend que "#completeContainer" soit visible 
Alors je devrais voir "Apple - MacBook Air"
Soit je remplis "comment" avec "Core i7 1,7 GHz - 512 de SSD - 8Go de RAM"
Et je presse "Enregistrer"
Et j'attend que "#completeContainer" ne soit plus visible 
Et le champ "url" devrait contenir ""
Et je devrais voir "Apple - MacBook Air"
Et je me delogue
Soit je vais sur "https://www.facebook.com"
Et je clique sur "#userNavigationLabel"
Et j'attend "0.5" secondes
Et je presse "Déconnexion"

@javascript @buying @buying_step2
Scénario: Je suis AlbanThomas et je veux offrir un beau cadeau a Thomas 
Soit je vais sur "/"
Soit je clique sur le bouton Facebook Connect
Et je remplis "email" avec "albanthomas1@gmail.com"
Et je remplis "pass" avec "projetreecomate1"
Et je valide le formulaire
Et j'attend "1" secondes
Et je devrais voir "Welovegifts Test"
Et je devrais voir "recevra"
Et je devrais voir "profil public"
Et je devrais voir "liste d’amis"
Et je devrais voir "adresse électronique"
Et je devrais voir "anniversaire"
Et je devrais voir "mentions J’aime"
Soit je presse "__CONFIRM__"
Et j'attend "2" secondes
Et j'attend que ".profile-image" soit sur la page
Alors je devrais voir "Welovegifts est le site le plus simple pour offrir les cadeaux qui font vraiment plaisir."
Alors je presse "Ok"
Et je suis "Friends"
Et j'attend "1" secondes
Alors je devrais voir "Qui sont vos meilleurs amis ?"
Alors je presse "Ok"
Et j'attend "1" secondes
Alors je devrais voir "Thomas André"
Et je remplis "search" avec "Alb"
Et j'attend "1" secondes
Alors je ne devrais pas voir "Thomas André"
Et je remplis "search" avec "Tho"
Et j'attend "1" secondes
Alors je devrais voir "Thomas André"
Et je remplis "search" avec "André"
Et j'attend "1" secondes
Alors je devrais voir "Thomas André"
Et je remplis "search" avec "thomas andré"
Et j'attend "1" secondes
Alors je devrais voir "Thomas André"
Et je suis "Thomas André"
Et j'attend "1" secondes
Alors je devrais voir "Apple - MacBook Air"

Alors je suis "What's new"
Et j'attend "0.5" secondes
Et je devrais voir "Apple - MacBook Air"
Alors je devrais voir "Thomas André"

Et je suis "Apple - MacBook Air"
Et j'attend "0.5" secondes
Et je devrais voir "Core i7 1,7 GHz - 512 de SSD - 8Go de RAM"
Et je devrais voir "Retour"
Et je devrais voir "Acheter"
Et je suis "Acheter"
Et j'attend "0.5" secondes
Et je bascule sur la popup
Et je devrais voir "Le MacBook Air offre désormais une autonomie de 9 heures entre deux charges pour le modèle 11 pouces, et de 12 heures pour le modèle 13 pouces."
Et je reviens sur la fenêtre principale
Et je devrais voir "Vous avez décidé d’acheter ce cadeau finalement ?"
Et je devrais voir "Si vous cliquez sur oui, le cadeau disparaitra ne sera plus visible dans la liste, sauf pour Thomas, pour lui garder la surprise"
Et je presse "Oui, j'ai acheté ce cadeau"
Et j'attend "1" secondes
Et je ne devrais pas voir "Vous avez décidé d’acheter ce cadeau finalement ?"
Et j'attend "1" secondes
Et je devrais voir "Génial"
Et je suis "Friends"
Et j'attend "1" secondes
Alors je devrais voir "Thomas André"
Et je suis "Thomas André"
Et j'attend "1" secondes
Alors je ne devrais pas voir "Apple - MacBook Air"
Et je me delogue
Soit je vais sur "https://www.facebook.com"
Et je clique sur "#userNavigationLabel"
Et j'attend "0.5" secondes
Et je presse "Déconnexion"

@javascript @buying @buying_step3
Scénario: Je suis Thomas et je ne dois pas voir qu'Alban m'a fait un cadeau
Soit je vais sur "/"
Soit je me logue en tant que "thomandr1@yahoo.fr"
Et j'attend "0.5" secondes
Alors je devrais voir "Apple - MacBook Air"
Et je me delogue
Soit je vais sur "https://www.facebook.com"
Et je clique sur "#userNavigationLabel"
Et j'attend "0.5" secondes
Et je presse "Déconnexion"

@javascript @buying @buying_step4
Scénario: Je suis Thomas et je veux m'offrir un iPad Mini Retina
Soit je suis sur "/"
Soit je me logue en tant que "thomandr1@yahoo.fr"
Alors je remplis "url" avec "http://www.apple.com/fr/ipad-mini/?cid=wwa-fr-kwg-ipad-com"
Et je presse "Go !"
Et je ne devrais pas voir "Go !"
Et j'attend que "#completeContainer" soit visible 
Alors je devrais voir "iPad mini"
Et je presse "Enregistrer"
Et j'attend que "#completeContainer" ne soit plus visible 
Et le champ "url" devrait contenir ""
Et je devrais voir "Apple - iPad mini avec écran Retina"
Et j'attend "0.5" secondes
Alors je suis "Apple - iPad"
Et j'attend "0.5" secondes
Et je devrais voir "Apple - iPad mini"
Alors je suis "Acheter"
Et je bascule sur la popup
Et je devrais voir "L’iPad mini avec écran Retina est une petite merveille."
Et je reviens sur la fenêtre principale
Et je devrais voir "Vous avez décidé de vous offrir ce cadeau ?"
Et je presse "Oui, j'ai acheté ce cadeau"
Et j'attend "1" secondes
Et je ne devrais pas voir "Vous avez décidé de vous offrir ce cadeau ?"
Et je devrais voir "Génial"
Et je suis "Retour"
Et je ne devrais pas voir "iPad mini"
Et je me delogue
Soit je vais sur "https://www.facebook.com"
Et je clique sur "#userNavigationLabel"
Et j'attend "0.5" secondes
Et je presse "Déconnexion"


