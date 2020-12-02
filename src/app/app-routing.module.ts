import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { AuthGuardService } from './core/auth';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  { path: '', component: PhotosListComponent, canActivate: [AuthGuardService] },

  { path: '**', component: NotFoundComponent }];

export const AppRoutes: ModuleWithProviders<any> = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
