<?php
// Database connection
$conn = new mysqli('localhost', 'username', 'password', 'your_database_name');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Form data
$product_name = $_POST['product_name'];
$product_price = $_POST['product_price'];
$product_image = $_FILES['product_image']['name'];
$target_dir = "uploads/";
$target_file = $target_dir . basename($product_image);

// Upload image
if (move_uploaded_file($_FILES['product_image']['tmp_name'], $target_file)) {
    $sql = "INSERT INTO products (name, price, image) VALUES ('$product_name', '$product_price', '$product_image')";
    if ($conn->query($sql) === TRUE) {
        echo "Product added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Error uploading image.";
}

$conn->close();
header("Location: admin_dashboard.php");
exit;
?>
