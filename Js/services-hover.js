document.addEventListener('DOMContentLoaded', () => {
    const servicesCards = document.querySelectorAll('.services-card');
    let observer;

    function initServicesObserver() {
        // Disconnect existing observer if it exists
        if (observer) {
            observer.disconnect();
            // Remove active class from all cards when switching to desktop
            if (window.innerWidth > 768) {
                servicesCards.forEach(card => card.classList.remove('active'));
            }
        }

        if (window.innerWidth <= 768) {
            const observerOptions = {
                root: null,
                rootMargin: '-30% 0px -30% 0px', // Triggers when the card is in the center 40% of the screen
                threshold: 0
            };

            observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    } else {
                        entry.target.classList.remove('active');
                    }
                });
            }, observerOptions);

            servicesCards.forEach(card => observer.observe(card));
        }
    }

    // Initialize on load
    initServicesObserver();

    // Re-check on resize
    window.addEventListener('resize', () => {
        initServicesObserver();
    });
});
