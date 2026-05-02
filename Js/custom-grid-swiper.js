 document.addEventListener('DOMContentLoaded', function () {
            var myGridSwiper = new Swiper('.custom-grid-swiper', {
                slidesPerView: 'auto',
                freeMode: true,
                mousewheel: {
                    forceToAxis: true,
                },
                keyboard: {
                    enabled: true,
                },
                grabCursor: true
            });
        });