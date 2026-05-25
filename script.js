document.addEventListener("DOMContentLoaded", () => {
    const mainVinyl = document.getElementById("main-vinyl");
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            mainVinyl.style.animationDuration = "3s"; 
        });
        
        card.addEventListener("mouseleave", () => {
            mainVinyl.style.animationDuration = "10s"; 
        });
    });
});