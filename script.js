document.addEventListener("DOMContentLoaded", () => {
    const mainVinyl = document.getElementById("main-vinyl");
    const productCards = document.querySelectorAll(".product-card");
    const playBtn = document.getElementById("play-btn");

    // Interactive feature: Vinyl speeds up when user hovers over a product
    productCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            mainVinyl.style.animationDuration = "3s"; // Spins faster
        });
        
        card.addEventListener("mouseleave", () => {
            mainVinyl.style.animationDuration = "12s"; // Returns to normal speed
        });
    });

    // --- NEW: Scroll Morphed Navigation Icons --- //
    window.addEventListener('scroll', () => {
        // Threshold: Once user scrolls past 200px from the top
        if (window.scrollY > 200) {
            playBtn.classList.add('is-scrolled'); // Triggers CSS morph to Pause
        } else {
            playBtn.classList.remove('is-scrolled'); // Returns to Play arrow
        }
    });
});