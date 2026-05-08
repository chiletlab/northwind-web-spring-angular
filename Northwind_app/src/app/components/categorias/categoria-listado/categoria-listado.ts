import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Categoria } from '../../../models/categoria';
import { CategoriaService } from '../../../service/categoria-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categoria-listado',
  imports: [CommonModule, RouterModule],
  templateUrl: './categoria-listado.html',
  styleUrl: './categoria-listado.scss',
})
export class CategoriaListado {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.listar().subscribe((data) => {
      this.categorias = data;
    });
  }
}
