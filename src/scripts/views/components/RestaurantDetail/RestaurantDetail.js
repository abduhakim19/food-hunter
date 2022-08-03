import CONFIG from '../../../globals/config';
import Modal from '../UI/Modal/Modal';
import './ReviewPreview/ReviewPreview';
import './RestaurantReview/RestaurantReview';

class RestaurantDetail extends HTMLElement {
  set getRestaurant(data) {
    this.data = {
      ...data,
      restaurant: {
        ...data.restaurant,
        categories: data.restaurant.categories.map((category) => category.name),
        menus: {
          foods: data.restaurant.menus.foods.map((food) => food.name),
          drinks: data.restaurant.menus.drinks.map((drink) => drink.name),
        },
      },
    };
    this.render();
  }

  set changeCustomerReviews(reviews) {
    this.data.restaurant.customerReviews = reviews;
  }

  render() {
    const content = `
      <h2 class="restaurant__title" tabindex="0">${this.data.restaurant.name}</h2>
      <img 
        tabindex="0" 
        class="lazyload restaurant__poster" 
        data-src="${CONFIG.BASE_IMAGE_URL + this.data.restaurant.pictureId}" 
        alt="Ilustrasi ${this.data.restaurant.name}" />
      <div class="restaurant__info">
        <h4>Kategori</h4>
        <p tabindex="0">${this.data.restaurant.categories.join(', ')}</p>
        <h4>Alamat</h4>
        <p tabindex="0">${this.data.restaurant.address}, Kota ${this.data.restaurant.city}</p>
      </div>
      <div class="restaurant__description">
        <h3>Deskripsi</h3>
        <p tabindex="0">${this.data.restaurant.description}</p>
      </div>
      <div class="restaurant__menu">
        <h3 class="restaurant__menu__title">Menu</h3>
        <div id="food" class="restaurant__menu__foods">
          <h4>Makanan : </h4>
          <p  tabindex="0">${this.data.restaurant.menus.foods.join(', ')}</p>
        </div>
        <div id="drinks" class="restaurant__menu__drinks">
          <h4>Minuman : </h4>
          <p tabindex="0">${this.data.restaurant.menus.drinks.join(', ')}</p>
        </div>
      </div>
      <div class="restaurant__review">
        <h3>Review</h3>
        <div class="restaurant__review__box">
          <review-preview data='${JSON.stringify(this.data.restaurant.customerReviews)}'></review-preview>
        </div>
        <div class="restaurant__review__button">
          <button id="showAllReview">Lihat lebih review <i class="fas fa-arrow-right"></i></button>
        </div>
      </div>
      <back-drop id="modalReviews"></back-drop>
    `;
    this.innerHTML = content;
    this._afterRender();
  }

  _afterRender() {
    const backdrop = document.querySelector('#modalReviews');
    const showAllReviewButton = document.querySelector('#showAllReview');

    showAllReviewButton.addEventListener('click', () => {
      backdrop.getComponent = Modal.render({
        title: 'Review',
        component: 'restaurant-review',
        data: {
          id: this.data.restaurant.id,
          reviews: this.data.restaurant.customerReviews,
        },
      });
      Modal.closeModal(backdrop);
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
