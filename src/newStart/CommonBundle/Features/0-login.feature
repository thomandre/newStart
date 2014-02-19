# language: fr
Fonctionnalité: Tester tous les cas de figure du login Facebook

@javascript @login @login_step1
Scénario: Je ne suis pas logué sur FB et j'ai déjà authorisé l'app dans le passé
Soit je vais sur "https://www.facebook.com"
Et je remplis le login avec "albanthomas1@gmail.com"
Et je remplis le password avec "projetreecomate1"
Et je presse Connexion
Alors je devrais voir "Thomas Alban"
Et je vais sur "https://www.facebook.com/settings/?tab=privacy&ref=mb&privacy_source=settings_menu"
Soit je suis "Applications"
Et j'attend "1" secondes
Alors je devrais voir "HaveFyve Test"
Et je suis le lien aria-label "Supprimer HaveFyve Test"
Et j'attend "0.5" secondes
Alors je devrais voir "Retirer HaveFyve Test ?"
Alors je clique sur ".uiButtonConfirm"
Et j'attend "1" secondes
Alors je ne devrais pas voir "HaveFyve Test"
Et je clique sur "#userNavigationLabel"
Et je presse "Déconnexion"
Soit je suis sur "/"
Soit je clique sur le bouton Facebook Connect
Et je remplis "email" avec "albanthomas1@gmail.com"
Et je remplis "pass" avec "projetreecomate1"
Et je valide le formulaire
Et j'attend "1" secondes
Et je devrais voir "HaveFyve Test"
Et je devrais voir "recevra"
Et je devrais voir "profil public"
Et je devrais voir "liste d’amis"
Et je devrais voir "adresse électronique"
Et je devrais voir "anniversaire"
Et je devrais voir "mentions J’aime"
Soit je presse "__CONFIRM__"
Et j'attend "2" secondes
Et j'attend que ".profile-image" soit sur la page
Et je devrais voir "Ma liste de cadeaux"
Et je me delogue

@javascript @login @login_step2
Scénario: Je ne suis pas logué sur FB et j'ai authorisé l'app
Soit je vais sur "https://www.facebook.com"
Et je devrais voir "Thomas Alban"
Et je clique sur "#userNavigationLabel"
Et je presse "Déconnexion"
Soit je suis sur "/"
Soit je me logue en tant que "albanthomas1@gmail.com"
Et je devrais voir "Ma liste de cadeaux"
Et j'attend "0.5" secondes
Et je me delogue


@javascript @login @login_step3
Scénario: Je suis logué sur FB et je n'ai pas authorisé l'app
Soit je vais sur "https://www.facebook.com"
Alors je devrais voir "Thomas Alban"
Et je vais sur "https://www.facebook.com/settings/?tab=privacy&ref=mb&privacy_source=settings_menu"
Soit je suis "Applications"
Et j'attend "0.5" secondes
Alors je devrais voir "HaveFyve Test"
Et je suis le lien aria-label "Supprimer HaveFyve Test"
Et j'attend "0.5" secondes
Alors je devrais voir "Retirer HaveFyve Test ?"
Alors je clique sur ".uiButtonConfirm"
Et j'attend "1" secondes
Alors je ne devrais pas voir "HaveFyve Test"
Soit je suis sur "/"
Soit je clique sur le bouton Facebook Connect
Et je devrais voir "HaveFyve Test"
Et je devrais voir "recevra"
Et je devrais voir "profil public"
Et je devrais voir "liste d’amis"
Et je devrais voir "adresse électronique"
Et je devrais voir "anniversaire"
Et je devrais voir "mentions J’aime"
Soit je presse "__CONFIRM__"
Et j'attend "2" secondes
Et j'attend que ".profile-image" soit sur la page
Et je devrais voir "Ma liste de cadeaux"
Et je me delogue

@javascript @login @login_step4
Scénario: Je suis logué sur FB et j'ai authorisé l'app
Soit je vais sur "https://www.facebook.com"
Alors je devrais voir "Thomas Alban"
Soit je suis sur "/"
Et j'attend "0.5" secondes
Soit je presse "Se connecter via Facebook"
Et j'attend que ".profile-image" soit sur la page
Et je devrais voir "Ma liste de cadeaux"
Et j'attend "0.5" secondes
Et je me delogue
Soit je vais sur "https://www.facebook.com"
Et je devrais voir "Thomas Alban"
Et je clique sur "#userNavigationLabel"
Et j'attend "0.5" secondes
Et je presse "Déconnexion"
