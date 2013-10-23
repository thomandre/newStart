# language: fr
Fonctionnalité: Sharing OK

Contexte: Je souhaite me loguer et partager un produit

@javascript @wip
Scénario: Je me logue et je partage un produit
Soit je suis sur "/"
Soit je me logue en tant que "albanthomas1@gmail.com"
Et je remplis "url" avec "http://us.levi.com/product/index.jsp?productId=21467686&"
Et j'attend "12" secondes
Et je devrais voir "Levi's Levis® Commuter™ 511™ Slim Fit Pants - Performance Hunter - Jeans"
Et je remplis "comment" avec "taille 38"
Et je presse "Enregistrer"
Et j'attend "3" secondes
Et je recharge la page
Et je devrais voir "Levi's Levis®"