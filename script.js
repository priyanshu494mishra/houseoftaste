document.addEventListener("DOMContentLoaded", function () {
    // Filter Menu Items
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to the clicked button
            this.classList.add("active");
            const category = this.getAttribute("data-category");

            // Filter menu items based on category
            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Mobile Menu Toggle
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".nav-menu");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        menuIcon.classList.toggle("open");
    });

    // Close Mobile Menu When a Link is Clicked
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuIcon.classList.remove("open");
        });
    });

    // Add to Cart Functionality
    let cart = [];
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const item = this.closest(".menu-card");
            const itemName = item.querySelector("h3").innerText;
            const itemPrice = item.querySelector(".price").innerText;
            cart.push({ name: itemName, price: itemPrice });
            alert(`${itemName} added to cart!`);
            console.log(cart); // For debugging
        });
    });

    // Social Button Hover Effects
    const socialButtons = document.querySelectorAll(".social-btn");
    socialButtons.forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.boxShadow = "0px 4px 15px rgba(255, 255, 255, 0.2)";
        });
        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });

    // Hide Loading Animation When Page is Fully Loaded
    window.addEventListener("load", function () {
        document.querySelector(".loading").style.display = "none";
    });
});