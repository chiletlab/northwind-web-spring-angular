import { Component } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../service/producto-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './productos-list.html',
  styleUrl: './productos-list.scss',
})
export class ProductosList {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.listarProductos().subscribe((data) => {
      this.productos = data;
    });
  }
}
