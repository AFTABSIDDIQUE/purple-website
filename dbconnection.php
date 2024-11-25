<?php

$hostName = "localhost";
$dbUser = "root";
$dbPassword = "Pass@123"; // Typically empty in XAMPP
$dbName = "login_register";

// Create the database connection
$conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName);

// Check if the connection is successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>
