import { Component } from '@angular/core';
import { ClientesService } from '../Servicios/clientes.service';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {
idNuevo!:string
  constructor(private servicio:ClientesService){

  }

  crear(idNuevo:string, nombreNuevo:string) {
    this.servicio.crearCliente({id:parseInt(idNuevo),nombre:nombreNuevo})

  }
}
