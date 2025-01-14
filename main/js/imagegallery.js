// Select all images in the gallery
const images = document.querySelectorAll('.gallery img');

// Add event listeners to each image
images.forEach((img) => {
    img.addEventListener('mousemove', (e) => {
        const rect = img.getBoundingClientRect();
        
        // Calculate mouse position relative to the center of the image
        const offsetX = e.clientX - rect.left - rect.width / 2; // Horizontal distance from center
        const offsetY = e.clientY - rect.top - rect.height / 2; // Vertical distance from center

        // Apply rotation based on the mouse's relative position
        const rotationX = (offsetY / rect.height) * 20; // Max rotation of 10 degrees on X axis
        const rotationY = -(offsetX / rect.width) * 20; // Max rotation of 10 degrees on Y axis

        img.style.transform = `rotateY(${rotationY}deg) rotateX(${rotationX}deg) scale(1.1)`;
    });

    img.addEventListener('mouseleave', () => {
        // Reset transform when mouse leaves
        img.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
});


