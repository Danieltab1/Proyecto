import { Component, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje.model';
import { PersonajesService } from '../../services/personajes';
import { 
  IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, 
  IonContent, IonList, IonHeader, IonIcon, IonButton
} from '@ionic/angular/standalone';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: true,
  imports: [
    IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle, 
    IonContent, IonList, IonHeader, IonIcon, IonButton,
    NgFor, NgIf, NgClass
  ]
})
export class FavoritosPage implements OnInit {
  personajesFavoritos: Personaje[] = [];
  personajeExpandido: Personaje | null = null;
  esFavorito: boolean = false;

  constructor(
    private personajesService: PersonajesService,
    private lang: LanguageService
  ) {}

  t(key: string) {
    return this.lang.t(key);
  }

  ngOnInit() {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    this.personajesFavoritos = this.personajesService.getPersonajesFavoritos();
  }

  ionViewWillEnter() {
    this.cargarFavoritos();
  }

  expandirCard(p: Personaje) {
    this.personajeExpandido = p;
    this.esFavorito = this.personajesService.esFavorito(p.id);
  }

  cerrarExpandido() {
    this.personajeExpandido = null;
    this.esFavorito = false;
  }

  toggleFavorito() {
    if (this.personajeExpandido) {
      this.esFavorito = this.personajesService.toggleFavorito(this.personajeExpandido.id);
      // Recargar la lista si se quitó de favoritos
      if (!this.esFavorito) {
        this.cargarFavoritos();
        this.cerrarExpandido();
      }
    }
  }
}