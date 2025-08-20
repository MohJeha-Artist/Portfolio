function loadCard(container) {
    // Fetch the card template
    fetch('../html/card.html')
        .then(response => response.text())
        .then(html => {
            // Insert the card HTML
            container.innerHTML = html;
            
            // Get the data attributes
            const thumbnail = container.dataset.thumbnail;
            const text = container.dataset.text;
            
            // Set the thumbnail image
            const img = container.querySelector('.thumbnail');
            img.src = thumbnail;
            img.alt = text;
            
            // Set the text
            container.querySelector('.work-text').textContent = text;
        });
}

// Initialize all card containers
document.querySelectorAll('[data-thumbnail][data-text]').forEach(loadCard);