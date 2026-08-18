// Js/auto-3d-projects.js
// High-performance Instant Carousel Loader for 3D Projects

document.addEventListener('DOMContentLoaded', () => {
  const CATEGORIES = [
    {
      containerId: 'swiperMelee',
      category: 'melee',
      models: [
        { id: 'Axe', title: 'Medieval Axe' },
        { id: 'Hammer', title: 'Medieval Hammer' },
        { id: 'katana1', title: 'Samurai Tachi' },
        { id: 'katana2', title: 'Katana Sword' },
        { id: 'FireSword', title: 'FireSword' },
        { id: 'Royal', title: 'Royal Sword' },
        { id: 'Dagger', title: 'Dagger' },
        { id: 'SunSword', title: 'SunSword' },
        { id: 'DaggerP', title: 'Dagger' },
        { id: 'Bats', title: 'Scrap Bats' },
        { id: 'Bow', title: 'Bow' }
      ]
    },
    {
      containerId: 'swiperFirearms',
      category: 'firearms',
      models: [
        { id: 'Handgun_Scifi', title: 'Sci-fi Handgun' },
        { id: 'SR', title: 'Sniper Rifle' },
        { id: 'MilitaryCrate', title: 'Military Crate' },
        { id: 'MilitaryRadio', title: 'Military Radio' },
        { id: 'Granada', title: 'Sci-fi Grenade' },
        { id: 'Grenade_M67', title: 'M67 Grenade' },
        { id: 'Mortar', title: 'Mortar' }
      ]
    },
    {
      containerId: 'swiperEnvironment',
      category: 'props',
      models: [
        { id: 'Windmill', title: 'Windmill' },
        { id: 'Shoes', title: 'Shoes' },
        { id: 'MusicBox', title: 'Music Box' },
        { id: 'Pooltable', title: 'Pool Table' },
        { id: 'Barrel', title: 'Toxic Barrel' }
      ]
    }
  ];

  CATEGORIES.forEach((catData) => {
    const swiperEl = document.getElementById(catData.containerId);
    if (!swiperEl) return;

    const wrapper = swiperEl.querySelector('.cinematic-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = '';

    // Generate all cards synchronously for instant zero-delay rendering
    catData.models.forEach((m) => {
      const thumbPath = `Assets/3DProjects/${catData.category}/${m.id}/${m.id}_thumb.webp`;

      const slide = document.createElement('div');
      slide.className = 'cinematic-slide';

      const card = document.createElement('div');
      card.className = 'card small';
      card.onclick = () => {
        if (typeof openOverlay === 'function') {
          openOverlay(`Projects/projects-showcase.html?project=${encodeURIComponent(m.id)}&category=${encodeURIComponent(catData.category)}`);
        }
      };

      const img = document.createElement('img');
      img.className = 'thumbnail';
      img.src = thumbPath;
      img.alt = m.title;
      img.loading = 'lazy';

      // If a card's image is missing or deleted, remove the slide gracefully
      img.onerror = () => {
        slide.remove();
      };

      const gradient = document.createElement('div');
      gradient.className = 'gradient';

      const text = document.createElement('span');
      text.className = 'work-text';
      text.innerText = m.title;

      card.appendChild(img);
      card.appendChild(gradient);
      card.appendChild(text);
      slide.appendChild(card);
      wrapper.appendChild(slide);
    });

    // Initialize swiper instantly
    if (typeof initCinematicSwiper === 'function') {
      initCinematicSwiper(swiperEl);
    }
  });
});
