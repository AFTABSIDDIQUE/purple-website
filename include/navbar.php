<?php
// Start the session to access user/admin login status
session_start();
// Database connection
$conn = new mysqli('localhost', 'root', 'Pass@123', 'login_register');
?>

<header class="header trans_300">

		<!-- Top Navigation -->

		<div class="top_nav">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="top_nav_left">free shipping on all orders</div>
					</div>
					<div class="col-md-6 text-right">
						<div class="top_nav_right">
							<ul class="top_nav_menu">

								<!-- Currency / Language / My Account -->

								<li class="currency">
									<a href="#">
										usd
										<i class="fa fa-angle-down"></i>
									</a>
									<ul class="currency_selection">
										<li><a href="#">cad</a></li>
										<li><a href="#">aud</a></li>
										<li><a href="#">eur</a></li>
										<li><a href="#">gbp</a></li>
									</ul>
								</li>
								<li class="language">
									<a href="#">
										English
										<i class="fa fa-angle-down"></i>
									</a>
									<ul class="language_selection">
										<li><a href="#">French</a></li>
										<li><a href="#">Italian</a></li>
										<li><a href="#">German</a></li>
										<li><a href="#">Spanish</a></li>
									</ul>
								</li>
																
								<li class="account">
    								<a href="#">
									<?php echo isset($_SESSION['name']) ? htmlspecialchars($_SESSION['name']) : 'Guest'; ?>
									Account 
										
        								<i class="fa fa-angle-down"></i>
    								</a>

    								<ul class="account_selection">
        								<?php if (isset($_SESSION["user"])): ?>
            								<!-- If user is logged in -->
            								<li><a href="logout.php"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</a></li>
        								<?php else: ?>
           								 <!-- If no one is logged in -->
           								 <li><a href="login.php"><i class="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
           								 <!-- Optionally you can add a Register link -->
           								 <!-- <li><a href="register.php"><i class="fa fa-user-plus" aria-hidden="true"></i>Register</a></li> -->
        								<?php endif; ?>
    								</ul>
								</li>

								
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Main Navigation -->

		<div class="main_nav_container">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 text-right">
						<div class="logo_container">
							<a href="#">Purple<span>Star</span></a>
						</div>
						<nav class="navbar">
							<ul class="navbar_menu">
								<li><a href="index.php">home</a></li>
								<li><a href="categories.php">shop</a></li>
								<li><a href="text-book.php">Books</a></li>
								<li class="menu_item">
									<a href="#">Pages</a>
									<ul class="dropdown">
										<li><a href="#">Page 1</a></li>
										<li><a href="#">Page 2</a></li>
										<li><a href="#">Page 3</a></li>
									</ul>
								</li>
								
								<!-- <li><a href="">blog</a></li> -->
								<li><a href="contact.php">contact</a></li>
							</ul>
							<ul class="navbar_user">
								<li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
								<li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li>
								<li class="checkout">
									<a href="#" onclick="toggleCart()">
										<i class="fa fa-shopping-cart" aria-hidden="true"></i>
										<span id="checkout_items" class="checkout_items">0</span>
									</a>
								</li>
								
								<!-- Cart Panel for Right Slide -->
								<div id="cart-panel" class="cart-panel">
									<h3>Your Cart</h3>
									<div id="cart-items-container"></div>
									<button class="close-cart" onclick="toggleCart()">Close</button>
								</div>
								
							</ul>
							<div class="hamburger_container">
								<i class="fa fa-bars" aria-hidden="true"></i>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>

	</header>
	<script>
        // Load navbar and footer
        function includeHTML() {
            const navbar = document.getElementById("navbar");
            const footer = document.getElementById("footer");

            fetch("navbar.html")
                .then(response => response.text())
                .then(data => navbar.innerHTML = data);

            fetch("footer.html")
                .then(response => response.text())
                .then(data => footer.innerHTML = data);
        }

        // Call the function on page load
        includeHTML();
    </script>