<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
if (!empty($_SESSION['idUser']) && !empty($_SESSION['idSite'])) {
     $contactName = filter_input(INPUT_POST, 'contactname');
    $title = filter_input(INPUT_POST, 'title');
    $phoneNumber = filter_input(INPUT_POST, 'phonenumber');
    $email = filter_input(INPUT_POST, 'email');
    $jobDescription = filter_input(INPUT_POST, 'jobdescription');
    if(empty($main)){
    $main = filter_input(INPUT_POST, 'main');
    }
    if (
            !empty($contactName) &&
            !empty($title) &&
            !empty($phoneNumber) &&
            !empty($email) &&
            filter_var($email, FILTER_VALIDATE_EMAIL) &&
            !empty($jobDescription) &&
            !empty($main)
    ) {
        require_once '../phpIncludes/dbIncludes/conectvars.php';
        $userIdSQL = "SELECT iduser FROM techbluecollar.sites WHERE `idsites` = ?";
            $userIdStmt = $link->prepare($userIdSQL);
            $userIdStmt->bind_param("s", $_SESSION['idSite']);
            $userIdStmt->execute();
            $userIdStmt->bind_result($idUser);
            $userIdStmt->fetch();
            $userIdStmt->close();
            if($idUser == $_SESSION['idUser']){
        $addContactSQL = "INSERT INTO `techbluecollar`.`contactcards` (`idsite`, `name`, `title`, `phonenumber`, `email`, `description`, `main`) VALUES (?, ?, ?, ?, ?, ?,?)";
                 $addContactStmt = $link->prepare($addContactSQL);
            $addContactStmt->bind_param("isssssi", $_SESSION['idSite'], $contactName, $title, $phoneNumber, $email, $jobDescription, $main);
            $addContactStmt->execute();
            $addContactStmt->close();
            echo '1';
            }
            $link->close();
    }
}