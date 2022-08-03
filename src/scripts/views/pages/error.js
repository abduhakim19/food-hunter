const error = {
  async render() {
    return `
    <main class="content-error">
      <h5 class="content-error__title" tabindex="0">404 Not Found</h5>
      <p class="content-error__main" tabindex="0">Halaman tidak ditemukan</p>
    </main>
    `;
  },

  async afterRender() {
    const backdrop = document.querySelector('back-drop');
    backdrop.hideRender();
  },
};

export default error;
