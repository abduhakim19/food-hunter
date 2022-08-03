import '../ReviewForm/ReviewForm';

class RestaurantReview extends HTMLElement {
  connectedCallback() {
    const data = JSON.parse(this.getAttribute('data'));
    const { id, reviews } = data;
    this.innerHTML = `
      <review-form data=${JSON.stringify(id)}></review-form>
      <review-list data='${JSON.stringify(reviews)}' id="listAllReview"></review-list>
    `;
  }
}

customElements.define('restaurant-review', RestaurantReview);
