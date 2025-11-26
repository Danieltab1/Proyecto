export interface Personaje {
  id: string;
  nombre: string;
  alias: string;
  universo: 'Marvel' | 'DC' | 'Otro';
  afiliacion: 'Heroe' | 'Villano';
  estadisticasPoder: {inteligencia: number, fuerza: number, velocidad: number};
  etiquetas?: Etiqueta[] | string[];
  debilidades: string[];
  primeraAparicion: number;
  rating: number;
  imagen: string;
  descripcion: string;
}

export type Etiqueta =
  | 'Lider'
  | 'Tecnologico'
  | 'Mistico'
  | 'Mutante'
  | 'Cosmico'
  | 'Mentalista'
  | 'Callejero'
  | 'Velocista'
  | 'Superfuerza'
  | 'Agilidad'
  | 'Estratega'
  | 'Humano'
  | 'Dios'
  | 'Vigilante'
  | 'Impulsivo'
  | 'Oscuro'
  | 'Redimido'
  | 'Mercenario'
  | 'Armadura avanzada'
  | 'Asesino entrenado'
  | 'Genio criminal'
  | 'Manipulador'
  | 'Mistico oscuro'
  | 'Psicopata'
  | 'Tirano'
  | 'Tecnologico maligno';
