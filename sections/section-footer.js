class SectionFooter extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-footer.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
          const currentYear = new Date().getFullYear();
          this.querySelector('#current-year').textContent = currentYear;
        });
    }
  }
  customElements.define("section-footer", SectionFooter);
  