const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

const unfavorite_restaurant_alert = 'Tidak Ada Restoran Favorite';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#favoriteRestaurant');
  I.see(unfavorite_restaurant_alert, '.no-favorites');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(unfavorite_restaurant_alert, '.no-favorites');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedFilmTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestaurantTitle, likedFilmTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(unfavorite_restaurant_alert, '.no-favorites');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item');
  const likedFilmTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestaurantTitle, likedFilmTitle);

  I.click(firstRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#favoriteRestaurant');
  const unFavoriteRestaurant = await I.grabTextFrom('.no-favorites');

  assert.strictEqual(unFavoriteRestaurant, unfavorite_restaurant_alert);
});

Scenario('Review one Restaurant', async ({ I }) => {
  I.see(unfavorite_restaurant_alert, '.no-favorites');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  I.click(firstRestaurant);

  I.seeElement('#showAllReview');
  I.click('#showAllReview');

  I.seeElement('#nameReview');
  I.fillField('#nameReview', 'nyoba');

  I.seeElement('#contentReview');
  I.fillField('#contentReview', 'Isi Content test e2e');

  I.click('#reviewBtn');
  const succesReview = await I.grabTextFrom('.review__form__alert.success');
  assert.strictEqual(succesReview, 'Review berhasil dikirim');
  
});