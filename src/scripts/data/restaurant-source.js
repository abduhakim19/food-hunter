import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';
import { ErrorApi } from '../utils/error-helper';

class RestaurantSource {
  static async allRestaurants() {
    try {
      const response = await fetch(API_ENDPOINT.ALL_RESTAURANTS);
      const dataJson = await response.json();
      if (dataJson.error) throw new ErrorApi(dataJson);
      return [dataJson, null];
    } catch (error) {
      if (error instanceof ErrorApi) {
        return [null, error.message];
      }
      return [null, { message: error.toString() }];
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const dataJson = await response.json();
      if (dataJson.error) throw new ErrorApi(dataJson);
      return [dataJson, null];
    } catch (error) {
      if (error instanceof ErrorApi) {
        return [null, error.message];
      }
      return [null, { message: error.toString() }];
    }
  }

  static async addCustomerReview(review) {
    try {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': CONFIG.X_AUTH_TOKEN,
        },
        body: JSON.stringify(review),
      };
      const response = await fetch(API_ENDPOINT.POST_REVIEW, config);
      const dataJson = await response.json();
      if (dataJson.error) throw new ErrorApi(dataJson);
      return [dataJson, null];
    } catch (error) {
      if (error instanceof ErrorApi) {
        return [null, error.message];
      }
      return [null, { message: error.toString() }];
    }
  }
}

export default RestaurantSource;
