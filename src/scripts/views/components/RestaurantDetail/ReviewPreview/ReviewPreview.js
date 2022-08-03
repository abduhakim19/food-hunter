import '../ReviewList/ReviewList';

class ReviewPreview extends HTMLElement {
  constructor() {
    super();
    this._reviews = JSON.parse(this.getAttribute('data'));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._reviews = JSON.parse(newValue);
    this.render();
  }

  render() {
    const lastThreeReviews = this._reviews.slice(0).slice(-3);
    this.innerHTML = `
      <review-list data='${JSON.stringify(lastThreeReviews)}'></review-list>
    `;
  }

  static get observedAttributes() {
    return ['data'];
  }
}

customElements.define('review-preview', ReviewPreview);
