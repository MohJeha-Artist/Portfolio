class SectionHoverCards extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-hover-cards.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-hover-cards", SectionHoverCards);
  