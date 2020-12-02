import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of as observableOf } from 'rxjs';
import * as featureActions from '../actions/photo.actions';
import { PhotoService } from '../../services/photo.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class PhotoEffects {

    constructor(private photoService: PhotoService, private actions$: Actions,
        private router: Router) { }

    // Load
    @Effect()
    loadRequestEffect$: Observable<any> = this.actions$.pipe(
        ofType<featureActions.LoadRequestAction>(featureActions.PhotoActionTypes.LOAD_REQUEST),
        switchMap(() =>
            this.photoService
                .getAllPhotos()
                .pipe(
                    map(
                        items =>
                            new featureActions.LoadSuccessAction({
                                items
                            }),

                    ),
                    catchError(error =>
                        observableOf(new featureActions.LoadFailureAction({ error }))
                    )
                )
        )
    );

    // Get by id
    @Effect() getByIdEffect$: Observable<any> = this.actions$.pipe(
        ofType<featureActions.GetByIdRequestAction>(featureActions.PhotoActionTypes.GET_BY_ID_REQUEST),
        switchMap(action => this.photoService.getPhotoById(action.payload.id)
            .pipe(
                map(() => new featureActions.LoadRequestAction())
            )
        )
    );

}
