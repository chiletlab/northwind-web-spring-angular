import { Component } from '@angular/core';
import { Categoria } from '../../../models/categoria';
import { CategoriaService } from '../../../service/categoria-service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria-detalles',
  imports: [CommonModule, RouterModule],
  templateUrl: './categoria-detalles.html',
  styleUrl: './categoria-detalles.scss',
})
export class CategoriaDetalles {
  detalleCategoria: Categoria = {
    categoryId: 0,
    categoryName: '',
    description: '',
  };

  constructor(private categoriaService: CategoriaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.categoriaService.buscarCategoria(id).subscribe({
        next: (categoria) => (this.detalleCategoria = categoria),
        error: (err) => console.error('Error al cargar la categoría', err),
      });
    }
  }
}
