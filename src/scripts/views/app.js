import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import Spinner from './components/UI/Spinner/Spinner';

import './components/UI/Backdrop/Backdrop';
import './components/UI/ErrorModal/ErrorModal';
import './components/Navbar/Navbar';
import './components/Footer/Footer';

class App {
  constructor({
    button, drawer,
    content, backdrop,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._backdrop = backdrop;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
    });
  }

  async renderPage() {
    let page;
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      page = routes[url];
      this._backdrop.getComponent = Spinner();
      this._content.innerHTML = await page.render();
    } catch (error) {
      page = routes['/error'];
      this._content.innerHTML = await page.render();
    }
    await page.afterRender();
  }
}

export default App;
