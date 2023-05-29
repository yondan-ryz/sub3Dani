const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant-item .restaurant-item__content a', 10);
  I.seeElement('.restaurant-item .restaurant-item__content a');

  const firstRestoran = locate('.restaurant-item .restaurant-item__content a').first();
  const firstRestoranTitle = await I.grabTextFrom(firstRestoran);
  I.click(firstRestoran);

  I.waitForElement('#likeButton', 15);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.restaurant-item', 15);
  I.seeElement('.restaurant-item');
  const likedRestoranTitle = await I.grabTextFrom('.restaurant-item .restaurant-item__content a');

  assert.strictEqual(firstRestoranTitle, likedRestoranTitle);
});
