import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapaComponent } from './mapa/mapa.component'; 
import { InfoComponent } from './info/info.component';
import { WaitComponent } from './wait/wait.component';

const routes: Routes = [
  {path: "Login", component: LoginComponent},
  {path: "Mapa" , component: MapaComponent},
  {path: "Info" , component: InfoComponent},
  {path: "Wait" , component: WaitComponent},
  {path: "**"   , component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingCompnents = [
  LoginComponent, MapaComponent, 
  InfoComponent, WaitComponent
]
