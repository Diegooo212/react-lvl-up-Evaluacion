// src/types/CartItem.ts
import { Product } from './Product';

// Definimos explícitamente los campos que queremos en el carrito
export interface CartItem {
  id: string | number;
  name: string;
  brand: string;
  price: number; // Precio unitario (puede ser el de oferta)
  img: string;
  cantidad: number;
  stock: number; // Añadimos el stock
}