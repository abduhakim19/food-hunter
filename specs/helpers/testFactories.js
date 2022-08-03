import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';
import FavoriteButtonInitiator from '../../src/scripts/utils/favorite-button-initiator';

const createFavoriteButtonInitiatorWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createFavoriteButtonInitiatorWithRestaurant };
