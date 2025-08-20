/**
 * Hero Banner Component Loader
 * Usage: <div id="hero-banner" 
 *             data-hero-image="/path/to/image.jpg"
 *             data-hero-title="Page Title"
 *             data-hero-subtitle="Page Subtitle"></div>
 */

class HeroBanner {
    static async init() {
        const heroContainer = document.getElementById('hero-banner');
        if (!heroContainer) return;

        try {
            // Load the hero banner template
            const response = await fetch('../html/hero-banner.html');
            if (!response.ok) throw new Error('Hero banner template not found');
            
            // Inject the template
            heroContainer.innerHTML = await response.text();
            
            // Set dynamic content
            this.setDynamicContent(heroContainer);
            
        } catch (error) {
            console.error('Hero Banner Error:', error);
            heroContainer.innerHTML = '<div class="hero-error">Hero banner failed to load</div>';
        }
    }

    static setDynamicContent(container) {
        // Get data attributes with fallbacks
        const imageUrl = container.dataset.heroImage || '../Assets/default-hero.jpg';
        const title = container.dataset.heroTitle || 'Default Title';
        const subtitle = container.dataset.heroSubtitle || 'Default Subtitle';
        
        // Update elements
        const heroImg = container.querySelector('#hero-img');
        if (heroImg) {
            heroImg.src = imageUrl;
            heroImg.alt = title; // Proper alt text from title
        }
        
        const titleElement = container.querySelector('.Hero-name');
        if (titleElement) titleElement.textContent = title;
        
        const subtitleElement = container.querySelector('.Hero-head');
        if (subtitleElement) subtitleElement.textContent = subtitle;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => HeroBanner.init());