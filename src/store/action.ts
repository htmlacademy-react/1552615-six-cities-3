import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offer';
import { AuthStatus } from '../utils/const';
import { Review } from '../types/review';

export const changeCity = createAction<City>('city/changeCity');
export const loadOffers = createAction<Offer[]>('offer/loadOffers');
export const setOffersLoadingStatus = createAction<boolean>('offers/setOffersLoadingStatus');
export const loadReviews = createAction<Review[]>('review/loadReviews');
export const requireAuthorization = createAction<AuthStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('error/setError');
