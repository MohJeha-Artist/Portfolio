const cards = document.querySelectorAll('.showcase-card');
let currentIndex = 0;
let autoRollInterval;

function updateSlider() {
  const totalCards = cards.length;

  cards.forEach((card, index) => {
    // 1. Strip out all possible layout classes
    card.classList.remove(
      'active',
      'prev',
      'next',
      'far-prev',
      'far-next',
      'far-prev-out',
      'far-next-out'
    );

    // 2. Calculate relative distance from the current center index
    let offset = index - currentIndex;

    // 3. Circular loop boundaries updated for 7 total cards (3 left, 3 right)
    if (offset < -3) offset += totalCards;
    if (offset > 3) offset -= totalCards;

    // 4. Assign structural classes based on distance from center
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
      card.classList.add('far-prev-out'); /* Smooth exit left */
    } else if (offset === 3) {
      card.classList.add('far-next-out'); /* Smooth exit right */
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSlider();
}

// Automatic Roll configuration (swaps every 3.5 seconds)
function startAutoRoll() {
  autoRollInterval = setInterval(nextSlide, 3500);
}

function stopAutoRoll() {
  clearInterval(autoRollInterval);
}

// Initialize Showcase Loop
updateSlider();
startAutoRoll();

// Pause rolling if the user hovers over the container to look closer
const container = document.querySelector('.slider-container');
if (container) {
  container.addEventListener('mouseenter', stopAutoRoll);
  container.addEventListener('mouseleave', startAutoRoll);
}