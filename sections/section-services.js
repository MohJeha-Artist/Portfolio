class SectionServices extends HTMLElement {
    connectedCallback() {
      fetch("sections/section-services.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-services", SectionServices);
  
