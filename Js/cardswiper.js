var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  speed: 500,
  loop: true,
  rotate: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  mousewheel: {
    invert: false,
  },
});