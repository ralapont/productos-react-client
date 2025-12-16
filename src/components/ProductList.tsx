import type { Product } from "../types/product";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <strong>{p.nombre}</strong> ({p.codigo}) - {p.precio_unitario}€
          {p.descripcion && <> | {p.descripcion}</>}
        </li>
      ))}
    </ul>
  );
}
