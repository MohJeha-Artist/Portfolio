document.addEventListener('DOMContentLoaded', () => {
    const swiperContainer = document.querySelector('.mySwiper');
  
    // Function to update breakpoints
    function updateSwiperBreakpoints() {
      const screenWidth = window.innerWidth;
  
      if (screenWidth <= 640) {
        swiperContainer.setAttribute('slides-per-view', '1');
      } else if (screenWidth <= 768) {
        swiperContainer.setAttribute('slides-per-view', '2');
      } else if (screenWidth >= 1024) {
        swiperContainer.setAttribute('slides-per-view', '3');
      }
    }
  
    // Run on load
    updateSwiperBreakpoints();
  
    // Update on resize
    window.addEventListener('resize', updateSwiperBreakpoints);
  
    // Initialize Swiper
    const swiper = new Swiper('.mySwiper', {
      spaceBetween: 30,
    });
  });
  