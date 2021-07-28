import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    
    { title: 'Inicio', url: '/home', icon: "home" },
    { title: 'Calcular', url: '/data', icon: "calculator" },
    { title: 'Información', url: '/information', icon: "information-circle" },
    { title: 'Contacto', url: '/contact', icon: "call" },
    
    
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
