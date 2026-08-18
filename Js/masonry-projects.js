// Js/masonry-projects.js
// Dynamic Digital Art Portfolio Gallery Loader for Assets/3DProjects/masonry/

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('dynamic-masonry-gallery');
    if (!galleryContainer) return;

    const folderPath = "Assets/3DProjects/masonry/";
    const baseName = "artwork";
    const maxImagesToCheck = 50; // Scan up to 50 artworks automatically

    // Deterministic aspect ratios for masonry tiling
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

    // Initialize GLightbox for the Digital Art gallery
    const lightbox = (typeof GLightbox !== 'undefined') ? GLightbox({
        selector: '.art-card.glightbox',
        touchNavigation: true,
        loop: true
    }) : null;

    // Scan & load artwork files
    for (let i = 1; i <= maxImagesToCheck; i++) {
        const filePath = `${folderPath}${baseName} (${i}).webp`;

        const card = document.createElement('a');
        card.href = filePath;
        card.className = `art-card glightbox ${aspectRatios[(i - 1) % aspectRatios.length]}`;
        card.setAttribute('data-gallery', 'digital-art-portfolio');
        card.setAttribute('data-title', `Digital Artwork #${i}`);
        card.style.display = 'none';

        const img = document.createElement('img');
        img.src = filePath;
        img.alt = `Digital Artwork ${i}`;
        img.loading = 'lazy';

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

        img.onload = function () {
            card.style.display = 'block';
            if (lightbox) {
                lightbox.reload();
            }
        };

        img.onerror = function () {
            card.remove();
        };
    }
});