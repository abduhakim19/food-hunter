import FavoriteRestaurant from '../views/pages/favorite-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';
import Landing from '../views/pages/landing';
import Error from '../views/pages/error';

const routes = {
  '/': Landing,
  '/favorite': FavoriteRestaurant,
  '/detail/:id': DetailRestaurant,
  '/error': Error,
};

export default routes;
