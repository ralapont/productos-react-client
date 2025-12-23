import type { Category } from "../types/category";

export default function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <div className="card mt-4">
      <div className="card-header fw-bold" style={{ backgroundColor: "#e9ecef" }}>
        Categorías
      </div>

      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id ?? cat.codigo}>
                <td>{cat.codigo}</td>
                <td>{cat.nombre}</td>
                <td>{cat.descripcion || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
