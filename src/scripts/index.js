import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.scss';
import swRegister from './utils/sw-register';
import App from './views/app';
import './views/components/FavoriteButton/FavoriteButton';

const selector = {
  button: {
    hamburger: document.querySelector('#hamburgerMenu'),
    close: document.querySelector('#closeMenu'),
    navigationItems: document.querySelectorAll('#navigationItem a'),
  },
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  backdrop: document.querySelector('back-drop'),
};

const app = new App(selector);

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
