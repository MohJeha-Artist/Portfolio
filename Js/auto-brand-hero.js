// Js/auto-brand-hero.js

document.addEventListener('DOMContentLoaded', () => {
  // Brand Configuration Mapping: Each brand maps to its folder & logo asset
  // List of all brand folders inside Assets/Graphics/logos/
  // Brand Configuration Mapping: Each brand maps to its actual folder & file prefix
  const BRAND_KEYS = [
    { key: "Brand", folder: "Brand", prefix: "Brand", name: "Brand Portfolio" },
    { key: "DigitalWorld", folder: "DigitalWorld", prefix: "DigitalWorld", name: "Digital World" },
    { key: "Dabbous", folder: "Dabbous", prefix: "Dabbous", name: "Dabbous Brand" },
    { key: "Atelier", folder: "Atelier", prefix: "Atelier", name: "Atelier Studio" },
    { key: "Arz", folder: "Arz", prefix: "Arz", name: "Arz Cultural" },
    { key: "SIS", folder: "SIS", prefix: "SIS", name: "SIS Enterprise" },
    { key: "EarthLinks", folder: "EarthLinks", prefix: "EarthLinks", name: "EarthLinks Tech" },
    { key: "AbuSalah", folder: "AbuSalah", prefix: "Abusalah", name: "Abu Salah Monogram" },
    { key: "BirlesikZirve", folder: "BirlesikZirve", prefix: "BirlesikZirve", name: "Birleşik Zirve" },
    { key: "ibnbalad", folder: "ibnbalad", prefix: "ibnbalad", name: "Ibn Balad Cultural" },
    { key: "Lebaniz", folder: "Lebaniz", prefix: "Lebaniz", name: "Lebaniz Studio" },
    { key: "NanoStitch", folder: "NanoStitch", prefix: "NanoStitch", name: "NanoStitch" },
    { key: "Nova", folder: "Nova", prefix: "Nova", name: "Nova Media Studio" },
    { key: "Sirius", folder: "Sirius", prefix: "Sirius", name: "Sirius Emblem" },
    { key: "SummerLive", folder: "SummerLive", prefix: "Summer", name: "Summer Live" },
    { key: "Vistamar", folder: "Vistamar", prefix: "vistamar", name: "Vistamar Resort" }
  ];

  // Helper window function to dynamically register new brand folders on the fly
  window.registerBrandFolder = (folderName, displayName) => {
    if (!BRAND_KEYS.some(b => (b.folder || b.key).toLowerCase() === folderName.toLowerCase())) {
      BRAND_KEYS.push({ key: folderName, folder: folderName, prefix: folderName, name: displayName || folderName });
    }
  };

  const swiperWrapper = document.getElementById('auto-brand-swiper-wrapper');
  if (!swiperWrapper) return;

  // Global pool of fallback mockup images
  const GLOBAL_FALLBACKS = [
    "Assets/Graphics/logos/Brand/Brand (1).webp",
    "Assets/Graphics/logos/Brand/Brand (3).webp",
    "Assets/Graphics/logos/Brand/Brand (5).webp",
    "Assets/Graphics/logos/Brand/Brand (6).webp",
    "Assets/Graphics/logos/Brand/Brand (7).webp",
    "Assets/Graphics/logos/Brand/Brand (8).webp",
    "Assets/Graphics/logos/Brand/Brand (9).webp",
    "Assets/Graphics/logos/Arz/Arz (1).webp",
    "Assets/Graphics/logos/Atelier/Atelier_Stack.webp",
    "Assets/Graphics/logos/DigitalWorld/DigitalWorld_Stack.webp"
  ];

  // Render slides automatically per brand folder (Strict Folder Isolation)
  BRAND_KEYS.forEach((brand) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    // Grid container for surrounding tiles
    const grid = document.createElement('div');
    grid.className = 'surrounding-mockups-grid';

    const folderName = brand.folder || brand.key;
    const prefix = brand.prefix || brand.key;
    const folder = `Assets/Graphics/logos/${folderName}`;
    const logoSrc = `${folder}/${prefix}_logo.webp`;
    const fallbackLogoSrc = `Assets/Graphics/logos/${prefix}_logo.webp`;

    // Candidate paths within this brand's folder with case & format variations
    const candidatePaths = [
      `${folder}/${prefix}_logo.webp`,
      `${folder}/${prefix}_logo.png`,
      `${folder}/${prefix}_logo.jpg`,
      `${folder}/${folderName}_logo.webp`,
      `${folder}/${folderName}_logo.png`,
      `${folder}/${prefix}_Thumb.webp`,
      `${folder}/${prefix}_Thumb.png`,
      `${folder}/${prefix} (1).webp`,
      `${folder}/${prefix}_Stack.webp`,
      `${folder}/Birlesik Zirve_Thumb.webp`,
      `${folder}/invoice.webp`,
      `${folder}/invoice.png`
    ];

    for (let i = 1; i <= 15; i++) {
      candidatePaths.push(`${folder}/${prefix} (${i}).webp`);
      candidatePaths.push(`${folder}/${prefix}(${i}).webp`);
      candidatePaths.push(`${folder}/${prefix}_${i}.webp`);
      candidatePaths.push(`${folder}/${prefix} (${i}).png`);
      candidatePaths.push(`${folder}/${folderName} (${i}).webp`);
    }

    const validBrandImages = [];
    let loadedChecked = 0;

    const buildGrid = () => {
      if (validBrandImages.length === 0) {
        // Fallback to logo image if no mockup images exist yet in this folder
        validBrandImages.push(logoSrc);
      }

      // Create 8 tiles using ONLY this brand's images (repeating if fewer than 8)
      for (let i = 0; i < 8; i++) {
        const tile = document.createElement('div');
        tile.className = 'mockup-tile';
        const img = document.createElement('img');
        const src = validBrandImages[i % validBrandImages.length];
        img.src = src;
        img.alt = `${brand.name} Mockup`;
        tile.appendChild(img);
        grid.appendChild(tile);
      }
    };

    // Pre-filter to only load images that actually exist in this brand folder
    const uniquePaths = [...new Set(candidatePaths)];
    uniquePaths.forEach((src) => {
      const testImg = new Image();
      testImg.src = src;
      testImg.onload = () => {
        if (!validBrandImages.includes(src)) {
          validBrandImages.push(src);
        }
        loadedChecked++;
        if (loadedChecked === uniquePaths.length) buildGrid();
      };
      testImg.onerror = () => {
        loadedChecked++;
        if (loadedChecked === uniquePaths.length) buildGrid();
      };
    });

    // 2. Central Spotlight Radial Gradient Shield
    const shield = document.createElement('div');
    shield.className = 'brand-hero-center-shield';

    // 3. Centered Logo Box (Passes brand key parameter dynamically to brand-showcase.html)
    const logoCard = document.createElement('div');
    logoCard.className = 'brand-hero-centered-logo';
    logoCard.onclick = () => {
      if (typeof openOverlay === 'function') {
        openOverlay(`Logos/brand-showcase.html?brand=${encodeURIComponent(brand.key)}`);
      }
    };

    const logoImg = document.createElement('img');
    logoImg.src = logoSrc;
    logoImg.alt = `${brand.name} Logo`;

    // If logo not inside folder, fallback to alternative formats or root
    logoImg.onerror = () => {
      logoImg.onerror = () => {
        logoImg.onerror = null;
        logoImg.src = fallbackLogoSrc;
      };
      logoImg.src = `${folder}/${prefix}_logo.png`;
    };

    logoCard.appendChild(logoImg);

    // Assemble Slide
    slide.appendChild(grid);
    slide.appendChild(shield);
    slide.appendChild(logoCard);
    swiperWrapper.appendChild(slide);
  });


  // Initialize Swiper after dynamic markup insertion
  setTimeout(() => {
    new Swiper('.brand-swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      grabCursor: true,
      speed: 900,
      effect: 'slide',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }, 300);
});
