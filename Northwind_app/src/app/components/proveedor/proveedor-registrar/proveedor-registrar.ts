import { Component } from '@angular/core';
import { Proveedor } from '../../../models/proveedor';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ProveedorService } from '../../../service/proveedor-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proveedor-registrar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './proveedor-registrar.html',
  styleUrl: './proveedor-registrar.scss',
})
export class ProveedorRegistrar {
  nuevo: Proveedor = {
    supplierId: 0,
    companyName: '',
    contactName: '',
    contactTitle: '',
    address: '',
    city: '',
    country: '',
    phone: '',
  };

  constructor(private proveedorService: ProveedorService, private router: Router) {}

  registrarProveedor(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('Formulario capturado');
    this.nuevo.supplierId = null as any;
    this.proveedorService.registrar(this.nuevo).subscribe(
      (response) => {
        console.log('Proveedor registrado con éxito:', response);
        this.router.navigate(['/proveedores/listado']);
      },
      (error) => {
        console.error('Error al registrar el proveedor:', error);
      }
    );
  }
}
