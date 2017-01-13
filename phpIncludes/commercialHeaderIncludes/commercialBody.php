        <?php
        $useragent = $_SERVER['HTTP_USER_AGENT'];

        if ($isMobile) {
            ?>
            <div id="headerContainer">
                <div id="headerHolder">
                <ul id="header">
                    <li id="headerContactInfo"><span id="headerPhoneNumber">801-201-5555</span><br>
                        <span id="headerEmail">email.example@example.com</span></li>
                    <li id="headerImageSquare"><img src="images/imgres.jpg"></li>
                    

                </ul>
                </div>
                <ul id="navaOptions">
                    
                    <li class="headerElement">Bids</li>
                    <li class="headerElement"><a href="contact.php">Contact</a></li>
                    <li class="headerElement">Showcase</li>
                </ul>
            </div>
            <?php
        } else {
            ?>

            <div id="headerContainer">
                <ul id="header">
                    <li class="headerElement">Bids</li>
                    <li class="headerElement"><a href="contact.php">Contact</a></li>
                    <li class="headerElement">Showcase</li>
                    <li id="headerContactInfo"><span id="headerPhoneNumber">801-201-5555</span><br>
                        <span id="headerEmail">email.excample@example.com</span></li>
                    <li id="headerImageSquare"><img src="images/imgres.jpg"></li>
                </ul>
            </div>
            <?php
        }
        ?>