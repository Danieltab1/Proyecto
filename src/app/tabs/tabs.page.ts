import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel} from '@ionic/angular/standalone';
import { LanguageService } from '.././services/language.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel,
    CommonModule, FormsModule
  ]
})

export class TabsPage {
  constructor(private lang: LanguageService) {}

  t(key: string) {
    return this.lang.t(key);
  }
}
