<?php

if(empty($_POST["username"])){
    die("Name is required");
}

if($_POST["password"] !== $_POST["password_conformation"]){
    die("Passwords must match");
}

$mysqli = require __DIR__ . "/database.php";

$sql = "INSERT INTO accounts (username, password)
            VALUES (?, ?)";

$stmt = $mysqli->stmt_init();

if(! $stmt->prepare($sql)){
    die("SQL error");
}


$stmt->bind_param("ss",
$_POST["username"],
$_POST["password"]);

if($stmt->execute()){
    header("Location: signup-success.html");
    exit;
} else {
    if($mysqli-> errno === 1062){
        die("Name already taken");


    }

    die($mysqli ->error." ". $mysqli->errono);
}



