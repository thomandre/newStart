urlArray = new Array(5);
urlArray[0] = "http://www.avis-verifies.com/avis-clients/widget/6/2/4/624f27ed-6b68-b784-8d40-43670c4d3ff8/624f27ed-6b68-b784-8d40-43670c4d3ff8_wfixe11_0.png?time=1392768098";
if("https:" == document.location.protocol) urlArray[0] = urlArray[0].replace("http","https");

urlArray[1] = "http://www.avis-verifies.com/avis-clients/widget/6/2/4/624f27ed-6b68-b784-8d40-43670c4d3ff8/624f27ed-6b68-b784-8d40-43670c4d3ff8_wfixe11_1.png?time=1392768098";
if("https:" == document.location.protocol) urlArray[1] = urlArray[1].replace("http","https");

urlArray[2] = "http://www.avis-verifies.com/avis-clients/widget/6/2/4/624f27ed-6b68-b784-8d40-43670c4d3ff8/624f27ed-6b68-b784-8d40-43670c4d3ff8_wfixe11_2.png?time=1392768098";
if("https:" == document.location.protocol) urlArray[2] = urlArray[2].replace("http","https");

urlArray[3] = "http://www.avis-verifies.com/avis-clients/widget/6/2/4/624f27ed-6b68-b784-8d40-43670c4d3ff8/624f27ed-6b68-b784-8d40-43670c4d3ff8_wfixe11_3.png?time=1392768098";
if("https:" == document.location.protocol) urlArray[3] = urlArray[3].replace("http","https");

urlArray[4] = "http://www.avis-verifies.com/avis-clients/widget/6/2/4/624f27ed-6b68-b784-8d40-43670c4d3ff8/624f27ed-6b68-b784-8d40-43670c4d3ff8_wfixe11_4.png?time=1392768098";
if("https:" == document.location.protocol) urlArray[4] = urlArray[4].replace("http","https");


randno = Math.floor ( Math.random() * urlArray.length ); 
document.write('<a id="aviscertifies_widget_624f27ed-6b68-b784-8d40-43670c4d3ff8" href="http://www.aviscertifies.com/index.php?action=act_count&client=www.monshowroom.com&widget=wfixe11" title="Voir les avis de nos clients" target="_blank"><img src="'+urlArray[randno]+'" border="0" alt="Voir les avis vérifiés de nos clients"></a>');
document.write('<style type=\"text/css\">#aviscertifies_widget_624f27ed-6b68-b784-8d40-43670c4d3ff8 {margin:0px;cursor:pointer;padding:0px;}</style>');
