# language: fr
Fonctionnalité: Ne plus recevoir d'email
Contexte: Je souhaite désactiver les mails

@javascript @emailStop
Scénario: Je suis Thomas et je ne veux plus recevoir d'emails
Soit je suis sur "/"
Soit je me logue en tant que "albanthomas1@gmail.com"
Et je clique sur ".settings"
Et je suis "Settings"
#Et je vais sur "/me/settings"
Alors je décoche "email"
Et j'attend "1" secondes
Et je recharge la page
Et la case à cocher "email" ne devrait pas être cochée

Alors je coche "email"
Et j'attend "1" secondes
Et je recharge la page
Et la case à cocher "email" devrait être cochée
Et je me delogue
Soit je vais sur "https://www.facebook.com"
Et je devrais voir "Thomas Alban"
Et je clique sur "#userNavigationLabel"
Et j'attend "0.5" secondes
Et je presse "Déconnexion"