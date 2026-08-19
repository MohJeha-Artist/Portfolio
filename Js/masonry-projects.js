// Js/masonry-projects.js
// High-Performance Instant Masonry Loader for Assets/3DProjects/masonry/

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('dynamic-masonry-gallery');
    if (!galleryContainer) return;

    const isSubfolder = window.location.pathname.replace(/\\/g, '/').includes('/html/');
    const pathPrefix = isSubfolder ? '../' : '';
    const folderPath = `${pathPrefix}Assets/3DProjects/masonry/`;
    const baseName = "artwork";
    const totalArtworks = 23; // Exact count of current artworks in Assets/3DProjects/masonry/

    // Deterministic aspect ratios for masonry mosaic
    const aspectRatios = [
        'aspect-landscape', // 2x1
        'aspect-portrait',  // 1x2
        'aspect-standard',  // 1x1
        'aspect-square',    // 2x2
        'aspect-standard',  // 1x1
        'aspect-landscape', // 2x1
        'aspect-portrait',  // 1x2
        'aspect-square',    // 2x2
        'aspect-standard',  // 1x1
        'aspect-standard'   // 1x1
    ];

    // Build all cards synchronously for instant zero-delay rendering
    for (let i = 1; i <= totalArtworks; i++) {
        const filePath = `${folderPath}${baseName} (${i}).webp`;

        const card = document.createElement('a');
        card.href = filePath;
        card.className = `art-card glightbox ${aspectRatios[(i - 1) % aspectRatios.length]}`;
        card.setAttribute('data-gallery', 'digital-art-portfolio');
        card.setAttribute('data-title', `Digital Artwork #${i}`);

        const img = document.createElement('img');
        img.src = filePath;
        img.alt = `Digital Artwork ${i}`;
        img.loading = 'lazy';

        // Auto-remove if any specific file is deleted
        img.onerror = function () {
            card.remove();
        };

        const overlay = document.createElement('div');
        overlay.className = 'art-overlay';

        const meta = document.createElement('div');
        meta.className = 'art-meta';

        const title = document.createElement('h3');
        title.innerText = `Artwork #${i}`;

        const desc = document.createElement('p');
        desc.innerText = "3D & Digital Concept";

        meta.appendChild(title);
        meta.appendChild(desc);
        overlay.appendChild(meta);
        card.appendChild(img);
        card.appendChild(overlay);
        galleryContainer.appendChild(card);
    }

    // Initialize GLightbox immediately
    if (typeof GLightbox !== 'undefined') {
        GLightbox({
            selector: '.art-card.glightbox',
            touchNavigation: true,
            loop: true
        });
    }
});