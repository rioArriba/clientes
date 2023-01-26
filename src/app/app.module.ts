import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteComponent } from './clientes/cliente.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ModificarComponent } from './modificar/modificar.component';
import { BorrarComponent } from './borrar/borrar.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ClienteComponent,
    NuevoComponent,
    ModificarComponent,
    BorrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
