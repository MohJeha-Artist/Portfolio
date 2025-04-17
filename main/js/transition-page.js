window.onload = () => {
  const anchors = document.querySelectorAll('a');
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      let target = e.target.href;

      transition_el.classList.add('is-active');

      // Check if the target URL contains 'index.html'
      if (target.includes('index.html') || target.endsWith('/')) {
        setTimeout(() => {
          window.location.href = target;
        }, 500); // Longer delay for index.html
      } else {
        setTimeout(() => {
          window.location.href = target;
        }, 500); // Regular delay for other pages
      }
    });
  }
};


