import { useState } from "react";
import { createCategory } from "../api/categories";
import type { Category } from "../types/category";

export default function CategoryForm({ onCreated }: { onCreated: (c: Category) => void }) {
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [guardando, setGuardando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault();

    if (!codigo.trim() || !nombre.trim()) return;
    setGuardando(true);


    try {
    const nuevaCategoria: Category = {codigo, nombre, descripcion};
      const creada = await createCategory(nuevaCategoria);
      onCreated(creada); // refresca lista en el padre
      setCodigo(""); setNombre(""); setDescripcion("");
      console.log("ENVIANDO UNA SOLA VEZ", nuevaCategoria);
    } catch (err) {
      console.error("Error creando categoría", err);
    } finally {
      setGuardando(false);
    }

  };

  return (
    <div className="card mt-4">
      <div className="card-header bg-primary text-white fw-bold">
        Nueva Categoría
      </div>

      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="codigo" className="form-label">Código</label>
            <input type="text" className="form-control w-50" value={codigo} onChange={(e) => setCodigo(e.target.value)} id="codigo" />
          </div>

          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control w-50" value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombre" />
          </div>

          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">Descripción</label>
            <textarea className="form-control w-50" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} id="descripcion" rows={3}></textarea>
          </div>

          <button type="submit" className="btn btn-dark" disabled={guardando || !codigo.trim() || !nombre.trim()}>Crear Categoría</button>
        </form>
      </div>
    </div>
  );
}
