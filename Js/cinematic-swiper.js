/**
 * Cinematic Carousel Initialization
 * Automatically initializes any element with the class '.cinematic-carousel'
 * Supports 'data-autoplay-delay' attribute for custom speeds
 */

function initCinematicSwiper(el) {
    if (!el || el.swiper) return el.swiper;

    const delay = parseInt(el.getAttribute('data-autoplay-delay')) || 3000;
    const disableOnDesktop = el.classList.contains('mobile-only-swiper');

    // Duplicate slides if fewer than 6 to ensure smooth infinite loop
    const wrapper = el.querySelector('.cinematic-wrapper');
    if (wrapper && wrapper.children.length > 0 && wrapper.children.length < 6) {
        const originalChildren = Array.from(wrapper.children);
        originalChildren.forEach(child => {
            wrapper.appendChild(child.cloneNode(true));
        });
    }

    return new Swiper(el, {
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
}

window.initCinematicSwiper = initCinematicSwiper;

document.addEventListener('DOMContentLoaded', () => {
    // Only init static ones that are not dynamically managed
    const swiperElements = document.querySelectorAll('.cinematic-carousel:not(#swiperMelee):not(#swiperFirearms):not(#swiperEnvironment)');
    swiperElements.forEach((el) => {
        initCinematicSwiper(el);
    });
});
