// src/types/LocationData.ts
export interface Comuna {
  id: string; // O número si prefieres
  name: string;
}

export interface Region {
  id: string; // O número
  name: string;
  comunas: Comuna[];
}