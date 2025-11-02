// src/types/MapEvent.ts
export interface MapEvent {
  id: string | number;
  name: string;
  place: string;
  date: string; // Usaremos un string simple para la fecha (ej: "Sábado 8 de Noviembre")
  coords: [number, number]; // Formato [latitud, longitud] que usa Leaflet
}