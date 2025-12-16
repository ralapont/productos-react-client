import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import { useTienda } from "../hooks/useTienda";

export default function ProductosPage() {
  const { products, categories, addProduct, loading, error } = useTienda();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Productos</h1>
      <ProductForm categories={categories} onCreated={addProduct} />
      <ProductList products={products} />
    </div>
  );
}
