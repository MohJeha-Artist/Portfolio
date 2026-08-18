/**
 * section Banner Component Loader
 * Uses: <div id="section-banner" 
 *          data-section-image="../Assets/path/to/image.jpg"
 *          data-section-title="Page Title"
 *          data-section-subtitle="Page Subtitle"></div>
 */
class sectionBanner {
    static init() {
        const sectionContainer = document.getElementById('section-banner');
        if (!sectionContainer) return;

        // Render template directly (immune to path/depth issues)
        sectionContainer.innerHTML = `
            <section class="sct-banner">
                <div class="sct-highlight" id="sct-highlight"></div>
                <div class="sct-head" id="sct-head"></div>
                <div class="sct-frame">
                    <div class="frame-depth"><img src="" class="frame-img" id="sect-image"></div>
                </div>
            </section>
        `;

        // Set dynamic content
        this.setDynamicContent(sectionContainer);
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