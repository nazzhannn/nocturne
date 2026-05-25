document.addEventListener("DOMContentLoaded", () => {
    const mainVinyl = document.getElementById("main-vinyl");
    const productCards = document.querySelectorAll(".product-card");
    const navigationBar = document.getElementById("navigation-bar");

    // Interactive feature: Vinyl speeds up when user hovers over a product
    productCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            mainVinyl.style.animationDuration = "3s"; // Spins faster
        });
        
        card.addEventListener("mouseleave", () => {
            mainVinyl.style.animationDuration = "12s"; // Returns to normal speed
        });
    });

    // --- Synchronized Whole-Bar Playback Morphing --- //
    window.addEventListener('scroll', () => {
        // Trigger morph once screen is scrolled down 200 pixels
        if (window.scrollY > 200) {
            navigationBar.classList.add('is-scrolled');
        } else {
            navigationBar.classList.remove('is-scrolled');
        }
    });
});