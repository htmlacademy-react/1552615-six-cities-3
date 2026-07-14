import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, loadReviews, requireAuthorization, setError, setOffersLoadingStatus } from './action';
import { AuthStatus, DEFAULT_CITY } from '../utils/const';
import { City, Offer } from '../types/offer';
import { Review } from '../types/review';

type InitialState = {
  city: City;
  offers: Offer[];
  isOffersLoading: boolean;
  reviews: Review[];
  authStatus: AuthStatus;
  error: string | null;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [] as Offer[],
  isOffersLoading: false,
  reviews: [] as Review[],
  authStatus: AuthStatus.Unknown,
  error: null
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
