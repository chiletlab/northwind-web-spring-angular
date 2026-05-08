import { Component } from '@angular/core';
import { Categoria } from '../../../models/categoria';
import { CategoriaService } from '../../../service/categoria-service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-registrar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './categoria-registrar.html',
  styleUrl: './categoria-registrar.scss',
})
export class CategoriaRegistrar {
  nuevaCategoria: Categoria = {
    categoryId: 0,
    categoryName: '',
    description: '',
  };

  constructor(private categoriaService: CategoriaService, private router: Router) {}

  registrarCategoria(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('Formulario capturado');
    this.nuevaCategoria.categoryId = null as any;
    this.categoriaService.registrarCategoria(this.nuevaCategoria).subscribe(
      (response) => {
        console.log('Categoría registrada con éxito:', response);
        this.router.navigate(['/categorias/listado']);
      },
      (error) => {
        console.error('Error al registrar la categoría:', error);
      }
    );
  }
}
