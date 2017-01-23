<?php

   
   $dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = 'root';
   $dbname = 'techbluecollar';
   $idSite;
   $link  = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
$siteQuery = "SELECT idsites FROM sites WHERE domain = '" . $_SERVER['HTTP_HOST'] . "'";
$siteResult = mysqli_query($link, $siteQuery);

if (mysqli_num_rows($siteResult) > 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($siteResult)) {
        $idSite = $row['idsites'];
    }
}
   ?>
