import { Component, OnInit, ViewChild } from '@angular/core';
import { Personaje } from '../models/personaje.model';
import { PersonajesService } from '../services/personajes';
import { IonSelect, IonSelectOption, IonItem, IonChip} from '@ionic/angular/standalone';
import { InfiniteScrollCustomEvent, IonTitle, IonToolbar, IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonHeader, IonButtons, IonButton, IonIcon, } from '@ionic/angular/standalone';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { LanguageService } from '.././services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ IonSelect, IonSelectOption, IonItem, IonChip, IonTitle, IonToolbar, IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonHeader, IonButtons, IonButton, IonIcon,  NgFor, NgIf, NgClass],
})

export class Homepage implements OnInit {

  favoritoEstado: boolean = false;

  @ViewChild('selectFiltros', { static: false }) selectFiltros!: IonSelect;

  listaPersonajes: Personaje[] = [];
  personajesMostrados: Personaje[] = [];
  personajeSeleccionado: Personaje | null = null;

  private indiceActual: number = 0;
  private cantidadPorLote: number = 15;

  universoFiltro: string = '';
  afiliacionFiltro: string = '';
  etiquetasFiltro: string[] = [];
  ordenamiento: 'A-Z' | 'Z-A' | '' = '';

  etiquetasLista: string[] = [];

  constructor(private servicioPersonajes: PersonajesService, private servicioIdioma: LanguageService) {}
  
  traducir(clave: string) {
    return this.servicioIdioma.t(clave);
  }
  ngOnInit() {
    this.listaPersonajes = this.servicioPersonajes.getPersonajes();
    this.obtenerListaEtiquetas();
    this.cargarMasDatos();
  }

  obtenerListaEtiquetas() {
    const conjuntoEtiquetas = new Set<string>();
    this.listaPersonajes.forEach(personaje => {
      personaje.etiquetas?.forEach(etiqueta => conjuntoEtiquetas.add(etiqueta));
    });
    this.etiquetasLista = Array.from(conjuntoEtiquetas);
  }

  cargarMasDatos(evento?: any) {
    const inicio = this.indiceActual;
    const fin = this.indiceActual + this.cantidadPorLote;
    const nuevosPersonajes = this.listaPersonajes.slice(inicio, fin);
    this.personajesMostrados.push(...nuevosPersonajes);
    this.indiceActual = fin;

    if (evento) {
      setTimeout(() => {
        evento.target.complete();
        if (this.indiceActual >= this.listaPersonajes.length) {
          evento.target.disabled = true;
        }
      }, 600);
    }
  }

  alScrollInfinito(evento: InfiniteScrollCustomEvent) {
    this.cargarMasDatos(evento);
  }

  buscarPersonaje(evento: any) {
    const textoBusqueda = evento.target.value.toLowerCase();

    if (!textoBusqueda || textoBusqueda.trim() === '') {
      this.personajesMostrados = [];
      this.indiceActual = 0;
      this.cargarMasDatos();
      return;
    }

    this.personajesMostrados = this.listaPersonajes.filter(personaje =>
      personaje.nombre.toLowerCase().includes(textoBusqueda) ||
      personaje.alias.toLowerCase().includes(textoBusqueda) ||
      personaje.afiliacion.toLowerCase().includes(textoBusqueda) ||
      personaje.universo.toLowerCase().includes(textoBusqueda)
    );
  }
  
  abrirMenuFiltros() {
    this.selectFiltros.open();
  }

  aplicarFiltroSeleccionado(evento: any) {
    const valorSeleccionado = evento.detail.value;

    if (valorSeleccionado === 'Limpiar') {
      this.universoFiltro = '';
      this.afiliacionFiltro = '';
      this.etiquetasFiltro = [];
      this.ordenamiento = '';
      this.aplicarFiltrosCombinados();
      return;
    }

    if (Array.isArray(valorSeleccionado)) {
      this.etiquetasFiltro = valorSeleccionado;
      this.aplicarFiltrosCombinados();
      return;
    }

    const [tipoFiltro, valorFiltro] = valorSeleccionado.split(':');

    switch (tipoFiltro) {
      case 'universo':
        this.universoFiltro = valorFiltro;
        break;
      case 'afiliacion':
        this.afiliacionFiltro = valorFiltro;
        break;
      case 'orden':
        this.ordenamiento = valorFiltro as 'A-Z' | 'Z-A';
        break;
    }

    this.aplicarFiltrosCombinados();
  }
  
  alternarEtiqueta(etiqueta: string) {
    if (this.etiquetasFiltro.includes(etiqueta)) {
      this.etiquetasFiltro = this.etiquetasFiltro.filter(e => e !== etiqueta);
    } else {
      this.etiquetasFiltro.push(etiqueta);
    }
    this.aplicarFiltrosCombinados();
  }

  aplicarFiltrosCombinados() {
    let resultadoFiltrado = [...this.listaPersonajes];

    if (this.universoFiltro) {
      resultadoFiltrado = resultadoFiltrado.filter(personaje =>
        personaje.universo.toLowerCase() === this.universoFiltro.toLowerCase()
      );
    }
    if (this.afiliacionFiltro) {
      const afiliacionFormateada = this.afiliacionFiltro.toLowerCase().replace(/[- ]/g, '');
      resultadoFiltrado = resultadoFiltrado.filter(personaje => 
        personaje.afiliacion.toLowerCase().replace(/[- ]/g, '') === afiliacionFormateada
      );
    }
    if (this.etiquetasFiltro.length > 0) {
      resultadoFiltrado = resultadoFiltrado.filter(personaje =>
        this.etiquetasFiltro.every(etiqueta =>
          (personaje.etiquetas ?? []).includes(etiqueta))
      );
    }
    if (this.ordenamiento === 'A-Z') {
      resultadoFiltrado = [...resultadoFiltrado].sort((a, b) => a.nombre.localeCompare(b.nombre));
    }
    if (this.ordenamiento === 'Z-A') {
      resultadoFiltrado = [...resultadoFiltrado].sort((a, b) => b.nombre.localeCompare(a.nombre));
    }
    this.personajesMostrados = resultadoFiltrado;
  }

  hayFiltrosActivos() {
    return (
      this.universoFiltro !== '' ||
      this.afiliacionFiltro !== '' ||
      this.etiquetasFiltro.length > 0 ||
      this.ordenamiento !== ''
    );
  }

  eliminarFiltro(tipoFiltro: string, valorFiltro: string) {
    switch (tipoFiltro) {
      case 'universo':
        this.universoFiltro = '';
        break;
      case 'afiliacion':
        this.afiliacionFiltro = '';
        break;
      case 'etiqueta':
        this.etiquetasFiltro = this.etiquetasFiltro.filter(e => e !== valorFiltro);
        break;
      case 'orden':
        this.ordenamiento = '';
        break;
      }
    this.aplicarFiltrosCombinados();
  }

   expandirTarjeta(personaje: Personaje) {
    this.personajeSeleccionado = personaje;
    this.favoritoEstado = this.servicioPersonajes.esFavorito(personaje.id);
  }

  gestionarFavorito() {
    if (this.personajeSeleccionado) {
      this.favoritoEstado = this.servicioPersonajes.toggleFavorito(this.personajeSeleccionado.id);
      this.mostrarMensajeFavorito();
    }
  }

  private mostrarMensajeFavorito() {
    console.log(this.favoritoEstado ? 'Agregado a favoritos' : 'Removido de favoritos');
  }

  cerrarVistaDetallada() {
    this.personajeSeleccionado = null;
    this.favoritoEstado = false;
  }
}