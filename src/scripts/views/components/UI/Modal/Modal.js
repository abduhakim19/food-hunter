const Modal = {
  render({ component, title, data }) {
    return `
    <div class="modal">
      <div class="modal__header">
        <h3 class="modal__header__title">${title}</h3>
        <button id="closeModal" class="modal__header__close" aria-label="Close Modal"><i class="fas fa-times"></i></button>
      </div>
      <div class="modal__main">
        <${component} data='${JSON.stringify(data)}'></${component}>
      </div>
    </div>
    `;
  },

  removeCloseButton() {
    const closeModalButton = document.querySelector('#closeModal');
    closeModalButton.remove();
  },

  closeModal(backdrop) {
    const closeModalButton = document.querySelector('#closeModal');
    closeModalButton.addEventListener('click', () => {
      backdrop.hideRender();
    });
  },
};

export default Modal;
