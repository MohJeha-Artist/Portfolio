const prevDesktop = document.getElementById("prev");
const nextDesktop = document.getElementById("next");
const prevMobile = document.getElementById("prev-mobile");
const nextMobile = document.getElementById("next-mobile");

// Apply the same logic to all
function setupNavigation(prevBtn, nextBtn) {
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

// Setup both sets
setupNavigation(prevDesktop, nextDesktop);
setupNavigation(prevMobile, nextMobile);