


class SectionMotion extends HTMLElement {
    connectedCallback() {
      fetch("../sections/section-motion.html")
        .then(res => res.text())
        .then(html => {
          this.innerHTML = html;
        });
    }
  }
  customElements.define("section-motion", SectionMotion);
   
 
