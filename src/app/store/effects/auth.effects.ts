import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import {
  AuthActionTypes,
  GetToken, GetTokenSuccess, LogInFailure,
} from '../actions/auth.actions';
import { AuthService } from 'src/app/core/auth';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) { }

  @Effect()
  GetToken: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.GET_TOKEN),
    map((action: GetToken) => action.payload),
    switchMap(payload => {
      return this.authService.logIn().pipe(
        map((response) => {
          return new GetTokenSuccess({ token: response.token });
        }),
        catchError((error) => {
          return observableOf(new LogInFailure({ error: error }));
        })
      );
    })
  );


  @Effect({ dispatch: false })
  GetTokenSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.GET_TOKEN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.GET_TOKEN_FAILURE)
  );

  @Effect({ dispatch: false })
  public LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap((user) => {
      localStorage.removeItem('token');
      this.router.navigateByUrl('login');
    })
  );

}
