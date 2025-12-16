// src/types/product.ts
import type { Category } from "./category";

export interface Product {
  id?: number;
  codigo: string;
  nombre: string;
  descripcion?: string;
  precio_unitario: number;   // en TS usamos number (aunque en backend sea Decimal)
  categoria_id?: number;
  category?: Category;       // relación inversa
}
