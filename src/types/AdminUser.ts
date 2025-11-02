// src/types/AdminUser.ts

// 1. Definimos los roles de usuario
export type UserRole = 'admin' | 'user';

// 2. Definimos los estados posibles
export type UserStatus = 'Activo' | 'Suspendido';

// 3. Definimos la estructura del usuario para el panel de admin
export interface AdminUser {
  id: string; // ID único
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  dateJoined: string; // Fecha de registro (como string)
  status: UserStatus;
}