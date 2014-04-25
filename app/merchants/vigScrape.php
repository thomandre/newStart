<?php

	include("simple_html_dom.php");
	
	$baseUrl = "https://www.viglink.com/merchants/search?utf8=✓&merchant_search%5Bkeyword%5D=&merchant_search%5Bcategory_id%5D=&merchant_search%5Binsider%5D=0&merchant_search%5Bunrestricted%5D=0";

	$merchants = array();

	$t0 = microtime(true);


	// total pages = 3455
//	$domains = array();
	$f = fopen('vigMerchantsDomains.csv', 'w');
	for($i=1; $i<=3455; $i++) {
		$url = $baseUrl.'&page='.$i;
		$content = scrappe($url);
		$html = str_get_html($content);

		foreach($html->find('#results a') as $site) {
			$title = $site->find('h5', 0);
			if(is_object($title)) {
				$title = (string) $title->innertext;

				usleep(300);
				$detailContent = scrappe('https://www.viglink.com'.$site->href);
				$detailHtml = str_get_html($detailContent);
				
				foreach($detailHtml->find('div.columnar a') as $k => $domain) {
					$domain = array('id' => null, 'siteName' => $title, 'domain' => $domain->innertext, 'traker' => 'viglink', 'priority' => '1');
					fputcsv($f, $domain, ';', '"');
				}
			}
		}
		
		usleep(1000);

		if($i % 80 == 0) {
			echo "\n";
		}
		echo '.';

	}

	$t1 = microtime(true);

	echo "\nScrappe took: ".round($t1-$t0, 2)."s.";

	fclose($f);
	
	echo "\nCSV generated. \n";


	function scrappe($url) {
		$ch = curl_init($url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
		curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 6.1; fr; rv:1.9.2.13) Gecko/20101203 Firefox/3.6.13'); 
		curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
		curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
		$content = curl_exec($ch);
		$infos = curl_getinfo($ch);
		return $content;
	}

?>