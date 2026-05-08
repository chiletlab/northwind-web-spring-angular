import { Categoria } from './categoria';
import { Proveedor } from './proveedor';

export interface Producto {
  productId?: number;
  productName: string;
  supplierId: number;
  categoryId: number;
  quantityPerUnit: string;
  unitPrice: number;
  unitsInStock: number;
  unitsOnOrder: number;
  reorderLevel: number;
  discontinued: boolean;
  objCategoria?: Categoria;
  objProveedor?: Proveedor;
}
