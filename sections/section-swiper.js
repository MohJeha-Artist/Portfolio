class SectionSwiper extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-swiper.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-swiper", SectionSwiper);
  