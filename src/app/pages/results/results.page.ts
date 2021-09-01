import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataPage } from '../data/data.page';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  porcentaje = 0.5;
  @Input() Resultado;
  @Input() resultTwo;
  @Input() resultP;



  modalReady = false;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.Resultado);

  }
  salirSin() {
    this.modalCtrl.dismiss();

  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 2300)
  }

  setResultColor(Result) {
    if (Result < '5') {
      return 'red';
    } else if (Result >= '5' && Result < '10') {
      return 'yellow';
    } else if (Result >= '10' && Result < '15') {
      return 'orange';
    } else {
      return 'green';
    }

  }
  // setResultColo(Result) {
  //   switch (Result) {
  //     case (Result < '5'):
  //       return 'green';
  //     case (Result >= '5' && Result < '10'):
  //       return 'yellow';
  //     case (Result >= '10' && Result < '15'):
  //       return 'orange';
  //     case (Result >= '15'):
  //       return 'red';
  //   }
  // }

}
