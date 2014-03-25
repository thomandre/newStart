# language: fr
Fonctionnalité: Comprendre comment le site marche
#Contexte: Je souhaite désactiver les mails

@javascript @suggestions
Scénario: Je suis Thomas et je veux essayer les suggestions
Soit je suis sur "/"
Soit je me logue en tant que "albanthomas1@gmail.com"
Alors je devrais voir "Ma liste de cadeaux"
Et j'attend "1" secondes
Et je presse "Suggestions"
Et j'attend "5" secondes
Alors je devrais voir "Pantalon de costume coupe cigarette"
Soit je suis "Pantalon de costume coupe cigarette"
Et j'attend que "#completeContainer" soit visible 
Alors je devrais voir "Pantalon de costume coupe cigarette"
Et je devrais voir "Annuler"
Et je devrais voir "Enregistrer"
Alors je presse "Enregistrer"
Alors je devrais voir "Pantalon de costume coupe cigarette"


