// Js/auto-3d-projects.js
// High-Performance Instant Carousel Loader for 3D Projects

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PROJECTS_DATA || window.PROJECTS_3D || {};

  const CATEGORY_MAP = [
    { containerId: 'swiperMelee', category: 'melee' },
    { containerId: 'swiperFirearms', category: 'firearms' },
    { containerId: 'swiperEnvironment', category: 'props' }
  ];

  // Detect whether running in root or html/ subfolder
  const isSubfolder = window.location.pathname.replace(/\\/g, '/').includes('/html/');

  CATEGORY_MAP.forEach(({ containerId, category }) => {
    const swiperEl = document.getElementById(containerId);
    if (!swiperEl) return;

    const wrapper = swiperEl.querySelector('.cinematic-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = '';

    // Filter projects matching current category
    const projects = Object.values(data).filter(p => p.category === category);

    // Generate cards synchronously for instant zero-delay rendering
    projects.forEach((m) => {
      let folder = m.folder.endsWith('/') ? m.folder : `${m.folder}/`;
      if (!folder.startsWith('../') && isSubfolder) {
        folder = `../${folder}`;
      }
      const thumbPath = `${folder}${m.id}_thumb.webp`;

      const slide = document.createElement('div');
      slide.className = 'cinematic-slide';

      const card = document.createElement('div');
      card.className = 'card small';
      card.onclick = () => {
        if (typeof openOverlay === 'function') {
          const overlayTarget = isSubfolder
            ? `projects-showcase.html?project=${encodeURIComponent(m.id)}&category=${encodeURIComponent(m.category)}`
            : `html/projects-showcase.html?project=${encodeURIComponent(m.id)}&category=${encodeURIComponent(m.category)}`;
          openOverlay(overlayTarget);
        }
      };

      const img = document.createElement('img');
      img.className = 'thumbnail';
      img.src = thumbPath;
      img.alt = m.title;
      img.loading = 'lazy';

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

    // Initialize swiper cleanly
    if (typeof initCinematicSwiper === 'function') {
      initCinematicSwiper(swiperEl);
    }
  });
});
