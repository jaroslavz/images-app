import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { AuthTokenInterceptor } from './auth-token.interceptor';

export * from './auth.service';
export * from './auth-guard.service';
export * from './auth-token.interceptor';

@NgModule({
  providers: [
    AuthService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true },
  ]
})
export class AuthModule {
}
