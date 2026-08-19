// Js/auto-brand-hero.js
// High-Performance Brand Hero Swiper Carousel Loader

document.addEventListener('DOMContentLoaded', () => {
  const brandsData = window.BRANDS_DATA || window.GRAPHICS_DATA || {};
  const swiperWrapper = document.getElementById('auto-brand-swiper-wrapper');
  if (!swiperWrapper) return;

  const isSubfolder = window.location.pathname.replace(/\\/g, '/').includes('/html/');
  const pathPrefix = isSubfolder ? '../' : '';

  // Filter unique brands
  const uniqueBrands = Object.values(brandsData).filter((brand, idx, arr) => 
    arr.findIndex(b => b.key === brand.key) === idx
  );

  // Global pool of fallback mockup images
  const GLOBAL_FALLBACKS = [
    `${pathPrefix}Assets/Graphics/Logos/Brand/Brand (1).webp`,
    `${pathPrefix}Assets/Graphics/Logos/Brand/Brand (3).webp`,
    `${pathPrefix}Assets/Graphics/Logos/Brand/Brand (5).webp`,
    `${pathPrefix}Assets/Graphics/Logos/Brand/Brand (6).webp`,
    `${pathPrefix}Assets/Graphics/Logos/Brand/Brand (7).webp`,
    `${pathPrefix}Assets/Graphics/Logos/Brand/Brand (8).webp`,
    `${pathPrefix}Assets/Graphics/Logos/Brand/Brand (9).webp`,
    `${pathPrefix}Assets/Graphics/Logos/Arz/Arz (1).webp`,
    `${pathPrefix}Assets/Graphics/Logos/Atelier/Atelier_Stack.webp`,
    `${pathPrefix}Assets/Graphics/Logos/DigitalWorld/DigitalWorld_Stack.webp`
  ];

  swiperWrapper.innerHTML = '';

  // Render slides automatically per brand
  uniqueBrands.forEach((brand) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    // Grid container for surrounding tiles
    const grid = document.createElement('div');
    grid.className = 'surrounding-mockups-grid';

    const folder = `${pathPrefix}Assets/Graphics/Logos/${brand.folder}`;
    const logoFile = brand.logo || (brand.folder === 'SummerLive' ? 'Summer_logo.webp' : brand.folder === 'AbuSalah' ? 'Abusalah_logo.webp' : brand.folder === 'Vistamar' ? 'vistamar_logo.webp' : `${brand.folder}_logo.webp`);
    const logoSrc = `${folder}/${logoFile}`;

    // Collect all valid brand images dynamically
    const brandImages = [];
    const count = (typeof brand.rendersCount === 'number') ? brand.rendersCount : 0;

    for (let i = 1; i <= count; i++) {
      brandImages.push(`${folder}/${encodeURI(brand.folder)} (${i}).webp`);
    }
    brandImages.push(`${folder}/${encodeURI(brand.folder)}_Stack.webp`);
    brandImages.push(`${folder}/${encodeURI(brand.folder)}_Thumb.webp`);
    if (brand.folder === 'NanoStitch') {
      brandImages.push(`${folder}/invoice.webp`);
    }

    if (brandImages.length === 0) {
      brandImages.push(logoSrc, ...GLOBAL_FALLBACKS);
    }

    // Create 8 tiles using this brand's images (repeating if fewer than 8)
    for (let i = 0; i < 8; i++) {
      const tile = document.createElement('div');
      tile.className = 'mockup-tile';
      const img = document.createElement('img');
      img.src = brandImages[i % brandImages.length];
      img.alt = `${brand.name} Mockup`;
      img.loading = 'lazy';
      tile.appendChild(img);
      grid.appendChild(tile);
    }

    // 2. Central Spotlight Radial Gradient Shield
    const shield = document.createElement('div');
    shield.className = 'brand-hero-center-shield';

    // 3. Centered Logo Box (Passes brand key parameter dynamically to brand-showcase.html)
    const logoCard = document.createElement('div');
    logoCard.className = 'brand-hero-centered-logo';
    logoCard.onclick = () => {
      if (typeof openOverlay === 'function') {
        const overlayTarget = isSubfolder
          ? `brand-showcase.html?brand=${encodeURIComponent(brand.key)}`
          : `html/brand-showcase.html?brand=${encodeURIComponent(brand.key)}`;
        openOverlay(overlayTarget);
      }
    };

    const logoImg = document.createElement('img');
    logoImg.src = logoSrc;
    logoImg.alt = `${brand.name} Logo`;
    logoImg.onerror = function () {
      this.src = `${folder}/${brand.folder}_logo.webp`;
    };

    logoCard.appendChild(logoImg);

    // Assemble Slide
    slide.appendChild(grid);
    slide.appendChild(shield);
    slide.appendChild(logoCard);
    swiperWrapper.appendChild(slide);
  });

  // Initialize Swiper cleanly
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
});
