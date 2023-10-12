import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

import {APP_ROUTING} from './app.routes'

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AuthModule.forRoot({
      domain: 'dev-r2bpzee0847kvgos.us.auth0.com',
      clientId: 'iioaAgTSS3LjT185MYqMQL9ImAC5VuYH',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
