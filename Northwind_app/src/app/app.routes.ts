import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { ProductosList } from './components/productos/productos-list/productos-list';
import { ProductosCrear } from './components/productos/productos-crear/productos-crear';
import { ProductosEdit } from './components/productos/productos-edit/productos-edit';
import { CategoriaListado } from './components/categorias/categoria-listado/categoria-listado';
import { ClienteListado } from './components/cliente/cliente-listado/cliente-listado';
import { ClienteCrear } from './components/cliente/cliente-crear/cliente-crear';
import { EmpleadosListado } from './components/empleados/empleados-listado/empleados-listado';
import { EmpleadosCrear } from './components/empleados/empleados-crear/empleados-crear';

import { ClienteEdit } from './components/cliente/cliente-edit/cliente-edit';
import { EmpleadosEdit } from './components/empleados/empleados-edit/empleados-edit';
import { ProveedorListado } from './components/proveedor/proveedor-listado/proveedor-listado';
import { CategoriaRegistrar } from './components/categorias/categoria-registrar/categoria-registrar';
import { CategoriaDetalles } from './components/categorias/categoria-detalles/categoria-detalles';
import { CategoriaEditar } from './components/categorias/categoria-editar/categoria-editar';
import { ProveedorRegistrar } from './components/proveedor/proveedor-registrar/proveedor-registrar';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'home', component: Home },
  { path: 'productos/listado', component: ProductosList },
  { path: 'productos/crear', component: ProductosCrear },
  { path: 'productos/editar/:id', component: ProductosEdit },
  //Categorias
  { path: 'categorias/listado', component: CategoriaListado },
  { path: 'categorias/crear', component: CategoriaRegistrar },
  { path: 'categorias/editar/:id', component: CategoriaEditar },
  { path: 'categorias/detalles/:id', component: CategoriaDetalles },

  //Cliente
  { path: 'cliente/listado', component: ClienteListado },
  { path: 'cliente/crear', component: ClienteCrear },
  { path: 'cliente/editar', component: ClienteEdit },
  //Empleados
  { path: 'empleados/listado', component: EmpleadosListado },
  { path: 'empleados/crear', component: EmpleadosCrear },
  { path: 'empleados/editar', component: EmpleadosEdit },
  //Proveedor
  { path: 'proveedores/listado', component: ProveedorListado },
  { path: 'proveedores/crear', component: ProveedorRegistrar },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
