/**
 * Loads footer dynamically with all interactive elements preserved
 * Usage: Add <div id="footer-container"></div> where footer should appear
 */
async function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) return;

    try {
        // Load footer HTML
        const response = await fetch('../html/footer.html');
        if (!response.ok) throw new Error('Footer not found');
        
        // Inject HTML
        footerContainer.innerHTML = await response.text();
        
        // Initialize footer functionality
        initFooter();
        
    } catch (error) {
        console.error('Footer loading error:', error);
        footerContainer.innerHTML = `
            <footer class="footer-error">
                <p>© ${new Date().getFullYear()} MohJeha-Artist</p>
            </footer>
        `;
    }
}

function initFooter() {
    // 1. Update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Enhance back-to-top button
    const backToTopBtn = document.querySelector('.arrowback');
    if (backToTopBtn) {
        // Replace onclick with proper event listener
        backToTopBtn.removeAttribute('onclick');
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Add ARIA label for accessibility
        backToTopBtn.setAttribute('aria-label', 'Back to top');
    }

    // 3. Add lazy loading to images
    document.querySelectorAll('.footer img').forEach(img => {
        img.loading = 'lazy';
    });
}

// Load footer when DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);