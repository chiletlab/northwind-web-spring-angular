import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../../service/categoria-service';
import { Categoria } from '../../../models/categoria';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../service/producto-service';
import { ProveedorService } from '../../../service/proveedor-service';
import { Proveedor } from '../../../models/proveedor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos-crear',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './productos-crear.html',
  styleUrl: './productos-crear.scss',
})
export class ProductosCrear {
  nuevoProducto: Producto = {
    productName: '',
    supplierId: 0,
    categoryId: 0,
    quantityPerUnit: '',
    unitPrice: 0,
    unitsInStock: 0,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: false,
  };

  categorias: Categoria[] = [];
  proveedores: Proveedor[] = [];

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService
  ) {}
  ngOnInit(): void {
    this.categoriaService.listar().subscribe((data) => {
      this.categorias = data;
    });

    this.proveedorService.listar().subscribe((data) => {
      this.proveedores = data;
    });
  }

  guardar(): void {
    console.log('Enviando:', this.nuevoProducto);

    this.productoService.crearProducto(this.nuevoProducto).subscribe({
      next: (resp) => {
        alert('Producto creado correctamente');
        console.log(resp);
        this.resetForm();
      },
      error: (err) => {
        console.error(err);
        alert('Error al crear producto');
      },
    });
  }

  resetForm() {
    this.nuevoProducto = {
      productName: '',
      supplierId: 0,
      categoryId: 0,
      quantityPerUnit: '',
      unitPrice: 0,
      unitsInStock: 0,
      unitsOnOrder: 0,
      reorderLevel: 0,
      discontinued: false,
    };
  }
}
