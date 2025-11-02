// src/types/AuthContextType.ts

export interface UserProfile {
  firstName: string;
  lastName: string;
  street: string;
  department?: string; 
  regionId: string;
  comunaId: string;
  indications?: string; 
}

export interface User {
  email: string;
  role: 'user' | 'admin';
  profile?: UserProfile; 
}

export interface AuthContextType {
  currentUser: User | null;
  login: (email: string, role: 'user' | 'admin') => void;
  logout: () => void;
  updateUserProfile: (profile: UserProfile) => void; 
}