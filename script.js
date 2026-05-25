document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".slider-section");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const playBtn = document.getElementById("play-btn");
    const playIcon = document.getElementById("play-icon");
    const vinylImg = document.querySelector(".spinning-vinyl");

    let currentIdx = 0;

    // Changes visible view based on targeting index
    function showSection(index) {
        sections.forEach((section, idx) => {
            if (idx === index) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });

        // Toggle media play/pause aesthetics depending if we are home or browsing guides
        if (index === 0) {
            playBtn.classList.add("active-player");
            playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`; // Pause icon style
        } else {
            playBtn.classList.remove("active-player");
            playIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`; // Play icon style
        }
    }

    // Fast-Forward Click Event
    nextBtn.addEventListener("click", () => {
        currentIdx = (currentIdx + 1) % sections.length;
        showSection(currentIdx);
    });

    // Rewind Click Event
    prevBtn.addEventListener("click", () => {
        currentIdx = (currentIdx - 1 + sections.length) % sections.length;
        showSection(currentIdx);
    });

    // Center Play/Pause Reset Event (Brings user straight back to home panel)
    playBtn.addEventListener("click", () => {
        if (currentIdx !== 0) {
            currentIdx = 0;
            showSection(currentIdx);
        } else {
            // If already on Home, it toggles vinyl rotation animation pause state as an Easter egg
            if (vinylImg.style.animationPlayState === "paused") {
                vinylImg.style.animationPlayState = "running";
                playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
            } else {
                vinylImg.style.animationPlayState = "paused";
                playIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
            }
        }
    });
});