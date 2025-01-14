let isScrolling; // Flag to prevent multiple triggers

const navbar = document.querySelector('.navbar');

// When scrolling, move navbar down (translateY(100px))
window.addEventListener('scroll', function() {
    // Clear the previous timeout (in case scroll happens again before timeout ends)
    clearTimeout(isScrolling);

    // Apply translateY(100px) while scrolling
    navbar.style.transform = 'translateX(-50%) translateY(100px)';

    // Set the timeout to reset the navbar position after scrolling stops
    isScrolling = setTimeout(function() {
        navbar.style.transform = 'translateX(-50%) translateY(1px)'; // Reset to original position
    }, 1000); // Delay of 500ms after scrolling stops before resetting
});

