document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.infinite-slider-wrapper');

    sliders.forEach(slider => {
        const tracks = slider.querySelectorAll('.infinite-slider-track');
        if (!tracks.length) return;

        tracks.forEach(track => {
            // Get original items
            const items = Array.from(track.children);
            
            // Clone items and append them to the track to create a seamless loop
            items.forEach(item => {
                const clone = item.cloneNode(true);
                // Remove ID if exists to prevent duplicates in DOM
                if (clone.hasAttribute('id')) {
                    clone.removeAttribute('id');
                }
                track.appendChild(clone);
            });

            // Add the animation class
            track.classList.add('animate');
        });
    });
});
