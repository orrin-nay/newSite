<?php
    require_once '../phpIncludes/dbIncludes/conectvars.php';
    session_start();
header('Content-Type: application/json');
$siteInfoSQL = "SELECT idsites, logo, domain FROM techbluecollar.sites WHERE `iduser` = ?";
$siteInfoStmt = $link->prepare($siteInfoSQL);
$siteInfoStmt->bind_param("s", $_SESSION['idUser']);
$siteInfoStmt->execute();
$siteInfoStmt->bind_result($idSites, $logo, $domain);
$sites = array();
$param = array();
while ($siteInfoStmt->fetch()) {
    $param = array();
    array_push($param, $idSites, $logo, $domain);
    array_push($sites, $param);
}
    echo json_encode($sites);