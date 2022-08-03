import URLParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import Modal from '../components/UI/Modal/Modal';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../components/RestaurantDetail/RestaurantDetail';

const detailRestaurant = {
  async render() {
    return `
      <restaurant-detail class="restaurant"></restaurant-detail>
      <favorite-button id="favoriteButtonContainer"></favorite-button>
    `;
  },

  async afterRender() {
    const url = URLParser.parseActiveUrlWithoutCombiner();
    const [data, error] = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('restaurant-detail');
    const backdrop = document.querySelector('back-drop');
    if (error) {
      backdrop.getComponent = Modal.render({ component: 'error-modal', title: 'Alert', data: error });
      Modal.removeCloseButton();
    } else {
      restaurantContainer.getRestaurant = data;
      await FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('favorite-button'),
        favoriteRestaurant: FavoriteRestaurantIdb,
        restaurant: {
          id: data.restaurant.id,
          name: data.restaurant.name,
          city: data.restaurant.city,
          rating: data.restaurant.rating,
          pictureId: data.restaurant.pictureId,
          description: data.restaurant.description,
        },
      });
      backdrop.hideRender();
    }
  },
};

export default detailRestaurant;
