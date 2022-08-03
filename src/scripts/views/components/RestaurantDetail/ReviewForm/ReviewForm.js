import RestaurantSource from '../../../../data/restaurant-source';
import spinner from '../../UI/Spinner/Spinner';

const reviewFormHandler = {
  nameReviewValue: '',
  contentReviewValue: '',
};

class ReviewForm extends HTMLElement {
  constructor() {
    super();
    this._alertForm = '';
    this._form = {
      nameReviewValue: '',
      contentReviewValue: '',
    };
    this._customerReviews = null;
  }

  async _savingForm(review) {
    this.innerHTML = spinner('form');
    const [data, error] = await RestaurantSource.addCustomerReview(review);
    if (error) {
      this._alertForm = '<div class="review__form__alert fail">Review gagal dikirim</div>';
    } else {
      reviewFormHandler.nameReviewValue = '';
      reviewFormHandler.contentReviewValue = '';
      this._customerReviews = data.customerReviews;
      this._addNewDataToElement();

      this._alertForm = '<div class="review__form__alert success">Review berhasil dikirim</div>';
    }
    this._render();
  }

  _render() {
    const contentForm = `
      <div class="review__form">
        ${this._alertForm}
        <div class="form__group__name">
          <label for="nameReview">Nama</label>
          <input type="text" aria-label="Masukkan Nama" class="form__group__name__input" id="nameReview" placeholder="Nama" value="${reviewFormHandler.nameReviewValue}" required>
        </div>
        <div class="form__group__review">
          <label for="contentsReview">Review</label>
          <textarea aria-label="Masukkan Isi Review" class="form__group__review__input" id="contentReview" rows="3" placeholder="Review Restoran" required>${reviewFormHandler.contentReviewValue}</textarea>
        </div>
        <button type="submit" aria-label="kirim review" id="reviewBtn" class="form__review__button">Kirim</button>
      </div>
    `;
    this.innerHTML = contentForm;
    this._afterRender();
  }

  connectedCallback() {
    this._render();
  }

  _afterRender() {
    const btn = document.querySelector('#reviewBtn');
    const inputName = document.querySelector('#nameReview');
    const inputReview = document.querySelector('#contentReview');
    const id = this.getAttribute('data');

    const onInputValue = (e) => {
      reviewFormHandler[`${e.target.id}Value`] = e.target.value;
    };

    inputName.addEventListener('input', onInputValue);
    inputReview.addEventListener('input', onInputValue);
    btn.addEventListener('click', () => {
      const review = {
        id,
        name: reviewFormHandler.nameReviewValue,
        review: reviewFormHandler.contentReviewValue,
      };
      this._savingForm(review);
    });
  }

  _addNewDataToElement() {
    const reviewPreview = document.querySelector('review-preview');
    const reviewList = document.querySelector('review-list#listAllReview');
    const restaurantDetail = document.querySelector('restaurant-detail');

    reviewPreview.setAttribute('data', JSON.stringify(this._customerReviews));
    reviewList.setAttribute('data', JSON.stringify(this._customerReviews));
    restaurantDetail.changeCustomerReviews = this._customerReviews;
  }
}

customElements.define('review-form', ReviewForm);
