document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const overlay = document.getElementById('transition-overlay');
    const loaderBars = document.querySelectorAll('.loader-bar');
    const mainContent = document.querySelector('.body') || document.body;
    
    // 1. Check if Preloader is hidden by CSS (Developer Mode)
    const isDevMode = preloader && getComputedStyle(preloader).display === 'none';

    // 2. Timings & State
    const isPreview = window.name === 'preview';
    const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
    const isTransition = sessionStorage.getItem('pageTransition') === 'true';
    const swipeDir = sessionStorage.getItem('swipeDirection');

    // Anti-Blink / Swipe Handling
    if (isDevMode) {
        if (overlay) overlay.classList.add('hidden');
        document.body.classList.remove('is-transitioning');
    } else if (swipeDir) {
        if (overlay) overlay.classList.add('hidden');
        if (preloader) preloader.style.display = 'none';
        
        if (swipeDir === 'next') mainContent.classList.add('swipe-in-right');
        else if (swipeDir === 'prev') mainContent.classList.add('swipe-in-left');
        
        sessionStorage.removeItem('swipeDirection');
        document.body.classList.remove('is-transitioning');
    } else if (!isTransition && overlay) {
        overlay.classList.add('hidden');
    } else if (overlay) {
        overlay.classList.add('active'); 
        sessionStorage.removeItem('pageTransition');
    }

    // If Dev Mode or Swipe, don't make the user wait
    const minDuration = (isDevMode || isTransition || swipeDir) ? 0 : (isIndex ? 2000 : 1000);
    const startTime = Date.now();

    // 3. Progress Simulation (Skip if Dev Mode or Swipe)
    if (!isDevMode && !swipeDir) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 30;
            if (progress > 95) progress = 95;
            loaderBars.forEach(bar => bar.style.width = `${progress}%`);
        }, 150);

        window.addEventListener('load', () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const remainingTime = Math.max(0, minDuration - elapsedTime);

            setTimeout(() => {
                clearInterval(interval);
                loaderBars.forEach(bar => bar.style.width = '100%');
                
                setTimeout(() => {
                    if (preloader) preloader.classList.add('exit');
                    if (overlay && !overlay.classList.contains('hidden')) {
                        overlay.classList.remove('active');
                        overlay.classList.add('exit');
                        setTimeout(() => {
                            overlay.classList.remove('exit');
                            overlay.classList.add('hidden');
                            document.body.classList.remove('is-transitioning');
                        }, 1000);
                    } else if (overlay) {
                        document.body.classList.remove('is-transitioning');
                    }
                    revealContent();
                }, 400);
            }, remainingTime);
        });
    } else {
        // Just reveal content immediately
        window.addEventListener('load', revealContent);
    }

    /**
     * GLOBAL TRANSITION TRIGGER
     */
    window.triggerPageTransition = (href, targetParent = false) => {
        // Skip transition in Dev Mode
        if (isDevMode) {
            if (targetParent) window.top.location.href = href;
            else window.location.href = href;
            return;
        }

        if (!overlay) {
            if (targetParent) window.top.location.href = href;
            else window.location.href = href;
            return;
        }

        document.body.classList.add('is-transitioning');
        overlay.classList.remove('hidden', 'exit');
        overlay.offsetHeight; 
        overlay.classList.add('active'); 
        sessionStorage.setItem('pageTransition', 'true');
        
        setTimeout(() => {
            if ((targetParent || (window.self !== window.top && href.includes('index.html'))) && !isPreview) {
                window.top.location.href = href;
            } else {
                window.location.href = href;
            }
        }, 650);
    };

    // 4. Intercept Links
    document.addEventListener('click', (e) => {
        const target = e.target.closest('a');
        if (!target) return;

        const href = target.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || target.hasAttribute('target')) return;
        if (target.hostname && target.hostname !== window.location.hostname) return;
        if (target.classList.contains('no-transition')) return;

        // --- SWIPE LOGIC ---
        if (window.self !== window.top && (target.id === 'next' || target.id === 'prev' || target.classList.contains('swipe'))) {
            e.preventDefault();
            const direction = (target.id === 'next' || target.classList.contains('swipe-next')) ? 'next' : 'prev';
            
            if (direction === 'next') mainContent.classList.add('swipe-out-left');
            else mainContent.classList.add('swipe-out-right');
            
            sessionStorage.setItem('swipeDirection', direction);
            
            setTimeout(() => {
                window.location.href = href;
            }, 400);
            return;
        }

        // --- NORMAL / EXIT LOGIC ---
        const isExit = href.includes('index.html') || href.includes('about.html') || href.includes('2D-Graphics.html') || href.includes('3D-Projects.html') || href.includes('Motion.html');
        const shouldTargetParent = window.self !== window.top && isExit && !isPreview;

        if (isExit) {
            e.preventDefault();
            window.triggerPageTransition(href, shouldTargetParent);
        }
    }, true);

    // 5. Back Button Support
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            if (overlay) {
                overlay.classList.remove('active', 'exit');
                overlay.classList.add('hidden');
            }
            document.body.classList.remove('is-transitioning');
        }
    });

    function revealContent() {
        const revealElements = document.querySelectorAll('.reveal-content');
        revealElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });
    }
});
