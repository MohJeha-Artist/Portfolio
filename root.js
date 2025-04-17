// TEMP: Only for local testing
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  document.querySelectorAll('[href], [src]').forEach(el => {
      const attr = el.hasAttribute('href') ? 'href' : 'src';
      let path = el.getAttribute(attr);
      
      // Skip if: external URL, fragment, empty, or already has root slash
      if (!path || 
          path.startsWith('http') || 
          path.startsWith('#') || 
          path.startsWith('data:') || 
          path.startsWith('/') ||
          path.startsWith('blob:')) {
          return;
      }
      
      // Add root slash if it's a relative path
      if (path.startsWith('./')) {
          path = path.substring(2); // Remove ./
      }
      el.setAttribute(attr, '/' + path);
  });
}