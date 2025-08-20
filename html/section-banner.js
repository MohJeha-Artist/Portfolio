/**
 * section Banner Component Loader
 * Uses: <div id="section-banner" 
 *          data-section-image="../Assets/path/to/image.jpg"
 *          data-section-title="Page Title"
 *          data-section-subtitle="Page Subtitle"></div>
 */
class sectionBanner {
    static async init() {
        const sectionContainer = document.getElementById('section-banner');
        if (!sectionContainer) return;

        try {
            // Load section banner template from specified path
            const response = await fetch('../html/section-banner.html');
            if (!response.ok) throw new Error('section banner template not found');
            
            // Inject the template
            sectionContainer.innerHTML = await response.text();
            
            // Set dynamic content
            this.setDynamicContent(sectionContainer);
            
        } catch (error) {
            console.error('section Banner Error:', error);
            sectionContainer.innerHTML = '<!-- section banner placeholder -->';
        }
    }

    static setDynamicContent(container) {
        // Get data attributes with defaults
        const imageUrl = container.dataset.sectionImage || '';
        const title = container.dataset.sectionTitle || '';
        const head = container.dataset.sectionHead || '';
        
        // Update elements
        const sectionImg = container.querySelector('#sect-image');
        if (sectionImg) {
            sectionImg.src = imageUrl;
            sectionImg.alt = title;
        }
        
        // Main title
        const titleElement = container.querySelector('#sct-head');
        if (titleElement) titleElement.textContent = title;
        
        // Head - Fixed targeting
        const headElement = container.querySelector('#sct-highlight');
        if (headElement) headElement.textContent = head;


    }
}

// Initialize when DOM is ready
if (document.readyState === 'complete') {
    sectionBanner.init();
} else {
    document.addEventListener('DOMContentLoaded', () => sectionBanner.init());
}





 // Simple JavaScript fallback Animation
 document.addEventListener('scroll', function() {
    const parallaxImages = document.querySelectorAll('.frame-depth');
    const scrollPosition = window.pageYOffset;
    
    parallaxImages.forEach((img) => {
        const imgPosition = img.getBoundingClientRect().top + scrollPosition;
        const distance = scrollPosition - imgPosition;
        const parallaxSpeed = 0.2;
        
        // Apply different translation for each image based on its position
        img.style.transform = `translateY(${(distance * parallaxSpeed)}px)`;
    });
});