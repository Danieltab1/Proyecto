import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor() {}

  async ngOnInit() {
    
    StatusBar.setOverlaysWebView({ overlay: false});
    StatusBar.setStyle({ style: Style.Light });
    StatusBar.setBackgroundColor({ color: 'ffffff'})
  }
}
