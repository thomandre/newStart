  /*** Mastertag Adverline ***/
  
  adv_mt_referrer = document.referrer ; 

  advWriteCodePartnertag = function(adv_document){
    if (adv_document==null || (typeof(adv_document.write)=='undefined')) adv_document=window.parent.document;
    var document=adv_document;
    document.write('<div style="border-style: none;width: 0px; height: 0px; display: none;">') ; 
    /* Tags partenaires */

  


  /**** Transmission des variables à l'iframe ****/
  var adv_ifr_varsstring="";
  if(adv_ifr_varsstring!="") adv_ifr_varsstring+="&"; if (typeof adv_cst_v_tag_100957_brand != "undefined") adv_ifr_varsstring+="a0="+encodeURI(adv_cst_v_tag_100957_brand);if(adv_ifr_varsstring!="") adv_ifr_varsstring+="&"; if (typeof adv_cst_v_tag_100957_product != "undefined") adv_ifr_varsstring+="a1="+encodeURI(adv_cst_v_tag_100957_product);
  document.write("<ifr"+"ame  src=\"http" + ((document.location.protocol == 'https:') ? 's' : '') + "://ads2.adverline.com/retargetproduit/partnertag/iframe.html?s=100957&a=tag\#"+adv_ifr_varsstring+"\" frameborder=\"0\" border=\"0\" cellspacing=\"0\" style=\"border-style: none;width: 0px; height: 0px; display: none;\"></ifr"+"ame>") ;
  
    /* Fin des tags partenaires */
    document.write('</div>') ; 
  }
  
  advInsertPartnertag = function(){
    /* Construction de l'iframe */
    var ifr=null;
    ifr=document.createElement('iframe');
    ifr.style.frameborder=0; 
    ifr.style.border=0; 
    ifr.style.cellSpacing=0; 
    ifr.style.display = 'none';
    ifr.setAttribute('id', 'adv_partnertag_async'+ (new Date()).getTime());
    ifr.src = 'about:blank';

    var adv_body = document.getElementsByTagName('body')[0];
    
    if (adv_body==null || (typeof(adv_body)=='undefined')) {
      advWriteCodePartnertag();
      return true;
    } else {
      adv_body.appendChild(ifr);
    }
    
    var docifr = null;
    try{
      if(ifr.contentDocument)    docifr = ifr.contentDocument; // Firefox, Opera        
      else if(ifr.contentWindow) docifr = ifr.contentWindow.document; // IE
      else if(ifr.document)      docifr = ifr.document;
    } catch (e){}
    
    /* Transmission des variables */
    docifr.open();
    docifr.write('<scr'+'ipt>');
    try {
      for (nv in window) 
        if(nv.substr(0,9)=='adv_cst_v') {
          if(/^(d*\.?\d+)$/.test(window[nv]))
            docifr.writeln(nv+' = '+String(decodeURI(window[nv]).replace(/'/gi,"\'")) + '; ');
          else 
            docifr.writeln(nv+' = \''+String(decodeURI(window[nv]).replace(/'/gi,"\'")) + '\'; ');
      }
    } catch (e) {}    
    docifr.write('</scr'+'ipt>');
    
    /* Envoi des tags partenaires */
    advWriteCodePartnertag(docifr);
    docifr.close();
  }
  
  if (typeof adv_script!='undefined'){ //on est pas dans l'ancien plan de tagage
    try{
      advInsertPartnertag();
    } catch (e) {
      advWriteCodePartnertag(document);
    }
  } else {
    advWriteCodePartnertag(document);
  }    

