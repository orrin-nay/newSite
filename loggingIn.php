<?php
if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    if(preg_match('/\A(?=[\x20-\x7E]*?[A-Z])(?=[\x20-\x7E]*?[a-z])(?=[\x20-\x7E]*?[0-9])[\x20-\x7E]{6,}\z/', $_POST['password'])){
    echo("valid password");
    }
}