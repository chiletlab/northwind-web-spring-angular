import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../models/proveedor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  private urlBase = 'http://localhost:9090/api/suppliers';
  constructor(private http: HttpClient) {}

  public listar(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.urlBase);
  }
  public buscar(id: number): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.urlBase}/${id}`);
  }
  public registrar(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(this.urlBase, proveedor);
  }
  public actualizar(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.put<Proveedor>(`${this.urlBase}/${proveedor.supplierId}`, proveedor);
  }
}
