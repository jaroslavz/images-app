import { createFeatureSelector } from '@ngrx/store';

import * as auth from './reducers/auth.reducers';
import * as photo from './reducers/photo.reducer';

export interface AppState {
  authState: auth.State;
  photoState: photo.State;
}

export const reducers = {
  auth: auth.reducer,
  photo: photo.featureReducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectPhotoState = createFeatureSelector<AppState>('photo');
