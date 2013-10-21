# language: fr
Fonctionnalité: FB login OK

Contexte: Je souhaite me loguer et voir ma page avec mes cadeaux

@javascript @wip
Scénario: Je me logue et je vois ma page
Soit je suis sur "/"

Et j'attend "2" secondes

Alors je clique sur "#u_0_0" dans l'iFrame
Et j'attend "2" secondes
Et je bascule sur la popup
Et je remplis "email" avec "thomandr1@yahoo.fr"
Et je remplis "pass" avec "c@d153512"
Et je fais mon job

Alors je reviens sur la fenêtre principale
Et j'attend "10" secondes

