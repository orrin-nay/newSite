<?php

require_once '../phpIncludes/dbIncludes/conectvars.php';
require_once '../phpIncludes/dbIncludes/domainid.php';
$contactCardSQL = "SELECT title, name, phonenumber, email, description FROM contactcards WHERE idsite = ?";
$contactCardStmt = $link->prepare($contactCardSQL);
$contactCardStmt->bind_param("s", $idSite);
$contactCardStmt->execute();
$contactCardStmt->bind_result($title,$name,$phoneNumber,$email,$description);
$contacts = array();
$param = array();
while ($contactCardStmt->fetch()) {
    $param = array();
    array_push($param, $name, $title, $phoneNumber, $email,$description);
    array_push($contacts, $param);
}
$contactCardStmt->close();
    echo json_encode($contacts);
