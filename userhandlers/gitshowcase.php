<?php

require_once '../phpIncludes/dbIncludes/conectvars.php';
require_once '../phpIncludes/dbIncludes/domainid.php';
$showcaseSQL = "SELECT title, date, description, image FROM showcaseitems WHERE idsite = ?";
$showcaseStmt = $link->prepare($showcaseSQL);
$showcaseStmt->bind_param("s", $idSite);
$showcaseStmt->execute();
$showcaseStmt->bind_result($title,$date,$description,$image);
$showcaseItems = array();
$param = array();
while ($showcaseStmt->fetch()) {
    $param = array();
    array_push($param, $title, $date, $description,$image);
    array_push($showcaseItems, $param);
}
$showcaseStmt->close();
    echo json_encode($showcaseItems);
