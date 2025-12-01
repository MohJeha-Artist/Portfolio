class Section3dwork extends HTMLElement { 
    connectedCallback() {
      fetch("../sections/section-3dwork.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-3dwork", Section3dwork);
  