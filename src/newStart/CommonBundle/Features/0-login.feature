# language: fr
Fonctionnalité: Tester tous les cas de figure du login Facebook

@javascript @login @login_step1
Scénario: Je ne suis pas logué sur FB et je n'ai pas authorisé l'app
Soit je vais sur "https://www.facebook.com"
Et je remplis le login avec "albanthomas1@gmail.com"
Et je remplis le password avec "projetreecomate"
Et je presse Connexion
Alors je devrais voir "Thomas Alban"
Et je vais sur "https://www.facebook.com/settings/?tab=privacy&ref=mb&privacy_source=settings_menu"
Soit je suis "Applications"
Et j'attend "0.5" secondes
Alors je devrais voir "HaveFyve Dev"
Et je suis "Supprimer"
Et j'attend "0.5" secondes
Alors je devrais voir "Retirer HaveFyve Dev ?"
Alors je clique sur ".uiButtonConfirm"
Et j'attend "1" secondes
Alors je ne devrais pas voir "HaveFyve Dev"
Et je clique sur "#userNavigationLabel"
Et je presse "Déconnexion"
Soit je suis sur "/"
Soit je clique sur le bouton Facebook Connect
Et je remplis "email" avec "albanthomas1@gmail.com"
Et je remplis "pass" avec "projetreecomate"
Et je valide le formulaire
Et j'attend "1" secondes
Et je bascule sur la popup
Alors je devrais voir "Se connecter avec Facebook"
Et je devrais voir "HaveFyve Dev recevra les informations suivantes : vos profil public, liste d’amis, adresse électronique, anniversaire et mentions J’aime."
Soit je presse "__CONFIRM__"
Et je reviens sur la fenêtre principale
Et j'attend que ".profile-image" soit sur la page
Et je devrais voir "Ma liste de cadeaux"
Et je me delogue

@javascript @login @login_step2
Scénario: Je ne suis pas logué sur FB et j'ai authorisé l'app
Soit je vais sur "https://www.facebook.com"
Et je ne devrais pas voir "Thomas Alban"
Soit je suis sur "/"
Soit je me logue en tant que "albanthomas1@gmail.com"
Et je devrais voir "Ma liste de cadeaux"
Et j'attend "0.5" secondes
Et je me delogue


@javascript @login @login_step3
Scénario: Je suis logué sur FB et je n'ai pas authorisé l'app
Soit je vais sur "https://www.facebook.com"
Et je remplis le login avec "albanthomas1@gmail.com"
Et je remplis le password avec "projetreecomate"
Et je presse Connexion
Alors je devrais voir "Thomas Alban"
Et je vais sur "https://www.facebook.com/settings/?tab=privacy&ref=mb&privacy_source=settings_menu"
Soit je suis "Applications"
Et j'attend "0.5" secondes
Alors je devrais voir "HaveFyve Dev"
Et je suis "Supprimer"
Et j'attend "0.5" secondes
Alors je devrais voir "Retirer HaveFyve Dev ?"
Alors je clique sur ".uiButtonConfirm"
Et j'attend "1" secondes
Alors je ne devrais pas voir "HaveFyve Dev"
Soit je suis sur "/"
Soit je clique sur le bouton Facebook Connect
Et je devrais voir "HaveFyve Dev recevra les informations suivantes : vos profil public, liste d’amis, adresse électronique, anniversaire et mentions J’aime."
Soit je presse "__CONFIRM__"
Et je reviens sur la fenêtre principale
Et j'attend que ".profile-image" soit sur la page
Et je devrais voir "Ma liste de cadeaux"
Et je me delogue

@javascript @login @login_step4
Scénario: Je suis logué sur FB et j'ai authorisé l'app
Soit je vais sur "https://www.facebook.com"
Et je remplis le login avec "albanthomas1@gmail.com"
Et je remplis le password avec "projetreecomate"
Et je presse Connexion
Alors je devrais voir "Thomas Alban"
Soit je suis sur "/"
Et j'attend "5" secondes
Et je devrais voir "Ma liste de cadeaux"
Et j'attend "0.5" secondes
Et je me delogue
Soit je vais sur "https://www.facebook.com"
Et je ne devrais pas voir "Thomas Alban"