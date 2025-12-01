class SectionGridProject extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-grid-project.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-grid-project", SectionGridProject);
  