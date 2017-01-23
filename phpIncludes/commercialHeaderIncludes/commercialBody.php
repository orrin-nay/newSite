        <?php
        $mainSiteId = 1;
        $useragent = $_SERVER['HTTP_USER_AGENT'];
        $headerContactQuery = "SELECT email, phonenumber FROM contactcards WHERE idsite = $idSite and main = 1";
        
$headerContactResults = mysqli_query($link, $headerContactQuery);
$email = '';
$phone = '';
                if (mysqli_num_rows($headerContactResults) > 0) {
                    // output data of each row
                    while ($row = mysqli_fetch_assoc($headerContactResults)) {
                        $email = $row['email'];
                        $phone = $row['phonenumber'];
                    }
                }
        if ($isMobile) {
            ?>
            <div id="headerContainer">
                <div id="headerHolder">
                <ul id="header">
                    <li id="headerContactInfo"><span id="headerPhoneNumber"><?php echo ($phone); ?></span><br>
                        <span id="headerEmail"><?php echo ($email); ?></span></li>
                    <li id="headerImageSquare"><img src="images/imgres.jpg"></li>
                    

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
                    <li id="headerImageSquare"><img src="images/imgres.jpg"></li>
                </ul>
            </div>
            <?php
        }
        ?>