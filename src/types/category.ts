// src/types/category.ts
import type { Product } from "./product";

export interface Category {
  id?: number;              // opcional porque puede venir del backend
  codigo: string;
  nombre: string;
  descripcion?: string;
  products?: Product[];     // relación con productos
}
