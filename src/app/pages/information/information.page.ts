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
        titulo: '<strong>Derechos de autor</strong>'
      }
    ];
  constructor() { }

  ngOnInit() {
  }

}
