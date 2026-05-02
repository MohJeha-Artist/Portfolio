const prevDesktop = document.getElementById("prev");
const nextDesktop = document.getElementById("next");

// Apply the same logic to all
function setupNavigation(prevBtn, nextBtn) {
    if (!prevBtn || !nextBtn) return;

    const match = location.pathname.match(/page-(\d+)\.html$/);
    const currentPage = match ? parseInt(match[1], 10) : 1;
    const IS_LAST_PAGE = false; // or your logic
    
    // Previous button
    if (currentPage > 1) {
        prevBtn.href = `page-${currentPage - 1}.html`;
    } else {
        prevBtn.style.display = "none";
    }
    
    // Next button
    if (IS_LAST_PAGE) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.href = `page-${currentPage + 1}.html`;
    }
}

// Setup buttons
setupNavigation(prevDesktop, nextDesktop);

// Intercept links to index.html when in an iframe (overlay)
document.querySelectorAll('a[href*="index.html"]').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.self !== window.top) { // We are in an iframe
            e.preventDefault();
            window.parent.postMessage('closeOverlay', '*');
        }
    });
});

// ESC key to close overlay from within iframe
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        window.parent.postMessage('closeOverlay', '*');
    }
});