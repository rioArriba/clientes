import { Injectable } from '@angular/core';
import { Cliente } from '../Modelos/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  private clientes:Array<Cliente> = [
    {
      id:1,
      nombre: 'Ana'
    },
    {
      id:2,
      nombre: 'Elena'
    },
    {
      id:3,
      nombre: 'Juan'
    },
    {
      id:4,
      nombre: 'Luis'
    }];

  getClientes() {
    return this.clientes;
  }
  getCliente(id:number) {
    return this.clientes.find(item => item.id == id)
  }
  borrarCliente(id:number) {
    return this.clientes.splice(this.clientes.findIndex(item => item.id == id), 1);
  }
  modificarCliente(cliente:Cliente) {
    
  }
  crearCliente(cliente:Cliente) {
    if(this.clientes.findIndex(item => item.id === cliente.id) < 0) {
      this.clientes.push(cliente)
    } else {
      alert('Error: El Id de cliente ya existe')
    }
    
  }
}
