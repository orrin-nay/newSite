<?php

$loginEmail = filter_input(INPUT_POST, 'email');
$loginPassword = filter_input(INPUT_POST, 'password');
if (isset($loginPassword) && isset($loginEmail)) {
    require_once '../phpIncludes/dbIncludes/conectvars.php';
    if (filter_var($loginEmail, FILTER_VALIDATE_EMAIL)) {
        if (preg_match('/\A(?=[\x20-\x7E]*?[A-Z])(?=[\x20-\x7E]*?[a-z])(?=[\x20-\x7E]*?[0-9])[\x20-\x7E]{6,}\z/', $loginPassword)) {

            $loginEmailCheckSQL = "SELECT email FROM users where email = ?";
            $loginEmailCheckStmt = $link->prepare($loginEmailCheckSQL);
            $loginEmailCheckStmt->bind_param("s", $loginEmail);
            $loginEmailCheckStmt->execute();
            $loginEmailCheckStmt->bind_result($email);
            $loginEmailCheckStmt->fetch();
            $loginEmailCheckStmt->close();
            if (!$email) {
                $addUserSQL = "INSERT INTO `techbluecollar`.`users` (`email`, `password`) VALUES (?, ?);";
                $addUserStmt = $link->prepare($addUserSQL);
                $addUserStmt->bind_param("ss", $email, $password);
                $email = $loginEmail;
                $password = password_hash($loginPassword, PASSWORD_DEFAULT);
                $addUserStmt->execute();
                $addUserStmt->close();
                echo '0';
                $getUserIdSQL = "SELECT idusers FROM users where email = ?";
                $getUserIdStmt = $link->prepare($getUserIdSQL);
                $getUserIdStmt->bind_param("s", $loginEmail);
                $getUserIdStmt->execute();
                $getUserIdStmt->bind_result($idUser);
                $getUserIdStmt->fetch();
                $getUserIdStmt->close();
                session_start();
                $_SESSION['idUser'] = $idUser;
            } else {
                echo '1';
            }
        }
    }
}