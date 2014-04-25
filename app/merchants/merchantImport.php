<?php 

	$f2 = fopen('app/merchants.sql', 'w');
	$f  = fopen('app/skimMerchantsDomains.csv', 'r');

	while (($line = fgetcsv($f, 0, ';', '"')) !== FALSE) {
		$sql = "\nINSERT IGNORE INTO `newStart`.`MerchantDomain` (`id`, `name`, `domain`, `tracker`, `priority`) VALUES (NULL, '".addslashes($line[1])."', '".$line[2]."', '".$line[3]."', '2');";
		//var_dump($sql);
		fwrite($f2, $sql);
	}
	

	fwrite($f2, " \n\n");
	$f  = fopen('app/vigMerchantsDomains.csv', 'r');

	while (($line = fgetcsv($f, 0, ';', '"')) !== FALSE) {
		$sql = "\nINSERT IGNORE INTO `newStart`.`MerchantDomain` (`id`, `name`, `domain`, `tracker`, `priority`) VALUES (NULL, '".addslashes($line[1])."', '".$line[2]."', '".$line[3]."', '1');";
		//var_dump($sql);
		fwrite($f2, $sql);
	}


	fclose($f2);
	fclose($f);
?>