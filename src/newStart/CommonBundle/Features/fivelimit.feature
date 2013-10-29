# language: fr
Fonctionnalité: Sharing OK

Contexte: Je souhaite me loguer et partager un produit

@javascript @wip @fiveLimit
Scénario: Je me logue et je partage un produit
Soit je suis sur "/"
Soit je me logue en tant que "albanthomas1@gmail.com"

Alors je remplis "url" avec "http://us.levi.com/product/index.jsp?productId=21467686&"
Et j'attend "12" secondes
Alors je devrais voir "Levi's Levis® Commuter™ 511™ Slim Fit Pants - Performance Hunter - Jeans"
Et je presse "Enregistrer"
Et j'attend "3" secondes
Et je devrais voir "Levi's Levis®"

Alors je remplis "url" avec "http://www.amazon.fr/gp/product/B00DOQ3DGU/ref=amb_link_177745767_2/278-7656610-6981916"
Et j'attend "30" secondes
Alors je devrais voir "Tablette Kindle Fire HDX 8,9\" - Meilleure tablette pour le divertissement"
Et je presse "Enregistrer"
Et j'attend "3" secondes
Et je devrais voir "Tablette Kindle Fire HDX"

Alors je remplis "url" avec "http://www.balibaris.com/soie-et-laine/908-clan-vert-blanc.html"
Et j'attend "12" secondes
Alors je devrais voir "Cravates - Soie et laine - Cravate Clan // vert blanc - Balibaris"
Et je presse "Enregistrer"
Et j'attend "3" secondes
Et je devrais voir "Cravates - Soie et laine"

Alors je remplis "url" avec "http://www.boutique-saint-james.fr/pull-raye-homme-rochefort-p654-z6680.html"
Et j'attend "12" secondes
Alors je devrais voir "SAINT JAMES Pull rayé homme ROCHEFORT"
Et je presse "Enregistrer"
Et j'attend "3" secondes
Et je devrais voir "SAINT JAMES Pull rayé"

Alors je remplis "url" avec "http://www.apple.com/fr/ipad-mini/?cid=wwa-fr-kwg-ipad-com"
Et j'attend "12" secondes
Alors je devrais voir "Apple - iPad mini avec écran Retina"
Et je presse "Enregistrer"
Et j'attend "3" secondes
Et je devrais voir "Apple - iPad mini"

Alors je remplis "url" avec "http://www.edel-optics.fr/CLASSIC-3-NE2-EJ-de-Yves-Saint-Laurent,2,1,33,131632,VTFZ6ABZXB13C,,.html"
Et j'attend "12" secondes
Alors je devrais voir "Yves Saint Laurent CLASSIC 3 (NE2/EJ)"
Et je presse "Enregistrer"
Et j'attend "3" secondes

Alors je devrais voir "Vous avez déjà 5 cadeaux, pour ajouter Yves Saint Laurent CLASSIC 3 (NE2/EJ), vous devez supprimer un cadeau."

Et je recharge la page
Alors je ne devrais pas voir "Yves Saint Laurent"


Et je me delogue