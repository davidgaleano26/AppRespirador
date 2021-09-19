import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

    
   setResultColor(result) {
     
    result = parseInt(this.Resultado);

    if (result >= 0 && result < 5)return 'green';
    else if (result >= 5 && result < 10) return 'yellow';
    else if (result >= 10 && result < 15) return  'orange';
    else return  'red';
    
    }






    
   }


