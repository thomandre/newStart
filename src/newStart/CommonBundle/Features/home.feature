# language: fr
Fonctionnalité: Voir la home

Contexte: Je souhaite voir la home et la FAQ

@plop
Scénario: Je vois la home avec un message affichant que le JS doit être activé
Soit je suis sur "/"
Et je devrais voir "HaveFyve necessite l'activation de Javascript pour fonctionner correctement"

@javascript
Scénario: J'ai le JS activé et je dois voir le texe
Soit je suis sur "/"
Et je devrais voir "HaveFyve arrive "
Alors je remplis "email" avec "thomandr1@gmail.com"
Et je presse "go"
Et j'attend "1" secondes
Alors je devrais voir "Nous vous tiendrons informés quand nous lancerons la fusée."