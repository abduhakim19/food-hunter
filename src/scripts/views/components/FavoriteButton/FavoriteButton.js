import { favoriteIcon, favoritedIcon } from './IconButton/IconButton';

class FavoriteButton extends HTMLElement {
  set getRestaurant(data) {
    this._isFavorite = data.isFavorite;
    this._favoriteRestaurant = data.favoriteRestaurant;
    this.render();
  }

  _favorite() {
    this.innerHTML = favoriteIcon();
  }

  _favorited() {
    this.innerHTML = favoritedIcon();
  }

  render() {
    if (this._isFavorite) {
      this._favorite();
    } else {
      this._favorited();
    }
  }
}

customElements.define('favorite-button', FavoriteButton);
