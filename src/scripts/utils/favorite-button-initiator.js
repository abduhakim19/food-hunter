const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, favoriteRestaurant, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;

    await this._render();
  },

  async _render() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.getRestaurant = {
      isFavorite: true,
    };
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._render();
    });
  },

  _renderFavorited() {
    this._favoriteButtonContainer.getRestaurant = {
      isFavorite: false,
    };
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._render();
    });
  },
};

export default FavoriteButtonInitiator;
