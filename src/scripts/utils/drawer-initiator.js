const DrawerInitiator = {
  init({ button, drawer }) {
    const { hamburger, close, navigationItems } = button;
    const body = document.querySelector('body');
    hamburger.addEventListener('click', (event) => {
      this._toggleAccesibility(navigationItems);
      this._toggleDrawer({ event, drawer, body });
    });

    close.addEventListener('click', (event) => {
      this._removeAccesibility(navigationItems);
      this._closeDrawer({ event, drawer, body });
    });

    navigationItems.forEach((el) => {
      el.addEventListener('click', (event) => {
        this._closeDrawer({ event, drawer, body });
      });
    });
  },

  _toggleDrawer({ event, drawer, body }) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    body.classList.toggle('remove-content-scrolling');
  },

  _closeDrawer({ event, drawer, body }) {
    event.stopPropagation();
    drawer.classList.remove('open');
    body.classList.remove('remove-content-scrolling');
  },

  _toggleAccesibility(navigationItems) {
    navigationItems.forEach((element) => { element.setAttribute('tabindex', 0); });
  },

  _removeAccesibility(navigationItems) {
    navigationItems.forEach((element) => { element.setAttribute('tabindex', -1); });
  },
};

export default DrawerInitiator;
