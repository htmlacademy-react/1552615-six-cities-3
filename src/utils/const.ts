import { City } from '../types/offer';

export enum Pages {
  Main = '/',
  Login = 'login',
  Favorites = 'favorites',
  Offer = 'offer/:id',
  NotFound = '*'
}

export enum ApiRoute {
  Offers = '/offers',
  Offer = '/offers/{offerId}',
  NearPlaces = '/offers/{offerId}/nearby',
  Favorite = '/favorite',
  Comments = '/comments/{offerId}',
  Login = '/login',
  Logout = '/logout'
}

export enum PageClassNames {
  Main = 'page--gray page--main',
  Login = 'page--gray page--login'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortDirection {
  Popular = 'Popular',
  PriceAsc = 'Price: low to high',
  PriceDesc = 'Price: high to low',
  RatingDesc = 'Top rated first'
}

export const SORT_BY = [
  SortDirection.Popular,
  SortDirection.PriceAsc,
  SortDirection.PriceDesc,
  SortDirection.RatingDesc
];

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.8566,
      longitude: 2.3522,

      zoom: 10
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9333,
      longitude: 6.95,
      zoom: 10
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 10
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37547,
      longitude: 4.90412,
      zoom: 10
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 10
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2217,
      longitude: 6.7762,
      zoom: 10
    },
  },
];

export const DEFAULT_CITY: City = CITIES[0];

export const TIMEOUT_SHOW_ERROR = 2000;
