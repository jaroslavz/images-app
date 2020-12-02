import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.states';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { PhotosListComponent } from './components/photos-list/photos-list.component';
import { PhotoComponent } from './containers/photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { PhotoService } from './services/photo.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PhotoEffects } from './store/effects/photo.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent,
    PhotosListComponent,
    PhotoComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, PhotoEffects]),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    StoreDevtoolsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    BrowserAnimationsModule,
    CardModule,
    MessageModule,
    MessagesModule,
    OverlayPanelModule,
    PaginatorModule,
    TableModule,
    ToastModule,
    ToggleButtonModule,
    ToolbarModule,
    TooltipModule,
    CardModule,
    ButtonModule,
    ToolbarModule,
    DropdownModule,
    CheckboxModule,
    CalendarModule,
    PanelModule,
    ConfirmDialogModule,
    DialogModule,
    MultiSelectModule
  ],
  providers: [PhotoService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
