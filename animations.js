const heroHeading = document.querySelector('.hero-heading');

function checkScroll() {
  const rect = heroHeading.getBoundingClientRect();
  
  // Check if the element is within the scroll range (100vh - 200vh)
  if (rect.top >= window.innerHeight * 0.5 && rect.top <= window.innerHeight * 1.5) {
    // Apply the animation when the element is in view
    heroHeading.style.opacity = 1;
    heroHeading.style.transform = 'translateY(50px)';
  } else {
    // Reset the animation when the element is out of view
    heroHeading.style.opacity = 0;
    heroHeading.style.transform = 'translateY(0)';
  }
}

// Listen for the scroll event
window.addEventListener('scroll', checkScroll);

// Initial check to make sure it's correctly handled on page load
checkScroll();