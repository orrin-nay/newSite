<?php
if(!isset($link)){
   $dbhost = 'localhost';
   $dbuser = 'root';
   $dbpass = 'root';
   $dbname = 'techbluecollar';
   $link  = new mysqli($dbhost, $dbuser, $dbpass, $dbname);
}
   ?>
