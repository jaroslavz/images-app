import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { Photo, Photos } from '../../models';
import { State, featureAdapter } from '../reducers/photo.reducer';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectPhotoState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('photo');

export const selectAllPhotos: (
    state: object
) => Photo[] = featureAdapter.getSelectors(selectPhotoState).selectAll;

export const selectPhotoById = (id: number) => createSelector(selectAllPhotos, (allPhotos: Photo[]) => {
        if (allPhotos) {
            return allPhotos.find(p => p.id === id);
        } else {
            return null;
        }
    });


export const selectPhotoError: MemoizedSelector<object, any> = createSelector(
    selectPhotoState,
    getError
);

export const selectPhotoIsLoading: MemoizedSelector<
    object,
    boolean
> = createSelector(selectPhotoState, getIsLoading);
