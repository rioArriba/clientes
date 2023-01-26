import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../Modelos/cliente';
import { ClientesService } from '../Servicios/clientes.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {
  cliente!: Cliente
  id!:number
  constructor(private servicio: ClientesService, private miRuta: ActivatedRoute) {}
  ngOnInit() {
    this.cliente = this.servicio.getCliente(this.miRuta.snapshot.params['id'])!
  }

  modificar(nombre:string) {
    this.cliente.nombre = nombre
    this.servicio.modificarCliente(this.cliente)

  }
}
