<?php

session_start();
if (!empty($_SESSION['idUser'])) {

    $siteName = filter_input(INPUT_POST, 'sitename');
    $primaryColor = filter_input(INPUT_POST, 'primarycolor');
    $secondaryColor = filter_input(INPUT_POST, 'secondarycolor');
    $contactName = filter_input(INPUT_POST, 'contactname');
    $title = filter_input(INPUT_POST, 'title');
    $phoneNumber = filter_input(INPUT_POST, 'phonenumber');
    $email = filter_input(INPUT_POST, 'email');
    $posX = filter_input(INPUT_POST, 'x');
    $posY = filter_input(INPUT_POST, 'y');
    $jobDescription = filter_input(INPUT_POST, 'jobdescription');
    if (!empty($siteName) &&
            !empty($primaryColor) &&
            !empty($secondaryColor) &&
            getimagesize($_FILES["logo"]["tmp_name"]) &&
            !empty($contactName) &&
            !empty($title) &&
            !empty($phoneNumber) &&
            !empty($email) &&(
            isset($posX) ||
            isset($posY)) &&
            filter_var($email, FILTER_VALIDATE_EMAIL) &&
            !empty($jobDescription)
    ) {
        if($posX < 0){
            $posX = 0;
        }
        if($posY < 0){
            $posY = 0;
        }
        require_once '../phpIncludes/dbIncludes/conectvars.php';
        $registerSiteSQL = "INSERT INTO `techbluecollar`.`sites` (`domain`, `primarycolor`, `secondarycolor`, `logo`, `iduser`) VALUES (?, ?, ?, ?,?);";
        $registerSiteStmt = $link->prepare($registerSiteSQL);
        $temp = explode(".", $_FILES["logo"]["name"]);
        $newfilename = round(microtime(true)) . '.' . end($temp);
        $registerSiteStmt->bind_param("ssssi", $siteName, $primaryColor, $secondaryColor, $newfilename, $_SESSION['idUser']);
        $registerSiteStmt->execute();
        if (empty($registerSiteStmt->error)) {
            $registerSiteStmt->close();

            move_uploaded_file($_FILES["logo"]["tmp_name"], "../images/uploads/logos/" . $newfilename);
            $im = imagecreatefrompng("../images/uploads/logos/" . $newfilename);
            $size = min(imagesx($im), imagesy($im));
            $im2 = imagecrop($im, ['x' => imagesx($im)>imagesy($im)?$posX:0, 
                'y' => imagesx($im)>imagesy($im)?0:$posY, 'width' => $size, 'height' => $size]);
                imagepng($im2, "../images/uploads/logos/" . $newfilename);

            $siteIdSQL = "SELECT idsites FROM techbluecollar.sites WHERE `domain` = ?";
            $sidtIdStmt = $link->prepare($siteIdSQL);
            $sidtIdStmt->bind_param("s", $siteName);
            $sidtIdStmt->execute();
            $sidtIdStmt->bind_result($idSite);
            $sidtIdStmt->fetch();
            $sidtIdStmt->close();
            $_SESSION['idSite'] = $idSite;
            $main = 1;
            require_once 'addcontactandler.php';
        } else {
            $registerSiteStmt->close();
        }
    }
}