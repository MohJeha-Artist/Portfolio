// Js/masonry-graphics.js
// High-Performance Instant Masonry Loader for Assets/Graphics/masonry/

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('dynamic-masonry-gallery');
    if (!galleryContainer) return;

    const isSubfolder = window.location.pathname.replace(/\\/g, '/').includes('/html/');
    const pathPrefix = isSubfolder ? '../' : '';
    const folderPath = `${pathPrefix}Assets/Graphics/masonry/`;

    const items = (typeof window.GRAPHICS_MASONRY !== 'undefined' && Array.isArray(window.GRAPHICS_MASONRY))
        ? window.GRAPHICS_MASONRY
        : [
            { file: "graphics_(Arz Con).webp", title: "Arz Consulting" },
            { file: "graphics_(Arz Cont).webp", title: "Arz Identity" },
            { file: "graphics (1).webp" }, { file: "graphics (2).webp" }, { file: "graphics (3).webp" },
            { file: "graphics (4).webp" }, { file: "graphics (5).webp" }, { file: "graphics (6).webp" },
            { file: "graphics (7).webp" }, { file: "graphics (8).webp" }, { file: "graphics (9).webp" },
            { file: "graphics (10).webp" }, { file: "graphics (11).webp" }, { file: "graphics (12).webp" },
            { file: "graphics (13).webp" }, { file: "graphics (14).webp" }, { file: "graphics (15).webp" },
            { file: "graphics (16).webp" }
        ];

    // Layout Arrays (Deterministic aspect ratio pattern)
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

    items.forEach((item, idx) => {
        const src = `${folderPath}${encodeURI(item.file)}`;
        const aspectClass = aspectRatios[idx % aspectRatios.length];
        const customTitle = item.title || null;

        // Create parent anchor container for GLightbox
        const card = document.createElement('a');
        card.href = src;
        card.className = `art-card glightbox ${aspectClass}`;
        card.setAttribute('data-gallery', 'portfolio-gallery');

        // Build image
        const img = document.createElement('img');
        img.src = src;
        img.alt = customTitle || `Graphic Design Mockup ${idx + 1}`;
        img.loading = "lazy";
        img.onerror = () => card.remove();
        card.appendChild(img);

        // Only create and attach hover overlay if a custom title is present
        if (customTitle) {
            const overlay = document.createElement('div');
            overlay.className = 'art-overlay';

            const meta = document.createElement('div');
            meta.className = 'art-meta';

            const titleEl = document.createElement('h3');
            titleEl.innerText = customTitle;

            const descEl = document.createElement('p');
            descEl.innerText = "Brand Identity";

            meta.appendChild(titleEl);
            meta.appendChild(descEl);
            overlay.appendChild(meta);
            card.appendChild(overlay);
        }

        galleryContainer.appendChild(card);
    });

    // Initialize GLightbox cleanly
    if (typeof GLightbox !== 'undefined') {
        GLightbox({
            selector: '.art-card.glightbox',
            touchNavigation: true,
            loop: true
        });
    }
});