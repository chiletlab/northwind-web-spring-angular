import { ChangeDetectorRef, Component } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductoService } from '../../../service/producto-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Proveedor } from '../../../models/proveedor';
import { Categoria } from '../../../models/categoria';
import { CategoriaService } from '../../../service/categoria-service';
import { CommonModule } from '@angular/common';
import { ProveedorService } from '../../../service/proveedor-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos-edit',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './productos-edit.html',
  styleUrl: './productos-edit.scss',
})
export class ProductosEdit {
  cargoFormulario: boolean = false;
  producto: Producto = {
    productId: 0,
    productName: '',
    supplierId: 0,
    categoryId: 0,
    quantityPerUnit: '',
    unitPrice: 0,
    unitsInStock: 0,
    unitsOnOrder: 0,
    reorderLevel: 0,
    discontinued: false,
    objCategoria: {
      categoryId: 0,
      categoryName: '',
      description: '',
    },
    objProveedor: {
      supplierId: 0,
      address: '',
      city: '',
      companyName: '',
      contactName: '',
      contactTitle: '',
      country: '',
      phone: '',
    },
  };

  listaProveedores: Proveedor[] = [];
  listaCategorias: Categoria[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      // Cargar producto
      this.productoService.buscarProducto(id).subscribe((data) => {
        this.producto = data;
        this.verificarCargaFormulario();
      });

      // Listar categorías
      this.categoriaService.listar().subscribe((data) => {
        this.listaCategorias = data;
        this.verificarCargaFormulario();
      });

      // Listar proveedores
      this.proveedorService.listar().subscribe((data) => {
        this.listaProveedores = data;
        this.verificarCargaFormulario();
      });
    });
  }

  cargoProducto = false;
  cargoCategorias = false;
  cargoProveedores = false;

  verificarCargaFormulario() {
    if (!this.cargoProducto && this.producto.productId !== 0) this.cargoProducto = true;
    if (!this.cargoCategorias && this.listaCategorias.length > 0) this.cargoCategorias = true;
    if (!this.cargoProveedores && this.listaProveedores.length > 0) this.cargoProveedores = true;

    if (this.cargoProducto && this.cargoCategorias && this.cargoProveedores) {
      this.cargoFormulario = true;
      this.cd.detectChanges();
    }
  }

  // Enviar formulario
  guardarProducto(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.productoService.actualizarProducto(this.producto).subscribe({
      next: (res) => {
        this.router.navigate(['/productos/listado']);
      },
      error: (err) => {
        alert('Error al actualizar el producto');
      },
    });
  }
}
