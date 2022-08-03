import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import restaurantItem from '../components/RestaurantItem/RestaurantItem';

const favoriteRestaurants = {
  async render() {
    return `
    <main class="content">
      <div class="content__rekomendasi">
          <h1 class="content__favorite__label">Favorite Restoran</h1>
          <div class="content__posts" id="favoriteRestaurant">
          </div>
      </div>
    </main>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#favoriteRestaurant');
    const backdrop = document.querySelector('back-drop');
    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = '<p class="no-favorites">Tidak Ada Restoran Favorite</p>';
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += restaurantItem(restaurant);
    });
    backdrop.hideRender();
  },
};

export default favoriteRestaurants;
