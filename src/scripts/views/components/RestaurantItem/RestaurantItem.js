import CONFIG from '../../../globals/config';

const restaurantItem = (restaurant) => `
  <article class="post-item">
    
      <img class="lazyload post-item__thumbnail"
        data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
        alt="Ilustrasi ${restaurant.name}">
    
    <div class="post-item__content">
        <h1 class="post-item__title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h1>
        <div class="post-item__information">
          <p class="post-item__information__rating">Rating : ${restaurant.rating}</p>
          <p class="post-item__information__city"><i class="fa fa-map-marker-alt"></i>${restaurant.city}</p>
        </div>
        <p class="post-item__description">${restaurant.description}...</p>
    </div>
  </article>
  `;

export default restaurantItem;
