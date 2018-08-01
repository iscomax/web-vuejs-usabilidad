import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';
import { Caja1Component } from './inicio/caja1/caja1.component';
import { Caja2Component } from './inicio/caja2/caja2.component';
import { Caja3Component } from './inicio/caja3/caja3.component';
import { Caja4Component } from './inicio/caja4/caja4.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    InicioComponent,
    Caja1Component,
    Caja2Component,
    Caja3Component,
    Caja4Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
