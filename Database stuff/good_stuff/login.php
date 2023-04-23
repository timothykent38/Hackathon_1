<?php
$is_invalid= false;
if($_SERVER["REQUEST_METHOD"] === "POST"){
    $mysqli = require __DIR__ . "/database.php";

    $sql = sprintf("SELECT * FROM accounts
            WHERE username ='%s'",
            $mysqli->real_escape_string($_POST["username"]));

            $result = $mysqli->query($sql);
            $user = $result->fetch_assoc();

           if($user){
                if( ($_POST["password"] === $user["password"])){
                    session_start();

                    session_regenerate_id();

                    $_SESSION["username"] = $user["username"];

                    header("Location: index.php");
                    exit;
                }
           }

           $is_invalid = true;
}
?>


<html>
    <head>
        <title> Login </title>
        <link rel="stylesheet" href = "/css/style.css">
    </head>
    
    <body>
        


        <div class="box"> 
            Login
            <?php if($is_invalid): ?>
                <em>Invalid login </em>
                <?php endif; ?>
            <form method="post">
                <label for="username">username</label>
                <input type="text" name = "username" id="username"
                    value="<?= htmlspecialchars($_POST["username"] ?? "") ?>">

                <div>
                    <label for="password">Password</label>
                    <input type = "password" id="password"  name = "password">
                </div>

                <button>
                    Login
                </button>

            </form>
        </div>
    </body>
</html> 