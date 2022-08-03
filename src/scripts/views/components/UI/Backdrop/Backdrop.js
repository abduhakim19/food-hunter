class Backdrop extends HTMLElement {
  set getComponent(component) {
    this.component = component;
    this._body = document.querySelector('body');
    this.render();
  }

  hideRender() {
    this.classList.remove('show-backdrop');
    this._body.classList.remove('remove-content-scrolling');
  }

  render() {
    this._body.classList.add('remove-content-scrolling');
    const styles = ['backdrop', 'show-backdrop'];
    this.className = styles.join(' ');
    this.innerHTML = this.component;
  }
}

customElements.define('back-drop', Backdrop);
