class SectionHero extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-hero.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-hero", SectionHero);
  