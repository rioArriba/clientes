import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteComponent } from './clientes/cliente.component';
import { ModificarComponent } from './modificar/modificar.component';
import { BorrarComponent } from './borrar/borrar.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [{path:"",component: InicioComponent},
{path:"cliente/borrar/:id", component: BorrarComponent},
{path:"cliente/modificar/:id", component: ModificarComponent}, 
{path:"cliente/nuevo", component: NuevoComponent}, 
{path:"clientes",component:ClienteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
