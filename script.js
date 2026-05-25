// Smooth scrolling implementation for navigation links
document.querySelectorAll('nav ul a, header .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Only intercept internal section anchor links
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Read modern header height to dynamically avoid content overlap
                const navElement = document.querySelector('nav');
                const navHeight = navElement ? navElement.offsetHeight : 0;
                
                // Calculate position relative to viewport
                const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});
