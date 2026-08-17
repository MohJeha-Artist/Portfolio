// Js/masonry-graphics.js

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('dynamic-masonry-gallery');
    if (!galleryContainer) return;

    const folderPath = "Assets/Graphics/masonry/";
    const maxImagesToCheck = 50;

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

    // Initialize GLightbox
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true
    });

    /**
     * Extracts a custom title from filename if present.
     * Examples:
     * - "graphics_(Arz Consulting).webp" -> "Arz Consulting"
     * - "graphics (Arz Consulting).webp" -> "Arz Consulting"
     * - "graphics (1).webp"             -> null (No text overlay)
     * - "graphics_(1).webp"            -> null (No text overlay)
     */
    function extractCustomTitle(filename) {
        // Strip path and extension
        const cleanName = filename.split('/').pop().replace(/\.[^/.]+$/, "");

        // 1. Check content inside parentheses: (Some Name)
        const parenMatch = cleanName.match(/\(([^)]+)\)/);
        if (parenMatch && parenMatch[1]) {
            const inside = parenMatch[1].trim();
            // If it's pure numbers, it's just an index -> return null
            if (!/^\d+$/.test(inside)) {
                return inside;
            }
        }

        // 2. Check content after prefix: graphics_SomeName or mockup_SomeName
        const withoutPrefix = cleanName.replace(/^(graphics|mockup)[_\s-]*/i, "").trim();
        if (withoutPrefix && !/^\d+$/.test(withoutPrefix) && !/^\(\d+\)$/.test(withoutPrefix)) {
            const result = withoutPrefix.replace(/^[(_\s-]+|[)_\s-]+$/g, "").trim();
            if (result && !/^\d+$/.test(result)) {
                return result;
            }
        }

        return null;
    }

    // Custom Named Files inside Assets/Graphics/masonry/
    const NAMED_FILES = [
        "graphics_(Arz Con).webp",
        "graphics_(Arz Cont).webp",
        "graphics_(Arz Consulting).webp",
        "graphics_(Atelier).webp",
        "graphics_(Digital World).webp",
        "graphics_(Dabbous).webp",
        "graphics_(EarthLinks).webp",
        "graphics_(AbuSalah).webp",
        "graphics_(BirlesikZirve).webp",
        "graphics_(Lebaniz).webp",
        "graphics_(NanoStitch).webp",
        "graphics_(Nova).webp",
        "graphics_(Sirius).webp",
        "graphics_(Summer).webp",
        "graphics_(Vistamar).webp"
    ];

    // Build candidate source list
    const candidateList = [];

    // 1. Add specific named files
    NAMED_FILES.forEach(filename => {
        candidateList.push(`${folderPath}${filename}`);
    });

    // 2. Add numbered formats
    for (let i = 1; i <= maxImagesToCheck; i++) {
        candidateList.push(`${folderPath}graphics (${i}).webp`);
        candidateList.push(`${folderPath}graphics_(${i}).webp`);
        candidateList.push(`${folderPath}graphics_${i}.webp`);
        candidateList.push(`${folderPath}graphics (${i}).png`);
        candidateList.push(`${folderPath}mockup (${i}).webp`);
    }


    // De-duplicate candidate sources
    const uniqueCandidates = [...new Set(candidateList)];
    let renderedCount = 0;

    uniqueCandidates.forEach(src => {
        const testImg = new Image();
        testImg.src = src;

        testImg.onload = function () {
            renderedCount++;
            const aspectClass = aspectRatios[(renderedCount - 1) % aspectRatios.length];
            const customTitle = extractCustomTitle(src);

            // 1. Create parent anchor container for GLightbox
            const card = document.createElement('a');
            card.href = src;
            card.className = `art-card glightbox ${aspectClass}`;
            card.setAttribute('data-gallery', 'portfolio-gallery');

            // 2. Build image
            const img = document.createElement('img');
            img.src = src;
            img.alt = customTitle || "Graphic Design Mockup";
            img.loading = "lazy";
            card.appendChild(img);

            // 3. Only create and attach hover overlay if a custom name was found
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

            if (typeof lightbox !== 'undefined') {
                lightbox.reload();
            }
        };
    });
});