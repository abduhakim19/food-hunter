class FooterApp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <p>Copyright © 2021 - FoodHunter</p>
    `;
  }
}

customElements.define('footer-app', FooterApp);
