import type { Category } from "../types/category";

export default function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <ul>
      {categories.map((c) => (
        <li key={c.id}>
          <strong>{c.nombre}</strong> ({c.codigo}) - {c.descripcion}
        </li>
      ))}
    </ul>
  );
}
