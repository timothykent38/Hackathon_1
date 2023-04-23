<?php
session_start();
if( isset($_SESSION["username"])){
    $mysqli = require __DIR__ . "/database.php";

    $sql = "SELECT username FROM accounts WHERE username = ?";
   
   

    $stmt = $mysqli->stmt_init();

if(! $stmt->prepare($sql)){
die("SQL error");
}


$stmt->bind_param("s",
$_SESSION["username"]); 

    if($stmt->execute()){
        $stmt->bind_result($user);
        $stmt->fetch();
    }

   // $user = $result->//fetch_assoc();

}
#print_r($_SESSION);
?>

<html>
    <head>
        <title> Login </title>
        <link rel="stylesheet" href = "/css/style.css">
    </head>
    
    <body>
        


        <div class="box"> 
            Login
            <?php if(isset($user)): ?>
                <p> Hello <?= htmlspecialchars($user) ?> </p>
                <p><a href = "logout.php">Log out</a></p>

            <?php else: ?>
                    <p><a href = "login.php"> Log in </a> or <a href ="signup.html">sign up</a></p>
            <?php endif; ?>
        </div>
    </body>
</html>