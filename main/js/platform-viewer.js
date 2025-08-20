document.addEventListener('DOMContentLoaded', () => {
    const gridImages = document.querySelectorAll('.grid-image');
    const viewerContainer = document.querySelector('.viewer-container');

    // Early return if required elements are not found
    if (!viewerContainer || !gridImages.length) {
        console.error('Platform viewer: Required elements not found');
        return;
    }

    let isTransitioning = false;
    const transitionDuration = 600; // Match CSS transition duration

    // Create and initialize viewer images if they don't exist
    if (!document.querySelector('.viewer-image')) {
        const activeImage = document.createElement('img');
        const inactiveImage = document.createElement('img');
        
        activeImage.className = 'viewer-image active';
        inactiveImage.className = 'viewer-image inactive';
        
        viewerContainer.appendChild(activeImage);
        viewerContainer.appendChild(inactiveImage);
    }

    let currentImage = document.querySelector('.viewer-image.active');
    let nextImage = document.querySelector('.viewer-image.inactive');

    // Set default and initial images
    const defaultImage = 'Assets/Viewer/default.webp';
    
    // Set initial viewer images
    currentImage.setAttribute('src', defaultImage);
    nextImage.setAttribute('src', defaultImage);
    
    // Update with first grid image if available
    if (gridImages[0]) {
        const initialSrc = gridImages[0].getAttribute('data-viewer-src') || defaultImage;
        currentImage.setAttribute('src', initialSrc);
    }

    // Debounce function to prevent rapid transitions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    const handleImageTransition = debounce((image) => {
        if (isTransitioning) return;
        
        const viewerSrc = image.getAttribute('data-viewer-src') || defaultImage;
        if (currentImage.getAttribute('src') === viewerSrc) return;
        
        isTransitioning = true;
        
        // Prepare next image
        nextImage.setAttribute('src', viewerSrc);
        
        // Trigger transition
        currentImage.classList.remove('active');
        currentImage.classList.add('inactive');
        nextImage.classList.remove('inactive');
        nextImage.classList.add('active');
        
        // Reset transition state after animation completes
        setTimeout(() => {
            const temp = currentImage;
            currentImage = nextImage;
            nextImage = temp;
            isTransitioning = false;
        }, transitionDuration);
    }, 50);

    gridImages.forEach(image => {
        image.addEventListener('mouseenter', () => handleImageTransition(image));
    });
});