/**
 * Cinematic Carousel Initialization
 * Automatically initializes any element with the class '.cinematic-carousel'
 * Supports 'data-autoplay-delay' attribute for custom speeds
 */

document.addEventListener('DOMContentLoaded', () => {
    const swiperElements = document.querySelectorAll('.cinematic-carousel');

    swiperElements.forEach((el) => {
        // Get custom delay from data attribute or default to 3000
        const delay = parseInt(el.getAttribute('data-autoplay-delay')) || 3000;
        
        // Check if we should disable it on desktop (for index.html grid logic)
        const disableOnDesktop = el.classList.contains('mobile-only-swiper');

        new Swiper(el, {
            wrapperClass: 'cinematic-wrapper',
            slideClass: 'cinematic-slide',
            loop: true,
            centeredSlides: true,
            slidesPerView: "auto",
            spaceBetween: 30,
            speed: 800,
            autoplay: {
                delay: delay,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: el.querySelector('.carousel-button-next'),
                prevEl: el.querySelector('.carousel-button-prev'),
            },
            pagination: {
                el: el.querySelector('.carousel-pagination'),
                clickable: true,
                bulletClass: 'carousel-pagination-bullet',
                bulletActiveClass: 'carousel-pagination-bullet-active'
            },
            breakpoints: {
                769: {
                    enabled: !disableOnDesktop,
                }
            }
        });
    });
});
