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
Et j'attend que "#suggestionList ul li" soit visible 
Et j'attend "0.5" secondes
Alors je devrais voir "Pantalon de costume coupe cigarette"
Soit je suis "Pantalon de costume coupe cigarette"
Et j'attend que "#completeContainer" soit visible 
Alors je devrais voir "Pantalon de costume coupe cigarette"
Et je remplis "comment" avec "Ma taille c'est 36 ;-)"
Et je clique sur ".profile-image"
Et le champ "url" devrait contenir "http://shop.mango.com/FR/p0/mango/vetements/pantalon-de-costume-coupe-cigarette/?id=21023560_02&n=1&s=prendas.pantalones&ident=0__0_1395419851606&ts=1395419851606"
Alors je presse "Go !"
Et j'attend "1" secondes
Et le champ "comment" devrait contenir "Ma taille c'est 36 ;-)"
Alors je presse "Enregistrer"
Et j'attend "1" secondes
Et je ne devrais pas voir "Annuler"
Et je ne devrais pas voir "Enregistrer"
Alors je devrais voir "Pantalon de costume coupe cigarette"


