class SectionVideoGrid extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-video-grid.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-video-grid", SectionVideoGrid);
  