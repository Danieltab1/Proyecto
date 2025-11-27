import { Injectable } from '@angular/core';
import { Personaje } from '../models/personaje.model';

@Injectable({
  providedIn: 'root',
})

export class PersonajesService {

  private readonly FAVORITOS_KEY = 'personajes_favoritos';
  private personajes: Personaje[] = [
    // Heroes Marvel //
    {
  id: 'Ant-Man',
  nombre: 'Ant-Man',
  alias: 'Scott Lang / Hank Pym',
  universo: 'Marvel',
  afiliacion: 'Heroe',
  estadisticasPoder: {inteligencia: 85, fuerza: 65, velocidad: 50},
  etiquetas: ['Tecnologico', 'Agilidad', 'Estratega', 'Humano', 'Armadura avanzada'],
  debilidades: ['Limitaciones del traje', 'Problemas de escala', 'Conflicto con la ley'],
  primeraAparicion: 1962,
  rating: 4.5,
  imagen: 'assets/img/atman.jpg',
  descripcion: 'Un héroe que puede cambiar de tamaño utilizando tecnología de partículas Pym.',
},
{
  id: 'Black-Panther',
  nombre: 'Black Panther',
  alias: "T'Challa",
  universo: 'Marvel',
  afiliacion: 'Heroe',
  estadisticasPoder: {inteligencia: 90, fuerza: 75, velocidad: 80},
  etiquetas: ['Lider', 'Tecnologico', 'Agilidad', 'Estratega', 'Humano'],
  debilidades: ['Responsabilidad real', 'Protección de Wakanda', 'Presión política'],
  primeraAparicion: 1966,
  rating: 4.7,
  imagen: 'assets/img/blackpanther.jpg',
  descripcion: 'El rey de Wakanda que posee habilidades mejoradas y tecnología avanzada.',
},
{
  id: 'Apocalypse',
  nombre: 'Apocalypse',
  alias: 'En Sabah Nur',
  universo: 'Marvel',
  afiliacion: 'Villano',
  estadisticasPoder: {inteligencia: 95, fuerza: 90, velocidad: 70},
  etiquetas: ['Mutante', 'Superfuerza', 'Estratega', 'Oscuro', 'Tirano'],
  debilidades: ['Arrogancia extrema', 'Tecnología celestial', 'Poderes cósmicos'],
  primeraAparicion: 1986,
  rating: 4.8,
  imagen: 'assets/img/apocalypse.jpg',
  descripcion: 'El primer mutante que busca purgar la humanidad débil mediante la evolución forzada.',
},
{
  id: 'Carnage',
  nombre: 'Carnage',
  alias: 'Cletus Kasady',
  universo: 'Marvel',
  afiliacion: 'Villano',
  estadisticasPoder: {inteligencia: 70, fuerza: 85, velocidad: 75},
  etiquetas: ['Callejero', 'Agilidad', 'Impulsivo', 'Psicopata', 'Simbionte'],
  debilidades: ['Fuego', 'Sonidos intensos', 'Inestabilidad mental extrema'],
  primeraAparicion: 1992,
  rating: 4.6,
  imagen: 'assets/img/carnage.jpg',
  descripcion: 'Un simbionte rojo unido a un asesino psicópata, creando un ser de pura maldad.',
},
{
  id: 'Batgirl',
  nombre: 'Batgirl',
  alias: 'Barbara Gordon',
  universo: 'DC',
  afiliacion: 'Heroe',
  estadisticasPoder: {inteligencia: 90, fuerza: 30, velocidad: 45},
  etiquetas: ['Callejero', 'Agilidad', 'Estratega', 'Humano', 'Tecnologico'],
  debilidades: ['Limitaciones humanas', 'Lesión física (paraplejía temporal)'],
  primeraAparicion: 1967,
  rating: 4.6,
  imagen: 'assets/img/batgirl.webp',
  descripcion: 'Una habilidosa luchadora y estratega que protege Gotham como Batgirl u Oracle.',
},
{
  id: 'Batwoman',
  nombre: 'Batwoman',
  alias: 'Kate Kane',
  universo: 'DC',
  afiliacion: 'Heroe',
  estadisticasPoder: {inteligencia: 85, fuerza: 40, velocidad: 45},
  etiquetas: ['Callejero', 'Agilidad', 'Estratega', 'Humano', 'Militar'],
  debilidades: ['Conflictos familiares', 'Limitaciones humanas', 'Relación con Batman'],
  primeraAparicion: 1956,
  rating: 4.5,
  imagen: 'assets/img/batwoman.jpg',
  descripcion: 'Una miembro de la familia Kane que lucha contra el crimen en Gotham con su propio estilo.',
},
{
  id: 'Bane',
  nombre: 'Bane',
  alias: 'Bane',
  universo: 'DC',
  afiliacion: 'Villano',
  estadisticasPoder: {inteligencia: 90, fuerza: 95, velocidad: 50},
  etiquetas: ['Callejero', 'Superfuerza', 'Estratega', 'Humano', 'Genio criminal'],
  debilidades: ['Dependencia de Venom (clásico)', 'Vulnerabilidad táctica'],
  primeraAparicion: 1993,
  rating: 4.7,
  imagen: 'assets/img/bane.jpg',
  descripcion: 'Un genio estratégico con fuerza sobrehumana que una vez rompió el espalda de Batman.',
},
{
  id: 'Black-Adam',
  nombre: 'Black Adam',
  alias: 'Teth-Adam',
  universo: 'DC',
  afiliacion: 'Villano',
  estadisticasPoder: {inteligencia: 85, fuerza: 100, velocidad: 90},
  etiquetas: ['Mistico', 'Superfuerza', 'Lider', 'Dios', 'Redimido'],
  debilidades: ['Magia', 'Debilidad a la electricidad mágica', 'Conflictos morales'],
  primeraAparicion: 1945,
  rating: 4.7,
  imagen: 'assets/img/black_adam.jpg',
  descripcion: 'Un antiguo campeón egipcio que posee poderes similares a Shazam pero con una moralidad cuestionable.',
}
  ];

  constructor() {}

  getPersonajes(): Personaje[] {
    return this.personajes;
  }

  searchPersonajesByName(name: string): Personaje[] {
    return this.personajes.filter((personaje) =>
      personaje.nombre.toLowerCase().includes(name.toLowerCase()) ||
      personaje.alias.toLowerCase().includes(name.toLowerCase())
    );
  }

  getFavoritos(): string[] {
    const favoritos = localStorage.getItem(this.FAVORITOS_KEY);
    return favoritos ? JSON.parse(favoritos) : [];
  }

  guardarFavoritos(favoritos: string[]): void {
    localStorage.setItem(this.FAVORITOS_KEY, JSON.stringify(favoritos));
  }

  toggleFavorito(personajeId: string): boolean {
    const favoritos = this.getFavoritos();
    const index = favoritos.indexOf(personajeId);
    
    if (index > -1) {
      favoritos.splice(index, 1);
      this.guardarFavoritos(favoritos);
      return false;
    } else {
      favoritos.push(personajeId);
      this.guardarFavoritos(favoritos);
      return true;
    }
  }

  esFavorito(personajeId: string): boolean {
    const favoritos = this.getFavoritos();
    return favoritos.includes(personajeId);
  }

  getPersonajesFavoritos(): Personaje[] {
    const favoritosIds = this.getFavoritos();
    const todosPersonajes = this.getPersonajes();
    return todosPersonajes.filter(p => favoritosIds.includes(p.id));
  }
}