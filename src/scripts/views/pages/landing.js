import RestaurantSource from '../../data/restaurant-source';
import restaurantItem from '../components/RestaurantItem/RestaurantItem';
import Modal from '../components/UI/Modal/Modal';

const Landing = {
  async render() {
    return `
      <div class="hero" id="main-content" role="img" aria-label="Gambar Jumbotron Food Hunter Kumpulan Makanan">
        <div class="hero__inner">
            <h1 class="hero__title">Pencarian Restoran</h1>
            <p class="hero__tagline">Cari restoran Dengan Mudah, Masukkan Nama Restoran</p>
            <form class="form__group-cari">
                <input type="input" aria-label="Masukkan Nama Restoran" class="form__group-cari__input" placeholder="Nama Restoran" />
                <input type="button" aria-label="cari" class="form__group-cari__button" value="Cari">
            </form>
        </div>
      </div>
      <main class="content">
          <div class="content__rekomendasi">
              <h1 class="content__rekomendasi__label">Rekomendasi Restoran</h1>
              <div class="content__posts" id="rekomendasiPosts">

              </div>
          </div>
      </main>
    `;
  },

  async afterRender() {
    const [data, error] = await RestaurantSource.allRestaurants();
    const backdrop = document.querySelector('back-drop');
    if (error) {
      backdrop.getComponent = Modal.render({ component: 'error-modal', title: 'Alert', data: error });
      Modal.removeCloseButton();
    } else {
      const rekomendasiContainer = document.querySelector('#rekomendasiPosts');
      data.restaurants.forEach((restaurant) => {
        rekomendasiContainer.innerHTML += restaurantItem(restaurant);
      });
      backdrop.hideRender();
    }
  },
};

export default Landing;
