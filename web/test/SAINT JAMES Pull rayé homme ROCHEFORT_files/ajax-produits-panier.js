function ajax_panier_qte(idpdt, coloris, wtaille, quantite)
{
    var xhr=null;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //on définit l'appel de la fonction au retour serveur
	xhr.onreadystatechange = function(){
		// On ne fait quelque chose que si on a tout reçu et que le serveur est ok
		if(xhr.readyState == 4 || xhr.status == "complete"){

		     if (xhr.status == 200) {
		     	var qte = xhr.responseText;
		        $("#countpanier").html("("+qte+")");
		     } else {
		        alert ("Erreur : " + xhr.status);
		    }

		}
	}
    //on appelle le fichier reponse.txt
    timer=setTimeout(function () { xhr_object.abort();},10000);
    xhr.open("GET", "ICEO_scripts/ajax-produits-panier-qte.php?id="+idpdt+"&idc="+coloris+"&idt="+wtaille+"&qte="+quantite, true);
	xhr.send(null);
}

function ajax_panier(idpdt, coloris, wtaille, quantite)
{
    var xhr=null;

    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    //on définit l'appel de la fonction au retour serveur
	xhr.onreadystatechange = function(){
		// On ne fait quelque chose que si on a tout reçu et que le serveur est ok
		if(xhr.readyState == 4 || xhr.status == "complete"){

		     if (xhr.status == 200) {
		     	var donne = xhr.responseText;
		        $("#popup-panier").html(""+donne+"").delay(4000).hide('blind', {}, 'fast' );
				ajax_panier_qte(idpdt, coloris, wtaille, quantite);
		     } else {
		        alert ("Erreur : " + xhr.status);
		    }

		} else {
			$("#popup-panier").html("<img src='ICEO_scripts/load.gif' alt='' border='0' align='center' style='margin : 20px;' width='50' />");
		}
	}
    //on appelle le fichier reponse.txt
    timer=setTimeout(function () { xhr_object.abort();},10000);
    xhr.open("GET", "ICEO_scripts/ajax-produits-panier-html.php?id="+idpdt+"&idc="+coloris+"&idt="+wtaille+"&qte="+quantite, true);
	xhr.send(null);
}
