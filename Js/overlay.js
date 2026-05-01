function openOverlay(page) {
    const overlay = document.getElementById('overlay');
    const iframe = document.getElementById('overlayFrame');
    
    iframe.src = page;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden'; 

    // Trigger animation after display change
    setTimeout(() => {
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
    }, 10);

    history.pushState({ overlay: true }, "");
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    if (!overlay.classList.contains('active')) return;

    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');

    // Wait for animation to complete before hiding
    setTimeout(() => {
        overlay.style.display = 'none';
        document.getElementById('overlayFrame').src = "";
        document.body.style.overflow = ''; // Restore scrolling
    }, 800); // Match the new transition duration

    if (history.state && history.state.overlay) {
        history.back();
    }
}

// Listen for browser Back button
window.addEventListener('popstate', function (event) {
    const overlay = document.getElementById('overlay');
    if (overlay && overlay.classList.contains('active')) {
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        setTimeout(() => {
            overlay.style.display = 'none';
            document.getElementById('overlayFrame').src = "";
            document.body.style.overflow = '';
        }, 800);
    }
});

// Listen for ESC key
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeOverlay();
    }
});

// Click outside overlay to close
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === this) {
                closeOverlay();
            }
        });
    }

    // Add keyboard support for cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

// Listen for messages from iframe
window.addEventListener('message', function (event) {
    // Validate origin for security
    if (event.origin !== window.location.origin) return;

    if (event.data === 'closeOverlay') {
        closeOverlay();
    }
});
