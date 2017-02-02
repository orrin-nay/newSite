<?php
$siteSQL = "SELECT idsites FROM sites WHERE domain = ?";
$siteStmt = $link->prepare($siteSQL);
$siteStmt->bind_param("s", $domain);
$domain = filter_input(INPUT_SERVER, 'HTTP_HOST');
$siteStmt->execute();
$siteStmt->bind_result($idSite);
$siteStmt->fetch();
if(!empty($siteStmt->error) || empty($idSite)){
    header( 'Location: http://localhost' ) ;
}
$siteStmt->close();