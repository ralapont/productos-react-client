import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";
import { useTienda } from "../hooks/useTienda";

export default function CategoriasPage() {
  const { categories, addCategory, loading, error } = useTienda();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Categorías</h1>
      <CategoryForm onCreated={addCategory} />
      <CategoryList categories={categories} />
    </div>
  );
}
