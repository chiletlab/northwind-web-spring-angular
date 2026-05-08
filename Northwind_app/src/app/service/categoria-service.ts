import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private urlBase = 'http://localhost:9090/api/categories';
  constructor(private http: HttpClient) {}

  public listar(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.urlBase);
  }
  public buscarCategoria(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(this.urlBase + `/${id}`);
  }
  public registrarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.urlBase, categoria);
  }
  public actualizarCategoria(id: number, categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.urlBase + `/${id}`, categoria);
  }
}
