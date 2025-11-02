// src/types/OrderSummary.ts
import { CartItem } from './CartItem';

// Define la estructura para la información del usuario en el resumen
interface OrderUserSummary {
  email?: string; // Email es opcional si currentUser puede ser null inicialmente
  firstName?: string;
  lastName?: string;
  role?: 'user' | 'admin';
  // Añade otros campos si los recopilas
}

// Define la estructura para la dirección de envío en el resumen
interface OrderShippingAddress {
  street: string;
  department?: string; // Opcional
  regionId: string; // Guardamos el ID, podrías querer guardar el nombre también
  comunaId: string;
  indications?: string; // Opcional
}

// Define la estructura para la info de pago (solo datos seguros)
interface OrderPaymentInfo {
    cardNumberLast4: string; // Solo los últimos 4 dígitos
}

// Interfaz principal para el resumen del pedido
export interface OrderSummary {
  user: OrderUserSummary | null; // Puede ser null si algo falla
  shippingAddress: OrderShippingAddress;
  paymentInfo: OrderPaymentInfo;
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  orderDate: string; // Fecha formateada
  orderId: string; // ID simulado del pedido
}
interface OrderSummaryItem { // O la interfaz que uses para los items dentro de OrderSummary
  id: string;
  name: string;
  price: number; // Precio unitario en el momento de la compra
  img: string; // <<<--- ASEGÚRATE DE QUE ESTÉ
  cantidad: number;
}