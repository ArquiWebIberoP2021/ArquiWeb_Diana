import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Pantalla2Component } from './pantalla2/pantalla2.component';
import { MapaComponent } from './mapa/mapa.component';
import { InfoComponent } from './info/info.component';
import { WaitComponent } from './wait/wait.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Pantalla2Component,
    MapaComponent,
    InfoComponent,
    WaitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
