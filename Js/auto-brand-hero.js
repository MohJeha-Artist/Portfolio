// Js/auto-brand-hero.js

document.addEventListener('DOMContentLoaded', () => {
  // Brand Configuration Mapping: Exact folder, logo file, and mockup assets
  const BRAND_REGISTRY = [
    {
      key: "Brand",
      name: "Brand Portfolio",
      folder: "Brand",
      logo: "Brand_logo.webp",
      images: [
        "Brand (1).webp", "Brand (2).webp", "Brand (3).webp", "Brand (4).webp",
        "Brand (5).webp", "Brand (6).webp", "Brand (7).webp", "Brand (8).webp", "Brand (9).webp"
      ]
    },
    {
      key: "DigitalWorld",
      name: "Digital World",
      folder: "DigitalWorld",
      logo: "DigitalWorld_logo.webp",
      images: ["DigitalWorld_Stack.webp", "DigitalWorld_Thumb.webp"]
    },
    {
      key: "Dabbous",
      name: "Dabbous Brand",
      folder: "Dabbous",
      logo: "Dabbous_logo.webp",
      images: ["Dabbous_Stack.webp", "Dabbous_Thumb.webp"]
    },
    {
      key: "Atelier",
      name: "Atelier Studio",
      folder: "Atelier",
      logo: "Atelier_logo.webp",
      images: ["Atelier_Stack.webp", "Atelier_Thumb.webp"]
    },
    {
      key: "Arz",
      name: "Arz Cultural",
      folder: "Arz",
      logo: "Arz_logo.webp",
      images: ["Arz (1).webp", "Arz (2).webp", "Arz (3).webp", "Arz (4).webp"]
    },
    {
      key: "SIS",
      name: "SIS Enterprise",
      folder: "SIS",
      logo: "SIS_logo.webp",
      images: ["SIS_Thumb.webp"]
    },
    {
      key: "EarthLinks",
      name: "EarthLinks Tech",
      folder: "EarthLinks",
      logo: "EarthLinks_logo.webp",
      images: ["EarthLinks_Thumb.webp"]
    },
    {
      key: "AbuSalah",
      name: "Abu Salah Monogram",
      folder: "AbuSalah",
      logo: "Abusalah_logo.webp",
      images: ["Abusalah_Thumb.webp"]
    },
    {
      key: "BirlesikZirve",
      name: "Birleşik Zirve",
      folder: "BirlesikZirve",
      logo: "BirlesikZirve_logo.webp",
      images: ["Birlesik Zirve_Thumb.webp"]
    },
    {
      key: "ibnbalad",
      name: "Ibn Balad Cultural",
      folder: "ibnbalad",
      logo: "ibnbalad_logo.webp",
      images: ["ibnbalad_Thumb.webp"]
    },
    {
      key: "Lebaniz",
      name: "Lebaniz Studio",
      folder: "Lebaniz",
      logo: "Lebaniz_logo.webp",
      images: ["Lebaniz_Thumb.webp"]
    },
    {
      key: "NanoStitch",
      name: "NanoStitch",
      folder: "NanoStitch",
      logo: "NanoStitch_logo.webp",
      images: ["invoice.webp"]
    },
    {
      key: "Nova",
      name: "Nova Media Studio",
      folder: "Nova",
      logo: "Nova_logo.webp",
      images: ["Nova_Thumb.webp"]
    },
    {
      key: "Sirius",
      name: "Sirius Emblem",
      folder: "Sirius",
      logo: "Sirius_logo.webp",
      images: ["Sirius_Thumb.webp"]
    },
    {
      key: "SummerLive",
      name: "Summer Live",
      folder: "SummerLive",
      logo: "Summer_logo.webp",
      images: ["Summer_Thumb.webp"]
    },
    {
      key: "Vistamar",
      name: "Vistamar Resort",
      folder: "Vistamar",
      logo: "vistamar_logo.webp",
      images: ["vistamar_Thumb.webp"]
    }
  ];

  // Global pool of fallback mockup images
  const GLOBAL_FALLBACKS = [
    "Assets/Graphics/Logos/Brand/Brand (1).webp",
    "Assets/Graphics/Logos/Brand/Brand (3).webp",
    "Assets/Graphics/Logos/Brand/Brand (5).webp",
    "Assets/Graphics/Logos/Brand/Brand (6).webp",
    "Assets/Graphics/Logos/Brand/Brand (7).webp",
    "Assets/Graphics/Logos/Brand/Brand (8).webp",
    "Assets/Graphics/Logos/Brand/Brand (9).webp",
    "Assets/Graphics/Logos/Arz/Arz (1).webp",
    "Assets/Graphics/Logos/Atelier/Atelier_Stack.webp",
    "Assets/Graphics/Logos/DigitalWorld/DigitalWorld_Stack.webp"
  ];

  const swiperWrapper = document.getElementById('auto-brand-swiper-wrapper');
  if (!swiperWrapper) return;

  // Render slides automatically per brand
  BRAND_REGISTRY.forEach((brand) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    // Grid container for surrounding tiles
    const grid = document.createElement('div');
    grid.className = 'surrounding-mockups-grid';

    const folder = `Assets/Graphics/Logos/${brand.folder}`;
    const logoSrc = `${folder}/${brand.logo}`;

    // Collect all valid brand images
    let brandImages = (brand.images && brand.images.length > 0)
      ? brand.images.map(img => `${folder}/${encodeURI(img)}`)
      : [];

    if (brandImages.length === 0) {
      brandImages = [logoSrc, ...GLOBAL_FALLBACKS];
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
        openOverlay(`Logos/brand-showcase.html?brand=${encodeURIComponent(brand.key)}`);
      }
    };

    const logoImg = document.createElement('img');
    logoImg.src = logoSrc;
    logoImg.alt = `${brand.name} Logo`;

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
  }, 100);
});
