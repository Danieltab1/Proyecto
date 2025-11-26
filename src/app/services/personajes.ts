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
      id: 'Spider-Man',
      nombre: 'Spider-Man',
      alias: 'Peter Parker',
      universo: 'Marvel',
      afiliacion: 'Heroe',
      estadisticasPoder: {inteligencia: 90, fuerza: 55, velocidad: 60},
      etiquetas: ['Callejero', 'Agilidad', 'Estratega', 'Humano', 'Vigilante'],
      debilidades: ['Responsabilidad moral', 'Ataques sónicos', 'Antiveneno', 'Conflictos personales'],
      primeraAparicion: 1962,
      rating: 4.8,
      imagen: 'assets/img/spiderman.jpg',
      descripcion: 'Un joven con habilidades arácnidas que lucha contra el crimen en Nueva York.',      
    },
    {
      id: 'Iron Man',
      nombre: 'Iron Man',
      alias: 'Tony Stark',
      universo: 'Marvel',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 95, fuerza: 85, velocidad: 70 },
      etiquetas: ['Lider', 'Tecnologico', 'Estratega', 'Humano', 'Armadura avanzada'],
      debilidades: ['Dependencia tecnológica', 'Problemas cardíacos (clásicos)', 'Arrogancia'],
      primeraAparicion: 1963,
      rating: 4.7,
      imagen: 'assets/img/ironman.jpg',
      descripcion: 'Un genio multimillonario que utiliza una armadura avanzada para combatir el mal.'
    },
    {
      id: 'Thor',
      nombre: 'Thor',
      alias: 'Thor Odinson',
      universo: 'Marvel',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 65, fuerza: 100, velocidad: 90 },
      etiquetas: ['Cosmico', 'Superfuerza', 'Agilidad', 'Dios', 'Impulsivo', 'Oscuro'],
      debilidades: ['Arrogancia', 'Dependencia emocional', 'Magias superiores'],
      primeraAparicion: 1962,
      rating: 4.8,
      imagen: 'assets/img/thor.jpg',
      descripcion: 'El dios del trueno de Asgard, que protege la Tierra con su poderoso martillo Mjolnir.'
    },
    {
      id: 'Captain America',
      nombre: 'Captain America',
      alias: 'Steve Rogers',
      universo: 'Marvel',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 85, fuerza: 65, velocidad: 60 },
      etiquetas: ['Lider', 'Superfuerza', 'Agilidad', 'Estratega', 'Humano'],
      debilidades: ['Moral inflexible', 'Vulnerabilidad humana'],
      primeraAparicion: 1941,
      rating: 4.7,
      imagen: 'assets/img/captainamerica.jpg',
      descripcion: 'Un super soldado que lucha por la justicia y la libertad durante la Segunda Guerra Mundial.'
    },
    {
      id: 'Hulk',
      nombre: 'Hulk',
      alias: 'Bruce Banner',
      universo: 'Marvel',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 60, fuerza: 100, velocidad: 70 },
      etiquetas: ['Mutante', 'Superfuerza', 'Humano', 'Impulsivo'],
      debilidades: ['Control emocional', 'Manipulación mental', 'Transformación involuntaria'],
      primeraAparicion: 1962,
      rating: 4.6,
      imagen: 'assets/img/hulk.jpg',
      descripcion: 'Un científico que se transforma en un gigante verde y poderoso cuando se enfurece.'
    },
    {
      id: 'Black Widow',
      nombre: 'Black Widow',
      alias: 'Natasha Romanoff',
      universo: 'Marvel',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 85, fuerza: 30, velocidad: 40 },
      etiquetas: ['Callejero', 'Velocista', 'Agilidad', 'Estratega', 'Humano'],
      debilidades: ['Vulnerabilidad humana', 'Traumas del pasado'],
      primeraAparicion: 1964,
      rating: 4.6,
      imagen: 'assets/img/blackwidow.jpg',
      descripcion: 'Una espía y experta en artes marciales que trabaja para S.H.I.E.L.D.'
    },
    {
      id: 'Hawkeye',
      nombre: 'Hawkeye',
      alias: 'Clint Barton',
      universo: 'Marvel',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 75, fuerza: 25, velocidad: 35 },
      etiquetas: ['Agilidad', 'Estratega', 'Humano', 'Vigilante'],
      debilidades: ['Limitaciones humanas', 'Pérdida auditiva (clásica)'],
      primeraAparicion: 1964,
      rating: 4.5,
      imagen: 'assets/img/hawkeye.jpg',
      descripcion: 'Un arquero excepcionalmente hábil y miembro de los Vengadores.'
    },
    {
      id: 'Doctor Strange',
      nombre: 'Doctor Strange',
      alias: 'Stephen Strange',
      universo: 'Marvel',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 95, fuerza: 40, velocidad: 60 },
      etiquetas: ['Mistico', 'Estratega', 'Humano', 'Vigilante', 'Redimido'],
      debilidades: ['Limitaciones físicas', 'Gasto de energía mágica'],
      primeraAparicion: 1963,
      rating: 4.8,
      imagen: 'assets/img/doctorstrange.jpg',
      descripcion: 'Un ex neurocirujano que se convierte en el Hechicero Supremo, protegiendo la Tierra de amenazas místicas.'
    },

    // Villanos Marvel //
    {
      id: 'Loki',
      nombre: 'Loki',
      alias: 'Loki Laufeyson',
      universo: 'Marvel',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 90, fuerza: 60, velocidad: 70 },
      etiquetas: ['Cosmico', 'Mentalista', 'Dios', 'Estratega', 'Redimido'],
      debilidades: ['Orgullo', 'Necesidad de validación', 'Magias superiores'],
      primeraAparicion: 1949,
      rating: 4.7,
      imagen: 'assets/img/loki.jpg',
      descripcion: 'El dios de las mentiras y el engaño, hermano adoptivo de Thor.'
    },
    {
      id: 'Thanos',
      nombre: 'Thanos',
      alias: 'Thanos',
      universo: 'Marvel',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 95, fuerza: 100, velocidad: 70 },
      etiquetas: ['Cosmico', 'Superfuerza', 'Estratega', 'Oscuro', 'Psicopata', 'Tirano'],
      debilidades: ['Arrogancia', 'Obsesión con el equilibrio', 'Ser emocionalmente predecible'],
      primeraAparicion: 1973,
      rating: 4.9,
      imagen: 'assets/img/thanos.jpg',
      descripcion: 'Un titán loco obsesionado con el equilibrio universal, conocido por reunir las Gemas del Infinito.'
    },
    {
      id: 'Green Goblin',
      nombre: 'Green Goblin',
      alias: 'Norman Osborn',
      universo: 'Marvel',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 90, fuerza: 55, velocidad: 60 },
      etiquetas: ['Agilidad', 'Humano', 'Impulsivo', 'Armadura avanzada', 'Tecnologico maligno'],
      debilidades: ['Inestabilidad mental', 'Obsesión con Spider-Man'],
      primeraAparicion: 1964,
      rating: 4.6,
      imagen: 'assets/img/greengoblin.jpg',
      descripcion: 'Un empresario loco y archienemigo de Spider-Man.'
    },
    {
      id: 'Doctor Octopus',
      nombre: 'Doctor Octopus',
      alias: 'Otto Octavius',
      universo: 'Marvel',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 95, fuerza: 40, velocidad: 40 },
      etiquetas: ['Tecnologico', 'Agilidad', 'Humano', 'Armadura avanzada', 'Tecnologico maligno'],
      debilidades: ['Ego extremo', 'Dependencia de los brazos mecánicos'],
      primeraAparicion: 1963,
      rating: 4.6,
      imagen: 'assets/img/doctoroctopus.jpg',
      descripcion: 'Un científico con brazos mecánicos que se convierte en un enemigo de Spider -Man.'
    },
    {
      id: 'Magneto',
      nombre: 'Magneto',
      alias: 'Erik Lehnsherr',
      universo: 'Marvel',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 90, fuerza: 80, velocidad: 60 },
      etiquetas: ['Lider', 'Mutante', 'Mentalista', 'Manipulador'],
      debilidades: ['Emociones ligadas a su pasado', 'Uso excesivo del poder afecta su cuerpo'],
      primeraAparicion: 1963,
      rating: 4.8,
      imagen: 'assets/img/magneto.jpg',
      descripcion: 'Un mutante con la capacidad de controlar el magnetismo y líder de los Hermanos Mutantes.'
    },
    {
      id: 'Red Skull',
      nombre: 'Red Skull',
      alias: 'Johann Schmidt',
      universo: 'Marvel',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 85, fuerza: 30, velocidad: 30 },
      etiquetas: ['Lider', 'Mutante', 'Oscuro', 'Genio criminal', 'Mistico oscuro'],
      debilidades: ['Obsesión ideológica', 'Vulnerabilidad humana'],
      primeraAparicion: 1941,
      rating: 4.5,
      imagen: 'assets/img/redskull.jpg',
      descripcion: 'Un líder nazi y archienemigo del Capitán América.'
    },
    {
      id: 'Ultron',
      nombre: 'Ultron',
      alias: 'Ultron',
      universo: 'Marvel',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 100, fuerza: 90, velocidad: 80 },
      etiquetas: ['Estratega', 'Armadura avanzada', 'Genio criminal', 'Psicopata', 'Tecnologico maligno'],
      debilidades: ['Ego digital', 'Obsesión con la humanidad', 'Vulnerable a virus avanzados'],
      primeraAparicion: 1968,
      rating: 4.7,
      imagen: 'assets/img/ultron.jpg',
      descripcion: 'Una inteligencia artificial malvada creada por Tony Stark que busca la destrucción de la humanidad.'
    },

    // Heroes DC //
    {
      id: 'Superman',
      nombre: 'Superman',
      alias: 'Clark Kent',
      universo: 'DC',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 85, fuerza: 100, velocidad: 100 },
      etiquetas: ['Mutante', 'Superfuerza', 'Agilidad', 'Tecnologico maligno'],
      debilidades: ['Kryptonita', 'Magia'],
      primeraAparicion: 1938,
      rating: 4.9,
      imagen: 'assets/img/superman.jpg',
      descripcion: 'Un extraterrestre del planeta Krypton con superpoderes que protege la Tierra.'
    },
    {
      id: 'Batman',
      nombre: 'Batman',
      alias: 'Bruce Wayne',
      universo: 'DC',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 100, fuerza: 40, velocidad: 40 },
      etiquetas: ['Lider', 'Callejero', 'Estratega', 'Humano', 'Vigilante', 'Oscuro'],
      debilidades: ['Limitaciones humanas', 'Traumas del pasado'],
      primeraAparicion: 1939,
      rating: 4.9,
      imagen: 'assets/img/batman.jpg',
      descripcion: 'Un vigilante enmascarado que lucha contra el crimen en Gotham City.'
    },
    {
      id: 'Wonder Woman',
      nombre: 'Wonder Woman',
      alias: 'Diana Prince',
      universo: 'DC',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 85, fuerza: 95, velocidad: 85 },
      etiquetas: ['Mistico', 'Superfuerza', 'Agilidad', 'Humano'],
      debilidades: ['Pérdida de habilidades sin sus armas', 'Vulnerabilidad a ataques mágicos altos'],
      primeraAparicion: 1941,
      rating: 4.8,
      imagen: 'assets/img/wonderwoman.jpg',
      descripcion: 'Una princesa amazona con fuerza sobrehumana y habilidades de combate excepcionales.'
    },
    {
      id: 'The Flash',
      nombre: 'The Flash',
      alias: 'Barry Allen',
      universo: 'DC',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 80, fuerza: 30, velocidad: 100 },
      etiquetas: ['Velocista', 'Agilidad', 'Humano'],
      debilidades: ['Desgaste energético', 'Viajes en el tiempo peligrosos'],
      primeraAparicion: 1956,
      rating: 4.7,
      imagen: 'assets/img/flash.jpg',
      descripcion: 'Un velocista con la capacidad de moverse a velocidades increíbles.'
    },
    {
      id: 'Aquaman',
      nombre: 'Aquaman',
      alias: 'Arthur Curry',
      universo: 'DC',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 75, fuerza: 85, velocidad: 60 },
      etiquetas: ['Mistico', 'Agilidad', 'Humano'],
      debilidades: ['Deshidratación prolongada', 'Limitado fuera del agua'],
      primeraAparicion: 1941,
      rating: 4.6,
      imagen: 'assets/img/aquaman.jpg',
      descripcion: 'El rey de Atlantis con la capacidad de comunicarse con la vida marina.'
    },
    {
      id: 'Green Lantern',
      nombre: 'Green Lantern',
      alias: 'Hal Jordan',
      universo: 'DC',
      afiliacion: 'Heroe',
      estadisticasPoder: { inteligencia: 85, fuerza: 90, velocidad: 80 },
      etiquetas: ['Cosmico', 'Agilidad', 'Estratega', 'Vigilante'],
      debilidades: ['Dependencia del anillo', 'Inestabilidad emocional'],
      primeraAparicion: 1959,
      rating: 4.7,
      imagen: 'assets/img/greenlantern.jpg',
      descripcion: 'Un miembro del Cuerpo de Green Lanterns que utiliza un anillo de poder para crear construcciones de energía verde.'
    },

    // Villanos DC //
    {
      id: 'Joker',
      nombre: 'Joker',
      alias: 'Desconocido',
      universo: 'DC',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 90, fuerza: 20, velocidad: 20 },
      etiquetas: ['Callejero', 'Estratega', 'Humano', 'Impulsivo', 'Genio criminal', 'Manipulador', 'Psicopata'],
      debilidades: ['Inestabilidad mental extrema'],
      primeraAparicion: 1940,
      rating: 4.9,
      imagen: 'assets/img/joker.jpg',
      descripcion: 'Un criminal psicópata y archienemigo de Batman.'
    },
    {
      id: 'Darkseid',
      nombre: 'Darkseid',
      alias: 'Darkseid',
      universo: 'DC',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 95, fuerza: 100, velocidad: 80 },
      etiquetas: ['Cosmico', 'Dios', 'Oscuro', 'Psicopata', 'Tirano'],
      debilidades: ['Energías superiores', 'Confianza excesiva'],
      primeraAparicion: 1970,
      rating: 4.9,
      imagen: 'assets/img/darkseid.jpg',
      descripcion: 'Un dios tirano de Apokolips que busca conquistar el universo.'
    },
    {
      id: 'Harley Quinn',
      nombre: 'Harley Quinn',
      alias: 'Harleen Quinzel',
      universo: 'DC',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 75, fuerza: 35, velocidad: 50 },
      etiquetas: ['Callejero', 'Agilidad', 'Humano', 'Impulsivo', 'Manipulador', 'Psicopata'],
      debilidades: ['Inestabilidad emocional', 'Dependencia afectiva'],
      primeraAparicion: 1992,
      rating: 4.6,
      imagen: 'assets/img/harleyquinn.jpg',
      descripcion: 'Una ex psiquiatra que se convierte en la compañera del Joker y una villana caótica.'
    },
    {
      id: 'Deathstroke',
      nombre: 'Deathstroke',
      alias: 'Slade Wilson',
      universo: 'DC',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 90, fuerza: 65, velocidad: 60 },
      etiquetas: ['Agilidad', 'Humano', 'Oscuro', 'Mercenario', 'Asesino entrenado'],
      debilidades: ['Arrogancia', 'Explosiones emocionales'],
      primeraAparicion: 1980,
      rating: 4.7,
      imagen: 'assets/img/deathstroke.jpg',
      descripcion: 'Un mercenario y asesino experto con habilidades sobrehumanas.'
    },
    {
      id: 'Brainiac',
      nombre: 'Brainiac',
      alias: 'Brainiac',
      universo: 'DC',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 100, fuerza: 90, velocidad: 75 },
      etiquetas: ['Impulsivo', 'Mistico oscuro', 'Psicopata', 'Tirano', 'Tecnologico maligno'],
      debilidades: ['Vulnerabilidad a virus', 'Rigidez lógica'],
      primeraAparicion: 1958,
      rating: 4.7,
      imagen: 'assets/img/brainiac.jpg',
      descripcion: 'Una inteligencia artificial alienígena que busca adquirir conocimiento y destruir mundos.'
    },
    {
      id: 'Sinestro',
      nombre: 'Sinestro',
      alias: 'Thaal Sinestro',
      universo: 'DC',
      afiliacion: 'Villano',
      estadisticasPoder: { inteligencia: 85, fuerza: 80, velocidad: 70 },
      etiquetas: ['Lider', 'Cosmico', 'Genio criminal', 'Mistico oscuro'],
      debilidades: ['Dependencia del anillo', 'Orgullo'],
      primeraAparicion: 1961,
      rating: 4.6,
      imagen: 'assets/img/sinestro.jpg',
      descripcion: 'Un ex Green Lantern que se convierte en un villano y líder del Cuerpo de Sinestro.'
    },
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