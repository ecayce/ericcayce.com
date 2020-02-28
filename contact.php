<?php

if($_POST["submit"]) {
    $recipient="ericcayce@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
    <title>Contact</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=DM+Serif+Display:400,400i&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:600&display=swap" rel="stylesheet">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
</head>

<body>
  <div class="header">
    <div class="header-inner">
      <div class="title">
        <a href="https://www.ericcayce.com/">
          <h1>eric cayce</h1>
        </a>
      </div>
      <nav class="menu">
        <div class="menu_items">
          <li class="menu_button"><a href="about.html">About</a></li>
          <li class="menu_button"><a href="work.html">Work</a></li>
          <li class="menu_button"><a href="contact.php">Contact</a></li>
        </div>
      </nav>
      <div class="dropdown-menu">
        <button onclick="myFunction()" class="dropdown-button"></button>
          <div id="myDropdown" class="dropdown-content">
            <li class="menu_button"><a href="about.html">About</a></li>
            <li class="menu_button"><a href="work.html">Work</a></li>
            <li class="menu_button"><a href="contact.html">Contact</a></li>
          </div>
      </div>
    </div>
  </div>
  <div class="main">
    <div class="container">
      <div class="hello">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div class="contact-form">
        <form method="post" action="contact.php">
            <input name="sender" placeholder="Name">
            <br>
            <input name="senderEmail" placeholder="Email address">
            <br>
            <textarea rows="6" name="message" placeholder="Your message"></textarea>
            <br>
            <input type="submit" name="submit" style="height: 60px; background-color: #232323; color: #fffff0; border-radius: 3px;">
        </form>
        <?=$thankYou ?>
      </div>
    </div>
  </div>

<!-- SCROLL BUTTON
  <div class="scroll">
    <span class="scroll-button"></span>
  </div>
-->

</body>
<script src="script.js"></script>
</html>
