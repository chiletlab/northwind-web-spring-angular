import { Component } from '@angular/core';
import { Categoria } from '../../../models/categoria';
import { CategoriaService } from '../../../service/categoria-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-editar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './categoria-editar.html',
  styleUrl: './categoria-editar.scss',
})
export class CategoriaEditar {
  actualizadaCategoria: Categoria = {
    categoryId: 0,
    categoryName: '',
    description: '',
  };

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  actualizarCategoria(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('Formulario capturado');
    this.categoriaService
      .actualizarCategoria(this.actualizadaCategoria.categoryId, this.actualizadaCategoria)
      .subscribe(
        (response) => {
          console.log('Categoría actualizada con éxito:', response);
          this.router.navigate(['/categorias/listado']);
        },
        (error) => {
          console.error('Error al actualizar la categoría:', error);
        }
      );
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.categoriaService.buscarCategoria(id).subscribe({
        next: (categoria) => {
          this.actualizadaCategoria = categoria;
        },
        error: (err) => {
          console.error('Error al cargar la categoría', err);
        },
      });
    }
  }
}
