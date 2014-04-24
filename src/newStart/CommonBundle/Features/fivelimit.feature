# language: fr
Fonctionnalité: Five Limit OK

Contexte: Je souhaite me loguer et partager un produit

@javascript @fiveLimit
Scénario: Je me logue et je partage un produit
Soit je suis sur "/"
Soit je me logue en tant que "albanthomas1@gmail.com"
Alors je remplis "url" avec "http://us.levi.com/product/index.jsp?productId=11619497&locale=en_US&clickid=prod_cs"
Et je presse "Go !"
Et j'attend que "#completeContainer" soit visible 

Alors je devrais voir "511™ Slim Fit Hybrid Trousers"
Et je presse "Enregistrer"
Et j'attend que "#completeContainer" ne soit plus visible 
Et je devrais voir "Levi's"

Alors je remplis "url" avec "http://www.amazon.fr/gp/product/B00DOQ3DGU/ref=amb_link_177745767_2/278-7656610-6981916"
Et je presse "Go !"
Et j'attend que "#completeContainer" soit visible 
Alors je devrais voir "Tablette Kindle Fire HDX 8,9"
Et je presse "Enregistrer"
Et j'attend que "#completeContainer" ne soit plus visible 
Et je devrais voir "Tablette Kindle Fire HDX"

Alors je remplis "url" avec "www.balibaris.com/soie/608-marine-double-ligne-rouge.html"
Et je presse "Go !"
Et j'attend que "#completeContainer" soit visible 
Alors je devrais voir "Cravates - Soie - Cravate Marine // Double Ligne Rouge - Balibaris"
Et je presse "Enregistrer"
Et j'attend que "#completeContainer" ne soit plus visible 
Et je devrais voir "Cravates - Soie - Cravate Marine"

Alors je remplis "url" avec "http://www.boutique-saint-james.fr/pull-raye-homme-rochefort-p654-z6680.html"
Et je presse "Go !"
Et j'attend que "#completeContainer" soit visible 
Alors je devrais voir "SAINT JAMES Pull rayé homme ROCHEFORT"
Et je presse "Enregistrer"
Et j'attend que "#completeContainer" ne soit plus visible 
Et je devrais voir "SAINT JAMES Pull rayé"

Alors je remplis "url" avec "http://www.apple.com/fr/ipad-mini/?cid=wwa-fr-kwg-ipad-com"
Et je presse "Go !"
Et j'attend que "#completeContainer" soit visible 
Alors je devrais voir "Apple - iPad mini avec écran Retina"
Et je presse "Enregistrer"
Et j'attend que "#completeContainer" ne soit plus visible 
Et je devrais voir "Apple - iPad mini"

Alors je remplis "url" avec "http://www.rueducommerce.fr/Ordinateurs/Ordinateur-Portable/Ordinateur-Portable-Grand-Public/APPLE/4900138-MacBook-Air-13-Intel-Core-i5-Dual-Core-Haswell-1-3-GHz-SSD-128-Go-RAM-4-Go-Intel-HD-Graphics-5000-OS-X-Mountain-Lion.htm#moid:MO-19E29M22457656"
Et je presse "Go !"
Et j'attend que "#completeContainer" soit visible 
Alors je devrais voir "Macbook Air"
Et je presse "Enregistrer"
Et j'attend que "#completeContainer" ne soit plus visible 
Et j'attend "1" secondes

Alors je devrais voir "Vous avez déjà 5 cadeaux, pour ajouter Apple - MacBook Air 13''"
Et je devrais voir "vous devez supprimer un cadeau."

Et je recharge la page
Alors je ne devrais pas voir "MacBook Air 13"

Et j'attend "0.5" secondes
Et je devrais voir "Levi's" 
Et je suis "supprimer"
Et je valide la fenetre de confirmation
Et j'attend "1" secondes

Et je ne devrais pas voir "511™ Slim Fit Hybrid Trousers" 

Alors je remplis "url" avec "http://www.rueducommerce.fr/Ordinateurs/Ordinateur-Portable/Ordinateur-Portable-Grand-Public/APPLE/4900138-MacBook-Air-13-Intel-Core-i5-Dual-Core-Haswell-1-3-GHz-SSD-128-Go-RAM-4-Go-Intel-HD-Graphics-5000-OS-X-Mountain-Lion.htm#moid:MO-19E29M22457656"
Et je presse "Go !"
Et j'attend que "#completeContainer" soit visible 
Alors je devrais voir "MacBook Air 13"
Et je presse "Enregistrer"
Et j'attend que "#completeContainer" ne soit plus visible 
Alors je devrais voir "MacBook Air 13"

Alors je ne devrais pas voir "Vous avez déjà 5 cadeaux, pour ajouter Apple - MacBook Air 13''"
Et je ne devrais pas voir "vous devez supprimer un cadeau."

Et je recharge la page
Et j'attend "0.5" secondes
Alors je devrais voir "MacBook Air 13"

Et je me delogue
Soit je vais sur "https://www.facebook.com"
Et je clique sur "#userNavigationLabel"
Et j'attend "0.5" secondes
Et je presse "Déconnexion"