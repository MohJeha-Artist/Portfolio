class SectionSoftwares extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-softwares.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-softwares", SectionSoftwares);
  