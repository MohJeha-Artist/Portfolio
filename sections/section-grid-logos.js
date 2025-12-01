class SectionGridLogos extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-grid-logos.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-grid-logos", SectionGridLogos);
  