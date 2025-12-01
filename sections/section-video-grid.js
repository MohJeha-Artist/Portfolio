
    <script>
        function openVideo(videoId, title) {
            const overlay = document.getElementById('videoOverlay');
            const videoFrame = document.getElementById('videoFrame');
            
            // Set the video source
            videoFrame.src = `https://drive.google.com/file/d/${videoId}/preview`;
            
            // Show the overlay
            overlay.style.display = 'flex';
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }

        function closeVideo() {
            const overlay = document.getElementById('videoOverlay');
            const videoFrame = document.getElementById('videoFrame');
            
            // Hide the overlay
            overlay.style.display = 'none';
            
            // Stop the video
            videoFrame.src = '';
            
            // Restore body scroll
            document.body.style.overflow = 'auto';
        }

        // Close video when clicking outside the video container
        document.getElementById('videoOverlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closeVideo();
            }
        });

        // Close video with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeVideo();
            }
        });
    </script>