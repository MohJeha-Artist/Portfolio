class SectionLogos extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-logos.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-logos", SectionLogos);
  