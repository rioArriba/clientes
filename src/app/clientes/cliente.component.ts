import { Component } from '@angular/core';
import { Cliente } from '../Modelos/cliente';
import { ClientesService } from '../Servicios/clientes.service';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
clientes!:Array<Cliente>
  constructor(private servicio: ClientesService) {}
  ngOnInit() {
    this.clientes = this.servicio.getClientes();
  }

}
