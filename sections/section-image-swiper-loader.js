class SectionImageSwiper extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-image-swiper.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-image-swiper", SectionImageSwiper);
  