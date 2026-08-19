// Js/logo-showcase.js
// Dynamic Multi-Platform Logo Showcase Loader from graphics-data.js

document.addEventListener('DOMContentLoaded', () => {
  const brands = window.BRANDS_DATA || window.GRAPHICS_DATA || {};

  // 1. Populate Mobile Logo Swiper (#logoSwiper)
  const mobileWrapper = document.querySelector('#logoSwiper .swiper-wrapper');
  if (mobileWrapper) {
    mobileWrapper.innerHTML = '';
    const uniqueBrands = Object.values(brands).filter((b, i, arr) => arr.findIndex(x => x.key === b.key) === i);

    uniqueBrands.forEach(brand => {
      const thumbFile = (brand.folder === 'SummerLive' ? 'Summer_Thumb.webp' : brand.folder === 'AbuSalah' ? 'Abusalah_Thumb.webp' : brand.folder === 'BirlesikZirve' ? 'Birleşik Zirve_Thumb.webp' : brand.folder === 'Arz' ? 'Arz (4).webp' : `${brand.folder}_Thumb.webp`);
      const thumbSrc = `Assets/Graphics/Logos/${brand.folder}/${encodeURI(thumbFile)}`;

      const slide = document.createElement('div');
      slide.className = 'swiper-slide card1';
      
      const img = document.createElement('img');
      img.src = thumbSrc;
      img.alt = `${brand.name} Cover`;
      img.loading = 'lazy';
      img.onerror = function() {
        this.src = `Assets/Graphics/Logos/${brand.folder}/${brand.folder}_logo.webp`;
      };

      slide.appendChild(img);
      mobileWrapper.appendChild(slide);
    });

    if (typeof Swiper !== 'undefined') {
      new Swiper("#logoSwiper", {
        effect: "cards",
        grabCursor: true,
        initialSlide: 2,
        speed: 500,
        loop: true,
        rotate: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        }
      });
    }
  }

  // 2. Populate Desktop 3D Logo Showcase Slider (.slider-track)
  const sliderTrack = document.querySelector('.slider-track');
  if (sliderTrack) {
    sliderTrack.innerHTML = '';
    const featuredKeys = ["Atelier", "AbuSalah", "SIS", "Nova", "Arz", "ibnbalad", "Vistamar"];
    const featuredBrands = featuredKeys.map(k => brands[k]).filter(Boolean);

    featuredBrands.forEach(brand => {
      const logoFile = (brand.folder === 'SummerLive' ? 'Summer_logo.webp' : brand.folder === 'AbuSalah' ? 'Abusalah_logo.webp' : brand.folder === 'Vistamar' ? 'vistamar_logo.webp' : `${brand.folder}_logo.webp`);
      const logoSrc = `Assets/Graphics/Logos/${brand.folder}/${logoFile}`;
      const glow = brand.glow || '#c0a250';

      const card = document.createElement('div');
      card.className = 'showcase-card';
      card.style.setProperty('--brand-glow', glow);

      const media = document.createElement('div');
      media.className = 'card-media';

      const img = document.createElement('img');
      img.src = logoSrc;
      img.alt = `${brand.name} Logo`;
      img.loading = 'lazy';

      media.appendChild(img);
      card.appendChild(media);
      sliderTrack.appendChild(card);
    });

    initDesktopSlider();
  }
});

function initDesktopSlider() {
  const cards = document.querySelectorAll('.showcase-card');
  if (!cards.length) return;
  let currentIndex = 0;
  let autoRollInterval;

  function updateSlider() {
    const totalCards = cards.length;
    cards.forEach((card, index) => {
      card.classList.remove(
        'active', 'prev', 'next', 'far-prev', 'far-next', 'far-prev-out', 'far-next-out'
      );
      let offset = index - currentIndex;
      if (offset < -3) offset += totalCards;
      if (offset > 3) offset -= totalCards;

      if (offset === 0) {
        card.classList.add('active');
      } else if (offset === -1 || offset === totalCards - 1) {
        card.classList.add('prev');
      } else if (offset === 1 || offset === -(totalCards - 1)) {
        card.classList.add('next');
      } else if (offset === -2) {
        card.classList.add('far-prev');
      } else if (offset === 2) {
        card.classList.add('far-next');
      } else if (offset === -3) {
        card.classList.add('far-prev-out');
      } else if (offset === 3) {
        card.classList.add('far-next-out');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlider();
  }

  function startAutoRoll() {
    stopAutoRoll();
    autoRollInterval = setInterval(nextSlide, 3500);
  }

  function stopAutoRoll() {
    if (autoRollInterval) clearInterval(autoRollInterval);
  }

  updateSlider();
  startAutoRoll();

  const container = document.querySelector('.slider-container');
  if (container) {
    container.addEventListener('mouseenter', stopAutoRoll);
    container.addEventListener('mouseleave', startAutoRoll);
  }
}