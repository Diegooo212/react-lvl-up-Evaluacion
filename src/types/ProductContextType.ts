// src/types/ProductContextType.ts
import { Product } from './Product';

// Esto define la "forma" de nuestro contexto
export interface ProductContextType {
  products: Product[]; // La lista de todos los productos
  addProduct: (product: Product) => void;
  updateProduct: (updatedProduct: Product) => void;
  deleteProduct: (productId: string | number) => void;
}