# language: fr
Fonctionnalité: FB login OK

Contexte: Je souhaite me loguer et voir ma page avec mes cadeaux

@javascript @wip
Scénario: Je me logue et je vois ma page
Soit je vais sur "http://facebook.com"
Soit je suis sur "/"
#Et j'attend "80" secondes
Alors je clique sur "#u_0_0" dans l'iFrame
Et j'attend "2" secondes
Et je bascule sur la popup
Et je remplis "email" avec "albanthomas1@gmail.com"
Et je remplis "pass" avec "projetreecomate"
Et je fais mon job

Alors je reviens sur la fenêtre principale
Et j'attend "10" secondes

Et je devrais voir "Votre liste de cadeaux"
