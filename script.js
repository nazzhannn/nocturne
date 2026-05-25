document.addEventListener("DOMContentLoaded", () => {
    const mainVinyl = document.getElementById("main-vinyl");
    const productCards = document.querySelectorAll(".product-card");

    // Interactive feature: Vinyl speeds up when user hovers over a product
    productCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            mainVinyl.style.animationDuration = "3s"; // Spins faster
        });
        
        card.addEventListener("mouseleave", () => {
            mainVinyl.style.animationDuration = "10s"; // Returns to normal speed
        });
    });
});