/* eslint-disable no-nested-ternary */
import CONFIG from '../../globals/config';

const generateReviewItemTemplate = (review) => `
  <div class="review-item">
    <h4>${review.name}</h4>
    <hr>  
    <p style="background-color: #9BA4B5; padding: 5px; border-radius: 5px; margin-top: 3px">${review.review}</p>
    <p>${review.date}</p>
  </div>
`;

const createReviewListTemplate = (reviews) => {
  const reviewList = reviews.reduce((accumulator, review) => accumulator + generateReviewItemTemplate(review), '');
  return reviewList;
};
const allCategory = (categories) => {
  const categoryList = categories.map((category) => category.name).join(', ');
  return categoryList;
};

const myMenu = (menus) => menus.map((menu) => `<li >${menu.name}</li>`).join('');

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
   <div class="restaurant__category">
    <h4>Category</h4>
    <p>${allCategory(restaurant.categories)}</p>
  </div>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="menu-food-drink">
  <div class="restaurant__menu">
    <div class="restaurant__menu__foods">
      <h4>Foods :</h4>
      <ol>${myMenu(restaurant.menus.foods)}</ol>
    </div>
  </div>
  <br>
  <div class="restaurant__menu">
    <div class="restaurant__menu__drinks">
      <h4>Drinks :</h4>
      <ol>${myMenu(restaurant.menus.drinks)}</ol>
    </div>
  </div>
</div>
  <div class="review">
    <h4>Customer Reviews</h4>
    <div>
      ${createReviewListTemplate(restaurant.customerReviews)}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
