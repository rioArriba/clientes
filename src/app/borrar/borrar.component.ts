import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../Modelos/cliente';
import { ClientesService } from '../Servicios/clientes.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent {

  cliente!:Cliente
  id!:number
  constructor(private servicio: ClientesService,
          private miRuta:ActivatedRoute) { 
            this.id = this.miRuta.snapshot.params['id']
            this.cliente = this.servicio.getCliente(this.id)!
           }
   

  borrar() {       
   
    this.servicio.borrarCliente(this.id)
  }
}
