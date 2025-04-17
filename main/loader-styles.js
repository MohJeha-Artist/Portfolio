// stylesloader.js

// Array of CSS file paths
const stylesheets = [

    // Page Setup | Styling //
    '/main/css/base.css',
    '/main/css/styles.css',
    '/main/css/transition-page.css',
    '/main/css/scrollbar.css',

    // Sections | Styling //
    '/main/css/2Services.css',
    '/main/css/3Workgallery2.css',
    '/main/css/4Arts.css',
    '/main/css/Project.css',
    // '/main/css/5Softwares.css',

    // Navigation bar //
    '/main/navbar/navbar.css',
    
    // Header | Footer //
    '/main/css/0Hero.css',
    '/main/css/1Footer.css',

    '/main/css/about.css',

  ];
  
  // Function to load CSS files
  function loadStylesheets() {
    stylesheets.forEach((cssFile) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssFile;
      document.head.appendChild(link);
    });
  }
  


// Load scripts
loadStylesheets();

