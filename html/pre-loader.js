fetch('html/pre-loader.html')
            .then(response => response.text())
            .then(html => {
                const container = document.getElementById('preloader-container');
                container.innerHTML = html;
                
                const text = container.dataset.preloaderText || 'Loading...';
                const preloaderText = container.querySelector('.preloader-text');
                
                // Create spans for each character
                text.split('').forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.className = 'char';
                    preloaderText.appendChild(span);
                });

                // Animate characters one by one
                const chars = container.querySelectorAll('.char');
                chars.forEach((char, index) => {
                    setTimeout(() => {
                        char.classList.add('fade-in');
                    }, 100 * index);
                });

                // Slide out the preloader and circle after text animation + delay
                setTimeout(() => {
                    const preloader = container.querySelector('.preloader');
                    const circle = container.querySelector('.circle-loader');
                    preloader.classList.add('slide-out');
                    circle.classList.add('slide-out');
                }, (text.length * 100) + 500);
            });