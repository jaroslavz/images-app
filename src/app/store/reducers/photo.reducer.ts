import { Actions, PhotoActionTypes } from '../actions/photo.actions';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Photo } from '../../models';

export const featureAdapter: EntityAdapter<
    Photo
>
= createEntityAdapter<Photo>({
    selectId: model => model.id,
    sortComparer: (a: Photo, b: Photo): number =>
        b.id.toString().localeCompare(a.id.toString())
});

export interface State extends EntityState<Photo> {
    isLoading?: boolean;
    error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
    {
        isLoading: false,
        error: null
    }
);

export function featureReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case PhotoActionTypes.LOAD_REQUEST: {
            return {
                ...state,
                isLoading: true,
                error: null
            };
        }
        case PhotoActionTypes.LOAD_SUCCESS: {

            return featureAdapter.addMany(action.payload.items.pictures, {
                ...state,
                isLoading: false,
                error: null
            });
        }
        case PhotoActionTypes.LOAD_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }

        // Get by id
        case PhotoActionTypes.GET_BY_ID_REQUEST: {
            return {
                ...state,
                error: null
            };
        }

        case PhotoActionTypes.GET_BY_ID_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        }
        default: {
            return state;
        }
    }
}
