// JavaScript Document
var nom=new Array();
var valeur=new Array();
param = window.location.search.slice(1,window.location.search.length);
first = param.split("&");
var value = '';
for(i=0;i<first.length;i++)
{
	second = first[i].split("=");
	if(second[0] == 'LGWCODE')
	{
		var value = second[1];
	}
}
	
string = '';
string += '<img src="http://tracking.lengow.com/tos.php?LGWCODE='+value+'" alt="" border="0" />';
document.write(string);