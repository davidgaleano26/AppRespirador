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

  modalReady = false;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  salirSin(){
    this.modalCtrl.dismiss();
  }
  ngAfterViewInit() {
    setTimeout(()=>{
      this.modalReady = true;
    }, 2300)
  }


}
