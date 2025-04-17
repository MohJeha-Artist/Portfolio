// scriptsloader.js 

// Array of JavaScript file paths
const scripts = [

  // lenis library | Smooth scroll
  'https://unpkg.com/lenis@1.1.19/dist/lenis.min.js',
  'main/js/lenis.js',
  
  // Page Transition
  'main/js/transition-page.js',

  // Scripts.js
  'main/js/scripts.js',
  'main/js/href.js',

  // Softwares | Logo slide Animation
  'main/js/softwares.js',

  // Swiper |   ( * Artwork section * )
  'main/js/arts.js',
  'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js',


];

// Function to load JS files
function loadScripts() {
  scripts.forEach((jsFile) => {
    const script = document.createElement('script');
    script.src = jsFile;
    script.defer = true; // Ensure scripts load asynchronously
    document.head.appendChild(script);
  });
}

// Load the scripts when the script runs
loadScripts();



//preloader
// var loader = document.getElementById("preloader");

// window.addEventListener("load", function(){
//     setTimeout(function() {
//     loader.style.display = "none";
//     }, 5000);
// });
