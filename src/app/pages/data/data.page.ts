import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResultsPage } from '../results/results.page';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async results(){
    const modal = await this.modalCtrl.create({
      component:ResultsPage,
      componentProps:{
        Resultado:'50%',
      }

    });

    await modal.present();
  }

}
