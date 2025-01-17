let isScrolling; // Flag to prevent multiple triggers

const navbar = document.querySelector('.navbar');

// When scrolling, move navbar down (translateY(100px))
window.addEventListener('scroll', function() {
    // Clear the previous timeout (in case scroll happens again before timeout ends)
    clearTimeout(isScrolling);

    // Apply translateY(100px) while scrolling
    navbar.style.transform = 'translateX(-50%) translateY(100px)';

    // Set the timeout to reset the navbar position after scrolling stops
    isScrolling = setTimeout(function() {
        navbar.style.transform = 'translateX(-50%) translateY(1px)'; // Reset to original position
    }, 1000); // Delay of 500ms after scrolling stops before resetting
});



// Navbar tabs | Scroll to selected

$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 700 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})

