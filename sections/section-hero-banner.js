/**
 * Hero Banner Component Loader
 * Uses: <div id="hero-banner" 
 *          data-hero-image="../Assets/path/to/image.jpg"
 *          data-hero-title="Page Title"
 *          data-hero-subtitle="Page Subtitle"></div>
 */
class HeroBanner {
    static async init() {
        const heroContainer = document.getElementById('section-hero-banner');
        if (!heroContainer) return;

        try {
            // Load hero banner template from specified path
            const response = await fetch('sections/section-hero-banner.html');
            if (!response.ok) throw new Error('Hero banner template not found');
            
            // Inject the template
            heroContainer.innerHTML = await response.text();
            
            // Set dynamic content
            this.setDynamicContent(heroContainer);
            
        } catch (error) {
            console.error('Hero Banner Error:', error);
            heroContainer.innerHTML = '<!-- Hero banner placeholder -->';
        }
    }

    static setDynamicContent(container) {
        // Get data attributes with defaults
        const imageUrl = container.dataset.heroImage || '../Assets/default-hero.jpg';
        const title = container.dataset.heroTitle || '';
        const head = container.dataset.heroHead || '';
        const subhead = container.dataset.heroSubhead || '';
        
        // Update elements
        const heroImg = container.querySelector('#hero-img');
        if (heroImg) {
            heroImg.src = imageUrl;
            heroImg.alt = title;
        }
        
        // Main title
        const titleElement = container.querySelector('#Hero-name');
        if (titleElement) titleElement.textContent = title;
        
        // Head - Fixed targeting
        const headElement = container.querySelector('#Hero-head');
        if (headElement) headElement.textContent = head;

        // Subead - Fixed targeting
        const subheadElement = container.querySelector('#Hero-subhead');
        if (subheadElement) subheadElement.textContent = subhead;
    }
}

// Initialize when DOM is ready
if (document.readyState === 'complete') {
    HeroBanner.init();
} else {
    document.addEventListener('DOMContentLoaded', () => HeroBanner.init());
}