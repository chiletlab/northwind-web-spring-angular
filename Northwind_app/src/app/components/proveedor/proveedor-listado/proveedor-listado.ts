import { Component } from '@angular/core';
import { Proveedor } from '../../../models/proveedor';
import { ProveedorService } from '../../../service/proveedor-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-proveedor-listado',
  imports: [CommonModule, RouterModule],
  templateUrl: './proveedor-listado.html',
  styleUrl: './proveedor-listado.scss',
})
export class ProveedorListado {
  listaProveedor: Proveedor[] = [];

  constructor(private serviceProveedor: ProveedorService) {}

  ngOnInit(): void {
    this.serviceProveedor.listar().subscribe((data) => {
      this.listaProveedor = data;
    });
  }
}
