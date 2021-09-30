<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email</title>

    <style>
        body {
            background-color: black;
            color: white;
            text-align: center;
            display: flex;
  align-items: center;
  justify-content: center;
  height: 100hv;
        }

        .vAlign {
            margin-top: 150px;
            text-align: center;
            width: 300px;

        }

        .btn {
            margin: 0 auto;
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  border-radius: 0.6em;
  color: #e74c3c;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.btn:hover, .btn:focus {
  color: #fff;
  outline: 0;
}

.third {
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
}
.third:hover {
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}

    </style>


</head>
<body>



<?php

if (!empty($_POST["mail"]) && !empty($_POST["subject"]) && !empty($_POST["message"])) {

    $zprava = $_POST['message'] . " ODESLÁNO Z EMAILU: " . $_POST['mail'];


    $mail = mail("gabrielkovacs@seznam.cz", $_POST['subject'],$zprava);

    if ($mail) {
        echo "<div class='vAlign'>Email has been successfully sent!";
        echo "<a href='index.html#contact'><button class='btn third'>Back</button></a></div>";
    }
    else {
        echo "<div class='vAlign'>email has not been sent, please try again later.";
        echo "<a href='index.html#contact'><button class='btn third'>Back</button></a></div>";
    }
}
else {
    echo "<div class='vAlign'>Email, Subject or Message must not be empty!";
    echo "<a href='index.html#contact'><button class='btn third'>Back</button></a></div>";
}



?>




</body>
</html>