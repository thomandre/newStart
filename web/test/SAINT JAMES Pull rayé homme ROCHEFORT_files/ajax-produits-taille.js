function ajax_taille(coloris, taille, langue)
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
		if(xhr.readyState == 4 && xhr.status == 200){
			 write_ajax_taille(xhr);
		} else {
			$("#txtdispo").html("<img src='ICEO_scripts/loadmin.gif' alt='' border='0'/>");
		}
	}
    //on appelle le fichier reponse.txt
    xhr.open("GET", "ICEO_scripts/ajax-produits-taille.php?idc="+coloris+"&idt="+taille+"&idl="+langue, true);
    xhr.send(null);
}

function write_ajax_taille(xhr)
{
	var docXML= xhr.responseXML;
	$('#wdispo').val(""+docXML.getElementsByTagName("dispo").item(0).firstChild.data+"");
	$('#txtdispo').html(""+docXML.getElementsByTagName("dispo").item(0).firstChild.data+"");
}
