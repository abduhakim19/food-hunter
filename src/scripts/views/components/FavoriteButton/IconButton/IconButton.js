const favoriteIcon = () => `
  <button aria-label="like this restaurant" id="likeButton" class="favorite">
    <i class="far fa-heart"></i>
  </button>
`;

const favoritedIcon = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { favoriteIcon, favoritedIcon };
