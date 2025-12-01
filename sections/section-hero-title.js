/**
 * Hero Title Component
 * Uses: <div id="section-hero-title" 
 *          data-hero-image="../Assets/path/to/image.jpg"
 *          data-hero-title="Page Title"
 *          data-hero-head="Page Head"
 *          data-hero-subhead="Page Subhead"></div>
 */

async function loadHeroTitle() {
    const container = document.getElementById('section-hero-title');
    if (!container) return;

    try {
        const response = await fetch('sections/section-hero-title.html');
        if (!response.ok) throw new Error('Hero template not found');
        
        container.innerHTML = await response.text();
        
        // Set dynamic content
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
        
        const titleElement = container.querySelector('#Hero-name');
        if (titleElement) titleElement.textContent = title;
        
        const headElement = container.querySelector('#Hero-head');
        if (headElement) headElement.textContent = head;

        const subheadElement = container.querySelector('#Hero-subhead');
        if (subheadElement) subheadElement.textContent = subhead;
        
    } catch (error) {
        console.error('Hero Title Error:', error);
        container.innerHTML = '<!-- Hero Title placeholder -->';
    }
}

// Initialize when DOM is ready
document.readyState === 'complete' ? loadHeroTitle() : document.addEventListener('DOMContentLoaded', loadHeroTitle);