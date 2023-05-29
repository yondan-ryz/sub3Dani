const assert = require('assert');

Feature('Reverse Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/list');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/list');
  I.waitForElement('.restaurant-item .restaurant-item__content a', 10);
  I.seeElement('.restaurant-item .restaurant-item__content a');

  const firstLikedRestoran = locate('.restaurant-item .restaurant-item__content a').first();
  const firstLikedRestoranTitle = await I.grabTextFrom(firstLikedRestoran);
  I.click(firstLikedRestoran);

  I.waitForElement('#likeButton', 20);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/');
  I.waitForElement('.restaurant-item', 20);
  I.seeElement('.restaurant-item');
  const unlikedRestoranTitle = await I.grabTextFrom('.restaurant-item .restaurant-item__content a');

  assert.strictEqual(firstLikedRestoranTitle, unlikedRestoranTitle);
});
