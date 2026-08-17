    // Configuration Settings
        const folderPath = "Assets/3DProjects/masonry/"; // Target folder changed to masonry
        const baseName = "artwork";
        const maxImagesToCheck = 23; // Increased to give the masonry grid a rich flow

        // Layout Arrays (Deterministic pattern that tiles perfectly on both mobile & desktop)
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
        const galleryContainer = document.getElementById('dynamic-masonry-gallery');

        // Initialize GLightbox
        const lightbox = GLightbox({
            selector: '.glightbox'
        });

        // Loop & look for images
        for (let i = 1; i <= maxImagesToCheck; i++) {
            // 1. Create the parent .art-card container as an anchor link for GLightbox
            const card = document.createElement('a');
            card.href = `${folderPath}${baseName} (${i}).webp`;
            card.className = `art-card glightbox ${aspectRatios[(i - 1) % aspectRatios.length]}`;
            card.setAttribute('data-gallery', 'portfolio-gallery');
            card.setAttribute('data-title', `${baseName} Render #${i}`);
            card.setAttribute('data-description', 'Automated System Scan');
            card.style.display = 'none'; // Hide element until file validation completes

            // 2. Build the inner Image structure
            const img = document.createElement('img');
            img.src = `${folderPath}${baseName} (${i}).webp`;
            img.alt = `${baseName} Structure ${i}`;

            // 3. Create the text overlay context
            const overlay = document.createElement('div');
            overlay.className = 'art-overlay';

            const meta = document.createElement('div');
            meta.className = 'art-meta';

            const title = document.createElement('h3');
            title.innerText = `${baseName} Render #${i}`;

            const desc = document.createElement('p');
            desc.innerText = "Automated System Scan";

            // Nest the elements together
            meta.appendChild(title);
            meta.appendChild(desc);
            overlay.appendChild(meta);
            card.appendChild(img);
            card.appendChild(overlay);
            galleryContainer.appendChild(card);

            // If file exists and loads cleanly, display it and reload GLightbox
            img.onload = function () {
                card.style.display = 'block';
                if (typeof lightbox !== 'undefined') {
                    lightbox.reload();
                }
            };

            // If item missing, remove completely from layout tree
            img.onerror = function () {
                card.remove();
            };
        }