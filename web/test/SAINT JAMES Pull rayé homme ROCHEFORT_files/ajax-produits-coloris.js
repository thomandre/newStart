function ajax_vignette(coloris, taille, langue)
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
			 write_ajax_vignette(xhr);
		} else {
			$("#ajax-images").html("<img src='ICEO_scripts/wait.gif' alt='' border='0' style='margin-top : 170px;'/>");
			$("#txtdispo").html("<img src='ICEO_scripts/loadmin.gif' alt='' border='0'/>");
		}
	}
    //on appelle le fichier reponse.txt
    xhr.open("GET", "ICEO_scripts/ajax-produits-coloris.php?idc="+coloris+"&idt="+taille+"&idl="+langue, true);
    xhr.send(null);
}

function write_ajax_vignette(xhr)
{
	var docXML= xhr.responseXML;
	var items = docXML.getElementsByTagName("donnee")
	//on fait juste une boucle sur chaque element "donnee" trouvé
	for (i=0;i<items.length;i++)
	{
		$("#ajax-images").html("<span class='red'>"+items.item(i).firstChild.data+"</span>");
	}

	$('#wdispo').val(""+docXML.getElementsByTagName("dispo").item(0).firstChild.data+"");
	$('#txtdispo').html(""+docXML.getElementsByTagName("dispo").item(0).firstChild.data+"");

	//alert(""+docXML.getElementsByTagName("dispo").item(0).firstChild.data+"");

	//alert("ok");
	//var itemt = docXML.getElementsByTagName("tailles")
	//on fait juste une boucle sur chaque element "donnee" trouvé
	//for (i=0;i<itemt.length;i++)
	//{
	//	alert(""+itemt.item(i).firstChild.data+"");
	//}

	//alert(""+docXML.getElementsByTagName("tailles").item(0).firstChild.data+"");
	$('#tailles-ajax').html(""+docXML.getElementsByTagName("tailles").item(0).firstChild.data+"");

}
