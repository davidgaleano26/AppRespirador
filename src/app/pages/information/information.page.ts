import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

    slides = [
      {
        img: 'assets/img/img-doctors.svg',
        titulo: '<strong>ABCDMed Score </strong>'
      },
      {
        img: 'assets/img/img-doctor2.svg',
        titulo: '<strong>¿Como se usa?</strong><br><h3>Se añaden a la tabla de calcular los datos requeridos para poder saber el resultado, una vez puestos el app calculará el porcentaje de falla en la extubacion</h3>'
      },
      {
        img: 'assets/img/img-author.svg',
        titulo: '<strong>Derechos de autor</strong> <br> <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nd/4.0/88x31.png" /></a><br />Este obra está bajo una <a rel="license" href="http://creativecommons.org/licenses/by-nd/4.0/">licencia de Creative Commons Reconocimiento-SinObraDerivada 4.0 Internacional</a>. <h5>Developed by: David Galeano - Hollman Rojas</h5>'
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
