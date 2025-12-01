class SectionVideos extends HTMLElement {
  connectedCallback() {
    fetch("../sections/section-videos.html")
      .then(res => res.text())
      .then(html => {
        this.innerHTML = html;

        // Get elements after HTML is injected
        const videoCards = this.querySelectorAll('.video-card');
        const videoOverlay = this.querySelector('#videoOverlay');
        const videoPlayer = this.querySelector('#videoPlayer');
        const closeBtn = this.querySelector('#closeBtn');

        // Open video overlay when a card is clicked
        videoCards.forEach(card => {
          card.addEventListener('click', () => {
            const videoSrc = card.getAttribute('data-video-src');
            videoPlayer.src = videoSrc;
            videoOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
          });
        });

        // Close video overlay
        closeBtn.addEventListener('click', closeVideoOverlay);
        videoOverlay.addEventListener('click', (e) => {
          if (e.target === videoOverlay) closeVideoOverlay();
        });

        // Close with escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && videoOverlay.classList.contains('active')) {
            closeVideoOverlay();
          }
        });

        function closeVideoOverlay() {
          videoOverlay.classList.remove('active');
          videoPlayer.src = ''; // Stop the video
          document.body.style.overflow = ''; // Re-enable scrolling
        }
      });
  }
}

customElements.define("section-videos", SectionVideos);
