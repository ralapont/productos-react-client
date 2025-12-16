import { useEffect, useState } from "react";
import { getCategories, createCategory } from "../api/categories";
import { getProducts, createProduct } from "../api/products";
import type { Category } from "../types/category";
import type { Product } from "../types/product";

export function useTienda() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos iniciales
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [cats, prods] = await Promise.all([getCategories(), getProducts()]);
        setCategories(cats);
        setProducts(prods);
      } catch (err) {
        setError("Error cargando datos de la tienda");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Crear categoría
  async function addCategory(data: Omit<Category, "id" | "products">) {
    try {
      const nueva = await createCategory(data);
      setCategories((prev) => [...prev, nueva]);
      return nueva;
    } catch (err) {
      setError("Error creando categoría");
      throw err;
    }
  }

  // Crear producto
  async function addProduct(data: Omit<Product, "id" | "category">) {
    try {
      const nuevo = await createProduct(data);
      setProducts((prev) => [...prev, nuevo]);
      return nuevo;
    } catch (err) {
      setError("Error creando producto");
      throw err;
    }
  }

  return {
    categories,
    products,
    loading,
    error,
    addCategory,
    addProduct,
  };
}
