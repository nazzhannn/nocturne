document.addEventListener("DOMContentLoaded", () => {
    const mainVinyl = document.getElementById("main-vinyl");
    const productCards = document.querySelectorAll(".product-card");
    const navigationBar = document.getElementById("navigation-bar");

    // --- NEW: SMOOTH VINYL ACCELERATION --- //
    let currentSpeed = 1; // 1x normal speed
    let targetSpeed = 1;
    let isSpeedChanging = false;

    function smoothSpeedChange() {
        // Grab the CSS animation running on the vinyl
        const animations = mainVinyl.getAnimations();
        
        if (animations.length > 0) {
            // Eases the current speed towards the target speed smoothly
            currentSpeed += (targetSpeed - currentSpeed) * 0.05;
            
            // Apply the new speed
            animations[0].playbackRate = currentSpeed;

            // Keep looping until it perfectly reaches the target speed
            if (Math.abs(targetSpeed - currentSpeed) > 0.01) {
                requestAnimationFrame(smoothSpeedChange);
            } else {
                isSpeedChanging = false; // Stop the loop to save browser memory
            }
        }
    }

    productCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            targetSpeed = 4; // 4x faster (turns your 12s spin into a 3s spin)
            if (!isSpeedChanging) {
                isSpeedChanging = true;
                requestAnimationFrame(smoothSpeedChange);
            }
        });
        
        card.addEventListener("mouseleave", () => {
            targetSpeed = 1; // Drop back to 1x normal speed
            if (!isSpeedChanging) {
                isSpeedChanging = true;
                requestAnimationFrame(smoothSpeedChange);
            }
        });
    });

    // --- SYNCHRONIZED NAV BAR MORPHING --- //
    window.addEventListener('scroll', () => {
        // Trigger morph once screen is scrolled down 200 pixels
        if (window.scrollY > 200) {
            navigationBar.classList.add('is-scrolled');
        } else {
            navigationBar.classList.remove('is-scrolled');
        }
    });
});