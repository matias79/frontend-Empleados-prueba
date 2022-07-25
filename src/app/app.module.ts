import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './comunes/barra-nav/barra-nav.component';
import { PiePaginaComponent } from './comunes/pie-pagina/pie-pagina.component';
import { InicioComponent } from './comunes/inicio/inicio.component';
import { ErrorComponent } from './comunes/error/error.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
