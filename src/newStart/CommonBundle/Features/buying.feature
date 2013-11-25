# language: fr
Fonctionnalité: Offrir un cadeau a un ami
Contexte: Je souhaite offir un cadeau

@javascript @buying @buying_step1
Scénario: Je suis Thomas et je veux partager un le MacBook Air de mes reves
Soit je suis sur "/"
Soit je me logue en tant que "thomandr1@yahoo.fr" / "c@d153512"
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

@javascript @buying @buying_step2
Scénario: Je suis AlbanThomas et je veux offrir un beau cadeau a Thomas 
Soit je vais sur "/"
Soit je me logue en tant que "albanthomas1@gmail.com" / "projetreecomate"
Et je suis "Friends"
Et j'attend "1" secondes
Alors je devrais voir "Thomas André"
Et je remplis "search" avec "Alb"
Et j'attend "0.5" secondes
Alors je ne devrais pas voir "Thomas André"
Et je remplis "search" avec "Tho"
Et j'attend "0.5" secondes
Alors je devrais voir "Thomas André"
Et je remplis "search" avec "André"
Et j'attend "0.5" secondes
Alors je devrais voir "Thomas André"
Et je suis "Thomas André"
Et j'attend "1" secondes
Alors je devrais voir "Apple - MacBook Air"
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
Et je devrais voir "Avez-vous réelement acheté \"Apple - MacBook Air\" ?"
Et je presse "Oui, j'ai acheté ce produit"
Et j'attend "0.5" secondes
Et je ne devrais pas voir "Avez-vous réelement acheté \"Apple - MacBook Air\" ?"
Et je suis "Friends"
Et j'attend "0.5" secondes
Alors je devrais voir "Thomas André"
Et je suis "Thomas André"
Et j'attend "0.5" secondes
Alors je ne devrais pas voir "Apple - MacBook Air"
Et je me delogue

@javascript @buying @buying_step3
Scénario: Je suis Thomas et je ne dois pas voir qu'Alban m'a fait un cadeau
Soit je vais sur "/"
Soit je me logue en tant que "thomandr1@yahoo.fr" / "c@d153512"
Et j'attend "0.5" secondes
Alors je devrais voir "Apple - MacBook Air"
Et je me delogue

@javascript @logout
Scénario: Je veux pouvoir me deloguer
Soit je vais sur "/"
Soit je me logue en tant que "thomandr1@yahoo.fr" / "c@d153512"
Et j'attend "0.5" secondes
Et je me delogue
Soit je vais sur "/"
Soit je me logue en tant que "albanthomas1@gmail.com" / "projetreecomate"
Et j'attend "0.5" secondes
Et je me delogue
