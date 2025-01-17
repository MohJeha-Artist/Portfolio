// Get all the section elements
const sections = document.querySelectorAll('.content');

// Function to snap to the closest section on scroll
function snapToSection() {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let closestSection = null;
  let closestDistance = Infinity;

  // Loop through each section to find the closest one
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Calculate the distance between the scroll position and the section's top
    const distance = Math.abs(scrollTop - sectionTop);

    // If this section is closer than the previous one, make it the closest
    if (distance < closestDistance) {
      closestDistance = distance;
      closestSection = section;
    }
  });

  // Scroll to the closest section (snap to it)
  if (closestSection) {
    window.scrollTo({
      top: closestSection.offsetTop,
      behavior: 'smooth', // Smooth scroll to the section
    });
  }
}

// Listen for scroll events to trigger the snapping behavior
window.addEventListener('scroll', () => {
  // Throttle the scroll event to prevent excessive snapping
  clearTimeout(window.scrollTimeout);
  window.scrollTimeout = setTimeout(snapToSection, 150); // Delay to allow smooth scrolling
});
