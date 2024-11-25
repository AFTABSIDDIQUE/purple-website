/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Timer
5. Init Favorite
6. Init Fix Product Border
7. Init Isotope Filtering
8. Init Slider


******************************/

jQuery(document).ready(function($)
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var topNav = $('.top_nav')
	var mainSlider = $('.main_slider');
	var hamburger = $('.hamburger_container');
	var menu = $('.hamburger_menu');
	var menuActive = false;
	var hamburgerClose = $('.hamburger_close');
	var fsOverlay = $('.fs_menu_overlay');

	setHeader();

	$(window).on('resize', function()
	{
		initFixProductBorder();
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initTimer();
	initFavorite();
	initFixProductBorder();
	initIsotopeFiltering();
	initSlider();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'top':"0"});
			}
			else
			{
				header.css({'top':"0"});
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'top':"-50px"});
			}
			else
			{
				header.css({'top':"0"});
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if(hamburger.length)
		{
			hamburger.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
			});
		}

		if(fsOverlay.length)
		{
			fsOverlay.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if(hamburgerClose.length)
		{
			hamburgerClose.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if($('.menu_item').length)
		{
			var items = document.getElementsByClassName('menu_item');
			var i;

			for(i = 0; i < items.length; i++)
			{
				if(items[i].classList.contains("has-children"))
				{
					items[i].onclick = function()
					{
						this.classList.toggle("active");
						var panel = this.children[1];
					    if(panel.style.maxHeight)
					    {
					    	panel.style.maxHeight = null;
					    }
					    else
					    {
					    	panel.style.maxHeight = panel.scrollHeight + "px";
					    }
					}
				}	
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		// menu.css('right', "0");
		fsOverlay.css('pointer-events', "auto");
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		fsOverlay.css('pointer-events', "none");
		menuActive = false;
	}

	/* 

	4. Init Timer

	*/

	function initTimer()
    {
    	if($('.timer').length)
    	{
    		// Uncomment line below and replace date
	    	// var target_date = new Date("Dec 7, 2017").getTime();

	    	// comment lines below
	    	var date = new Date();
	    	date.setDate(date.getDate() + 3);
	    	var target_date = date.getTime();
	    	//----------------------------------------
	 
			// variables for time units
			var days, hours, minutes, seconds;

			var d = $('#day');
			var h = $('#hour');
			var m = $('#minute');
			var s = $('#second');

			setInterval(function ()
			{
			    // find the amount of "seconds" between now and target
			    var current_date = new Date().getTime();
			    var seconds_left = (target_date - current_date) / 1000;
			 
			    // do some time calculations
			    days = parseInt(seconds_left / 86400);
			    seconds_left = seconds_left % 86400;
			     
			    hours = parseInt(seconds_left / 3600);
			    seconds_left = seconds_left % 3600;
			     
			    minutes = parseInt(seconds_left / 60);
			    seconds = parseInt(seconds_left % 60);

			    // display result
			    d.text(days);
			    h.text(hours);
			    m.text(minutes);
			    s.text(seconds); 
			 
			}, 1000);
    	}	
    }

    /* 

	5. Init Favorite

	*/

    function initFavorite()
    {
    	if($('.favorite').length)
    	{
    		var favs = $('.favorite');

    		favs.each(function()
    		{
    			var fav = $(this);
    			var active = false;
    			if(fav.hasClass('active'))
    			{
    				active = true;
    			}

    			fav.on('click', function()
    			{
    				if(active)
    				{
    					fav.removeClass('active');
    					active = false;
    				}
    				else
    				{
    					fav.addClass('active');
    					active = true;
    				}
    			});
    		});
    	}
    }

    /* 

	6. Init Fix Product Border

	*/

    function initFixProductBorder()
    {
    	if($('.product_filter').length)
    	{
			var products = $('.product_filter:visible');
    		var wdth = window.innerWidth;

    		// reset border
    		products.each(function()
    		{
    			$(this).css('border-right', 'solid 1px #e9e9e9');
    		});

    		// if window width is 991px or less

    		if(wdth < 480)
			{
				for(var i = 0; i < products.length; i++)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

    		else if(wdth < 576)
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 1; i < products.length; i+=2)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

    		else if(wdth < 768)
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 2; i < products.length; i+=3)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

    		else if(wdth < 992)
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 3; i < products.length; i+=4)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

			//if window width is larger than 991px
			else
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 4; i < products.length; i+=5)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}	
    	}
    }

    /* 

	7. Init Isotope Filtering

	*/

    function initIsotopeFiltering()
    {
    	if($('.grid_sorting_button').length)
    	{
    		$('.grid_sorting_button').click(function()
	    	{
	    		// putting border fix inside of setTimeout because of the transition duration
	    		setTimeout(function()
		        {
		        	initFixProductBorder();
		        },500);

		        $('.grid_sorting_button.active').removeClass('active');
		        $(this).addClass('active');
		 
		        var selector = $(this).attr('data-filter');
		        $('.product-grid').isotope({
		            filter: selector,
		            animationOptions: {
		                duration: 750,
		                easing: 'linear',
		                queue: false
		            }
		        });

		        
		         return false;
		    });
    	}
    }

    /* 

	8. Init Slider

	*/

    function initSlider()
    {
    	if($('.product_slider').length)
    	{
    		var slider1 = $('.product_slider');

    		slider1.owlCarousel({
    			loop:false,
    			dots:false,
    			nav:false,
    			responsive:
				{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					991:{items:4},
					1280:{items:5},
					1440:{items:5}
				}
    		});

    		if($('.product_slider_nav_left').length)
    		{
    			$('.product_slider_nav_left').on('click', function()
    			{
    				slider1.trigger('prev.owl.carousel');
    			});
    		}

    		if($('.product_slider_nav_right').length)
    		{
    			$('.product_slider_nav_right').on('click', function()
    			{
    				slider1.trigger('next.owl.carousel');
    			});
    		}
    	}
    }
});

$(document).ready(function() {
    var currentIndex = 0;
    var slides = $('.main_slider');
    var totalSlides = slides.length;
    
    function goToSlide(index) {
        slides.hide();  // Hide all slides
        slides.eq(index).fadeIn();  // Show the current slide
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;  // Go to next slide, loop back to first after last slide
        goToSlide(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;  // Go to previous slide, loop back to last slide
        goToSlide(currentIndex);
    }
    
    // Show the first slide initially
    goToSlide(currentIndex);

    // Set interval to automatically change the slide every 5 seconds
    setInterval(nextSlide, 5000); 

    // Optionally, you could add controls (e.g., previous/next buttons)
    $('.next_button').click(function() {
        nextSlide();
    });

    $('.prev_button').click(function() {
        prevSlide();
    });
});


let cartItems = [];

// Function to add items to the cart
function addToCart(itemName, price) {
    // Add item to cart array
    cartItems.push({ name: itemName, price: price });

    // Save to localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Update the checkout items count
    const checkoutItems = document.getElementById("checkout_items");
    checkoutItems.textContent = cartItems.length;

    // Optionally, open the cart panel after adding an item
    toggleCart();

    // Update cart items in the slide-out panel
    updateCartPanel();
}

// Function to remove an item from the cart
function removeItemFromCart(itemName) {
    // Filter out the item that was removed
    cartItems = cartItems.filter(item => item.name !== itemName);

    // Update localStorage after removal
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Update the cart panel after removal
    updateCartPanel();

    // Update the checkout items count
    const checkoutItems = document.getElementById("checkout_items");
    checkoutItems.textContent = cartItems.length;
}

// Function to toggle the visibility of the cart panel
function toggleCart() {
    const cartPanel = document.getElementById("cart-panel");
    cartPanel.classList.toggle("active");
}

// Function to update the cart panel with added items
function updateCartPanel() {
    const cartItemsContainer = document.getElementById("cart-items-container");
    cartItemsContainer.innerHTML = ''; // Clear previous cart items

    // Add each item to the cart panel
    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item"); // Add a class for styling

        // HTML structure with product image, details, price, and a remove button
        cartItem.innerHTML = `
            <div class="cart-item-content">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" 
                     onerror="this.onerror=null; this.src='images/fallback.png';">
                <div class="cart-item-details">
                    <h4 class="product-name">${item.name}</h4>
                    <p class="product-description">${item.description}</p>
                    <p class="product-price">$${item.price.toFixed(2)}</p>
                    <button class="remove-item" onclick="removeItemFromCart('${item.name}')">Remove</button>
                    <button class="book-now" onclick="bookNow('${item.name}')">Book Now</button>
                </div>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });
}

// Function to load cart items on the booking page (book.php)
function loadCartItems() {
    // Get cart items from localStorage
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartItemsContainer = document.getElementById("cart-items-container");

    // Display each item in the cart
    savedCartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        // Check if the item has an image, if not use a fallback
        let imageSrc = item.image || 'images/fallback.png';

        cartItem.innerHTML = `
            <div class="cart-item-content">
                <img src="${imageSrc}" alt="${item.name}" class="cart-item-image" 
                     onerror="this.onerror=null; this.src='images/product_1.png';">
                <p class="product-name">${item.name}</p>
                <p class="product-price">$${item.price.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.appendChild(cartItem);
    });
}

function bookNow(itemName) {
    // Store the item name or any necessary data in localStorage (optional, as you've already stored cartItems)
    localStorage.setItem("selectedItem", itemName);

    // Redirect to book.php
    window.location.href = "book.php"; // This will open the book.php page
}

$("#deal1").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
	autoplay:true,
    responsive: {
        0: { items: 1 },      // 1 item on small screens
        480: { items: 2 },    // 2 items on mid-sized screens
        768: { items: 3 },    // 3 items on larger screens
        1024: { items: 4 }    // Adjust items to control width on bigger screens
    }
});




// Select all div elements with IDs starting with 'fsw_backContainer_'
const divs = document.querySelectorAll('div[id^="fsw_backContainer_"]');

// Loop through the selected divs and reset their styles
divs.forEach(function(div) {
    div.style.background = "none";
});
