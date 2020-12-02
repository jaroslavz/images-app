import { Action } from '@ngrx/store';
import { Photo, Photos } from '../../models';

export enum PhotoActionTypes {
    LOAD_REQUEST = '[Photo] Load Request',
    LOAD_FAILURE = '[Photo] Load Failure',
    LOAD_SUCCESS = '[Photo] Load Success',
    LOAD_PAGINATOR_SUCCESS = '[Photo] Load Paginator Success',
    GET_BY_ID_REQUEST = '[Photo] Get By Id Request',
    GET_BY_ID_FAILURE = '[Photo] Get By Id Failure',
    GET_BY_ID_SUCCESS = '[Photo] Get By Id Success'
}

// Get photos
export class LoadRequestAction implements Action {
    readonly type = PhotoActionTypes.LOAD_REQUEST;
}

export class LoadFailureAction implements Action {
    readonly type = PhotoActionTypes.LOAD_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class LoadSuccessAction implements Action {
    readonly type = PhotoActionTypes.LOAD_SUCCESS;
    constructor(public payload: { items: Photos }) { }
}

// Get photo by id
export class GetByIdRequestAction implements Action {
    readonly type = PhotoActionTypes.GET_BY_ID_REQUEST;
    constructor(public payload: Photo) { }
}

export class GetByIdFailureAction implements Action {
    readonly type = PhotoActionTypes.GET_BY_ID_FAILURE;
    constructor(public payload: { error: string }) { }
}

export class GetByIdSuccessAction implements Action {
    readonly type = PhotoActionTypes.GET_BY_ID_SUCCESS;
    constructor(public payload: Photo) { }
}
export type Actions = LoadRequestAction | LoadFailureAction | LoadSuccessAction
    | GetByIdRequestAction | GetByIdFailureAction | GetByIdSuccessAction;
