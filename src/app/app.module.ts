import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { AppRoutingModule } from './app-routing.module';
import { APP_RUTING } from './app-routes';

//Servicios
import { Home1Service } from './services/home1.service';
import { Home2Service } from './services/home2.service';

//Componentes
import { AppComponent } from './app.component';
import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Creacionhome1Component } from './components/creacionhome1/creacionhome1.component';
import { Creacionhome2Component } from './components/creacionhome2/creacionhome2.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultaHome1Component } from './components/consulta-home1/consulta-home1.component';
import { ActualizarHome1Component } from './components/actualizar-home1/actualizar-home1.component';



@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Home2Component,
    NavbarComponent,
    Creacionhome1Component,
    Creacionhome2Component,
    ConsultaHome1Component,
    ActualizarHome1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_RUTING,
    HttpClientModule
  ],
  providers: [
    Home1Service,
    Home2Service
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
