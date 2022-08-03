class ReviewList extends HTMLElement {
  reviewPanel(reviews) {
    let element = '';
    reviews.forEach((review) => {
      element += `
      <div class="review__panel" tabindex="0">
        <p class="review__panel__name">${review.name}</p>
        <p class="review__panel__date">${review.date}</p>
        <p class="review__panel__review">${review.review}</p>
      </div>`;
    });
    this.innerHTML = element;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const reviews = JSON.parse(newValue);
    this.reviewPanel(reviews);
  }

  static get observedAttributes() {
    return ['data'];
  }
}

customElements.define('review-list', ReviewList);
