<?php
	
	$baseUrl = "https://hub.skimlinks.com/proxy/merchants_v2/json/API_KEY?full_data_only=&filter_by=non_pp&country=all&category=all&search=&include_count=true";

	$merchants = array();

	$t0 = microtime(true);


	$f = fopen('skimMerchantsDomains.csv', 'w');
	$pas = 200;
	$total_pages = 18000;
	$limit = $total_pages / $pas;
	for($i=0; $i<=$limit; $i+=1) {
		$url = $baseUrl.'&offset='.($i*$pas).'&limit='.($pas);
		$content = scrappe($url);
		$contentArray = json_decode($content);
		
		//var_dump($contentArray);
		foreach($contentArray->merchants as $merchant) {
			foreach($merchant->domains as $domain) {
				$domain = array('id' => null, 'siteName' => $merchant->name, 'domain' => $domain, 'traker' => 'skimlink', 'priority' => '2');
				fputcsv($f, $domain, ';', '"');
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
 		curl_setopt($ch, CURLOPT_COOKIE, 'skimsession=a%3A5%3A%7Bs%3A10%3A%22session_id%22%3Bs%3A32%3A%2259fcdf996496c23d368b77e1079aacaa%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A14%3A%2288.179.202.217%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A81%3A%22Mozilla%2F5.0+%28Macintosh%3B+Intel+Mac+OS+X+10.9%3B+rv%3A27.0%29+Gecko%2F20100101+Firefox%2F27.0%22%3Bs%3A13%3A%22last_activity%22%3Bi%3A1393259085%3Bs%3A9%3A%22user_data%22%3Bs%3A0%3A%22%22%3B%7D3f1669a579b57a6a871c9ae6121f8445; __utma=204263247.116657158.1393259090.1393259090.1393259090.1; __utmc=204263247; __utmz=204263247.1393259090.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); hubsession=a%3A19%3A%7Bs%3A10%3A%22session_id%22%3Bs%3A32%3A%224a5d2c32d5913684777f34ed027fe911%22%3Bs%3A10%3A%22ip_address%22%3Bs%3A14%3A%2288.179.202.217%22%3Bs%3A10%3A%22user_agent%22%3Bs%3A81%3A%22Mozilla%2F5.0+%28Macintosh%3B+Intel+Mac+OS+X+10.9%3B+rv%3A27.0%29+Gecko%2F20100101+Firefox%2F27.0%22%3Bs%3A13%3A%22last_activity%22%3Bi%3A1393259090%3Bs%3A9%3A%22user_data%22%3Bs%3A0%3A%22%22%3Bs%3A11%3A%22remember_me%22%3Bi%3A1%3Bs%3A10%3A%22public_key%22%3Bs%3A32%3A%22472b44027f2473990bf8d1aedff771f4%22%3Bs%3A11%3A%22private_key%22%3Bs%3A32%3A%226c977a419c8da3e323d74576680f1535%22%3Bs%3A3%3A%22uid%22%3Bi%3A43505%3Bs%3A12%3A%22publisher_id%22%3Bi%3A43505%3Bs%3A8%3A%22username%22%3Bs%3A19%3A%22thomandre%40gmail.com%22%3Bs%3A7%3A%22contact%22%3Bs%3A15%3A%22Thomas+Andr%C3%83%C2%A9%22%3Bs%3A5%3A%22email%22%3Bs%3A19%3A%22thomandre%40gmail.com%22%3Bs%3A8%3A%22currency%22%3Bs%3A3%3A%22EUR%22%3Bs%3A4%3A%22tier%22%3Bs%3A1%3A%225%22%3Bs%3A4%3A%22role%22%3Bs%3A13%3A%22administrator%22%3Bs%3A13%3A%22language_pref%22%3Bs%3A2%3A%22en%22%3Bs%3A9%3A%22interface%22%3Bi%3A2%3Bs%3A14%3A%22ocelot_opt_out%22%3Bi%3A0%3B%7D37a18d6bfc8124e30624bd9d1a71cba2; kvcd=1393259313325; km_ni=thomandre%40gmail.com; km_uq=; km_lv=x');

		// 

		$content = curl_exec($ch);
		//$infos = curl_getinfo($ch);
		//var_dump($infos);
		return $content;
	}

?>