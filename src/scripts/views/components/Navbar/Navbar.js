class Navbar extends HTMLElement {
  constructor() {
    super();
    this.tabIndexValue = 0;
    this.listNavigation = [];
  }

  _responsiveCheck(el) {
    if (el.matches) {
      this.tabIndexValue = -1;
    } else {
      this.tabIndexValue = 0;
    }
  }

  _removeItemAccesibility(el) {
    this.listNavigation.forEach((element) => {
      element.addEventListener('click', () => {
        if (el.matches) {
          this.listNavigation.forEach((e) => { e.setAttribute('tabindex', -1); });
        }
      });
    });
  }

  connectedCallback() {
    const mediaQuery = window.matchMedia('(max-width: 720px)');
    this._responsiveCheck(mediaQuery);
    this.render();
    const listNavigation = this.querySelectorAll('#navigationItem a');
    this.listNavigation = listNavigation;
    this._removeItemAccesibility(mediaQuery);
    mediaQuery.addListener((e) => {
      listNavigation.forEach((element) => {
        this._responsiveCheck(e);
        this._removeItemAccesibility(mediaQuery);
        element.setAttribute('tabindex', this.tabIndexValue);
      });
    });
  }

  render() {
    this.innerHTML = `
      
      <button id="closeMenu" class="header__navigation__sidenavClose" aria-label="Close Menu"><i class="fas fa-times"></i></button>
      <ul class="header__navigation__list">
          <li id="navigationItem" class="header__navigation__item"><a tabindex="${this.tabIndexValue}" href="#/">Home</a></li>
          <li id="navigationItem" class="header__navigation__item"><a tabindex="${this.tabIndexValue}" href="#/favorite">Favorite</a></li>
          <li id="navigationItem" class="header__navigation__item"><a tabindex="${this.tabIndexValue}" href="https://web.facebook.com/ruzhiet.sagaz" target="_blank" rel="noopener">About Us</a></li>
      </ul>
      
    `;
  }
}

customElements.define('nav-bar', Navbar);
