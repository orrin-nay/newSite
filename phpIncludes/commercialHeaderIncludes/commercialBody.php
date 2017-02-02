        <?php
        $mainSiteId = 1;
        $useragent = $_SERVER['HTTP_USER_AGENT'];
        $headerContactSQL = "SELECT email, phonenumber FROM contactcards WHERE idsite = ? and main = 1";
$headerContactStmt = $link->prepare($headerContactSQL);
$headerContactStmt->bind_param("s", $idSite);
$headerContactStmt->execute();
$headerContactStmt->bind_result($email, $phone);
$headerContactStmt->fetch();
$headerContactStmt->close();
                
$getLogoSQL = "SELECT logo FROM sites WHERE idsites = ?";
$getLogoStmt = $link->prepare($getLogoSQL);
$getLogoStmt->bind_param("s", $idSite);
$getLogoStmt->execute();
$getLogoStmt->bind_result($logoPath);
$getLogoStmt->fetch();
$getLogoStmt->close();
$logoPath = "images/uploads/logos/".$logoPath;
        if ($isMobile) {
            ?>
            <div id="headerContainer">
                <div id="headerHolder">
                <ul id="header">
                    <li id="headerContactInfo"><span id="headerPhoneNumber"><?php echo ($phone); ?></span><br>
                        <span id="headerEmail"><?php echo ($email); ?></span></li>
                    <li id="headerImageSquare"><img src="<?php echo ($logoPath); ?>"></li>
                    

                </ul>
                </div>
                <ul id="navaOptions">
                    
                    <?php
                    if($mainSiteId == $idSite){?>
                    <li class="headerElement"><a href="login.php">Login/Sign Up</a></li>
                    <?php
                    }
                    ?>
                    <li class="headerElement">Bids</li>
                    <li class="headerElement"><a href="contact.php">Contact</a></li>
                    <li class="headerElement"><a href="showcase.php">Showcase</a></li>
                </ul>
            </div>
            <?php
        } else {
            ?>

            <div id="headerContainer">
                <ul id="header">
                    <?php
                    if($mainSiteId == $idSite){?>
                    <li class="headerElement"><a href="login.php">Login/<br>Sign Up</a></li>
                    <?php
                    }
                    ?>
                    <li class="headerElement"><a href="bids.php">Bids</a></li>
                    <li class="headerElement"><a href="contact.php">Contact</a></li>
                    <li class="headerElement"><a href="showcase.php">Showcase</a></li>
                    <li id="headerContactInfo"><span id="headerPhoneNumber"><?php echo ($phone); ?></span><br>
                        <span id="headerEmail"><?php echo ($email); ?></span></li>
                    <li id="headerImageSquare"><img src="<?php echo ($logoPath); ?>"></li>
                </ul>
            </div>
            <?php
        }
        ?>