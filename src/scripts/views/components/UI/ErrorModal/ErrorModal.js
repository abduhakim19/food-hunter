class ErrorModal extends HTMLElement {
  connectedCallback() {
    const error = JSON.parse(this.getAttribute('data'));
    this.innerHTML = `<h4>${error.message}</h4>`;
  }
}

customElements.define('error-modal', ErrorModal);
