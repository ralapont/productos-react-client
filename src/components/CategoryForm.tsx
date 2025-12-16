import { useState } from "react";
import { createCategory } from "../api/categories";
import type { Category } from "../types/category";

export default function CategoryForm({ onCreated }: { onCreated: (c: Category) => void }) {
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nueva = await createCategory({ codigo, nombre, descripcion });
    onCreated(nueva);
    setCodigo(""); setNombre(""); setDescripcion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={codigo} onChange={(e) => setCodigo(e.target.value)} placeholder="Código" />
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
      <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Descripción" />
      <button type="submit">Crear Categoría</button>
    </form>
  );
}
