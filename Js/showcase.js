  document.addEventListener('DOMContentLoaded', () => {
            const videoCards = document.querySelectorAll('.video-card');
            const videoModal = document.getElementById('videoModal');
            const modalIframe = document.getElementById('modalIframe');
            const closeModal = document.getElementById('closeModal');

            // Modal Logic
            const openVideoModal = (id) => {
                modalIframe.src = `https://drive.google.com/file/d/${id}/preview`;
                videoModal.classList.add('is-active');
                document.body.style.overflow = 'hidden';
            };

            const closeVideoModal = () => {
                videoModal.classList.remove('is-active');
                setTimeout(() => {
                    modalIframe.src = '';
                    document.body.style.overflow = '';
                }, 500);
            };

            videoCards.forEach(card => {
                const video = card.querySelector('video');
                const videoId = card.getAttribute('data-video-id');

                // Hover Interaction
                card.addEventListener('mouseenter', () => {
                    card.classList.add('is-playing');
                    
                    const playVideo = () => {
                        // Only set random time if not already playing or paused mid-way
                        if (video.paused) {
                            const randomTime = Math.random() * video.duration;
                            video.currentTime = isFinite(randomTime) ? randomTime : 0;
                            video.play().catch(e => console.warn("Playback failed:", e));
                        }
                    };

                    if (video.readyState >= 3) {
                        playVideo();
                    } else {
                        video.load(); // Ensure it starts loading
                        video.addEventListener('canplay', playVideo, { once: true });
                    }
                });

                card.addEventListener('mouseleave', () => {
                    card.classList.remove('is-playing');
                    video.pause();
                });

                // Click Interaction
                card.addEventListener('click', () => {
                    if (videoId) openVideoModal(videoId);
                });
            });

            // Close Events
            closeModal.addEventListener('click', closeVideoModal);
            videoModal.addEventListener('click', (e) => {
                if (e.target === videoModal) closeVideoModal();
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && videoModal.classList.contains('is-active')) closeVideoModal();
            });
        });