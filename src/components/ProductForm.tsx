import { useState } from "react";
import { createProduct } from "../api/products";
import type { Product } from "../types/product";
import type { Category } from "../types/category";

export default function ProductForm({ categories, onCreated }: { categories: Category[], onCreated: (p: Product) => void }) {
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [categoriaId, setCategoriaId] = useState<number | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoriaId) return;
    const nuevo = await createProduct({ codigo, nombre, descripcion, precio_unitario: precio, categoria_id: categoriaId });
    onCreated(nuevo);
    setCodigo(""); setNombre(""); setDescripcion(""); setPrecio(0); setCategoriaId(undefined);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={codigo} onChange={(e) => setCodigo(e.target.value)} placeholder="Código" />
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
      <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" />
      <input type="number" value={precio} onChange={(e) => setPrecio(Number(e.target.value))} placeholder="Precio" />
      <select value={categoriaId ?? ""} onChange={(e) => setCategoriaId(Number(e.target.value))}>
        <option value="">Selecciona categoría</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>{c.nombre}</option>
        ))}
      </select>
      <button type="submit">Crear Producto</button>
    </form>
  );
}
