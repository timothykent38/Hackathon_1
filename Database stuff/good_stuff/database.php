
<?php
$host = "localhost:3306";
$username = "root";
$password = "password";
$dbname = "timsfun";


$mysqli = new mysqli($host, $username, $password, $dbname);
if($mysqli -> connect_errno){
    die("Connection to database error");
}




return $mysqli;