<?php

$loginEmail = filter_input(INPUT_POST, 'email');
$loginPassword = filter_input(INPUT_POST, 'password');
if (isset($loginPassword) && isset($loginEmail)) {
    require_once '../phpIncludes/dbIncludes/conectvars.php';
    if (filter_var($loginEmail, FILTER_VALIDATE_EMAIL)) {
        if (preg_match('/\A(?=[\x20-\x7E]*?[A-Z])(?=[\x20-\x7E]*?[a-z])(?=[\x20-\x7E]*?[0-9])[\x20-\x7E]{6,}\z/', $loginPassword)) {

            $loginUserInfoSQL = "SELECT idusers, password FROM users where email = ?";
            $loginUserInfoStmt = $link->prepare($loginUserInfoSQL);
            $loginUserInfoStmt->bind_param("s", $loginEmail);
            $loginUserInfoStmt->execute();
            $loginUserInfoStmt->bind_result($idUser, $hasedPassword);
            $loginUserInfoStmt->fetch();
            $loginUserInfoStmt->close();
            if (password_verify($loginPassword, $hasedPassword)) {
                echo '0';
                session_start();
                $_SESSION['idUser'] = $idUser;
            } else {
                echo '1';
            }
        }
    }
}