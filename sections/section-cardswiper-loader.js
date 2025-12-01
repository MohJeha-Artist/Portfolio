class SectionCardswiper extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-cardswiper.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-cardswiper", SectionCardswiper);
  