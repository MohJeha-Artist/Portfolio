
  // get current page number from filename
  const match = location.pathname.match(/page-(\d+)\.html$/);
  const currentPage = match ? parseInt(match[1], 10) : 1;

  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const prevmobile = document.getElementById("prev-mobile");
  const nextmobile = document.getElementById("next-mobile");

  // ---- PREVIOUS ----
  if (currentPage > 1) {
    prev.href = `page-${currentPage - 1}.html`;
  } else {
    prev.style.display = "none";
  }

  // ---- NEXT ----
  // Function to check if next page exists
  function checkNextPageExists(pageNum) {
    const nextPageUrl = `page-${pageNum}.html`;
    
    // Try to fetch the page to see if it exists
    return fetch(nextPageUrl, { method: 'HEAD' })
      .then(response => {
        return response.ok; // true if page exists
      })
      .catch(() => {
        return false; // page doesn't exist or error
      });
  }

  // Check and handle next button
  checkNextPageExists(currentPage + 1)
    .then(nextPageExists => {
      if (nextPageExists) {
        next.href = `page-${currentPage + 1}.html`;
      } else {
        next.style.display = "none";
      }
    })
    .catch(() => {
      // If there's an error, assume no next page
      next.style.display = "none";
    });