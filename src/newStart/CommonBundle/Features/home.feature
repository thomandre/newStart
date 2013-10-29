# language: fr
Fonctionnalité: Voir la home

Contexte: Je souhaite voir la home et la FAQ

Scénario: Je vois la home avec un message affichant que le JS doit être activé
Soit je suis sur "/"
Et je devrais voir "HaveFyve necessite l'activation de Javascript pour fonctionner correctement"

@javascript @first
Scénario: J'ai le JS activé et je peux enregistrer un email
Soit je suis sur "/"
Et j'attend "1" secondes
Et je devrais voir "HaveFyve arrive bientôt"
Alors je remplis "email" avec "thomandre@gmail.com"
Et je presse "Go !"
Et j'attend "1" secondes
Alors je devrais voir "Nous vous tiendrons informés quand nous lancerons la fusée."

@javascript
Scénario: Je peux enregistrer un email avec des chiffres dans le user
Soit je suis sur "/"
Et j'attend "1" secondes
Et je devrais voir "HaveFyve arrive bientôt"
Alors je remplis "email" avec "thomandr1@gmail.com"
Et je presse "Go !"
Et j'attend "1" secondes
Alors je devrais voir "Nous vous tiendrons informés quand nous lancerons la fusée."

@javascript
Scénario: J'ai le JS activé et je peux enregistrer un email avec des chiffres dans le domaine
Soit je suis sur "/"
Et j'attend "1" secondes
Et je devrais voir "HaveFyve arrive bientôt"
Alors je remplis "email" avec "thomandre@1and1.com"
Et je presse "Go !"
Et j'attend "1" secondes
Alors je devrais voir "Nous vous tiendrons informés quand nous lancerons la fusée."

@javascript
Scénario: J'ai le JS activé et je peux enregistrer un email d'un sous domaine niveau 2
Soit je suis sur "/"
Et j'attend "1" secondes
Et je devrais voir "HaveFyve arrive bientôt"
Alors je remplis "email" avec "thomandre@1and1.co.nz"
Et je presse "Go !"
Et j'attend "1" secondes
Alors je devrais voir "Nous vous tiendrons informés quand nous lancerons la fusée."


@javascript
Scénario: J'ai le JS activé et je ne peux pas enregistrer un email sans domaine
Soit je suis sur "/"
Et j'attend "1" secondes
Et je devrais voir "HaveFyve arrive bientôt"
Alors je remplis "email" avec "thomand"
Et je presse "Go !"
Et j'attend "1" secondes
Alors je ne devrais pas voir "Nous vous tiendrons informés quand nous lancerons la fusée."
Et je devrais voir "Cet email ne semble pas valide."

@javascript
Scénario: J'ai le JS activé et je ne peux pas enregistrer deux fois le même email
Soit je suis sur "/"
Et j'attend "1" secondes
Et je devrais voir "HaveFyve arrive bientôt"
Alors je remplis "email" avec "test@gmail.com"
Et je presse "Go !"
Et j'attend "1" secondes
Alors je devrais voir "Nous vous tiendrons informés quand nous lancerons la fusée."
Alors je remplis "email" avec "test@gmail.com"
Et je presse "Go !"
Et j'attend "1" secondes
Alors je devrais voir "Cet email est déjà utilisé."

