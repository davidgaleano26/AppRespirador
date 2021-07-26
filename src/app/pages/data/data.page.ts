import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ResultsPage } from '../results/results.page';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  loading: HTMLIonLoadingElement;
  modal: HTMLIonModalElement;
  constructor(private modalCtrl: ModalController, private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }
  async results(){
    this.loadingPage();
    this.modal = await this.modalCtrl.create({
      component:ResultsPage,
      cssClass:'cal-modal',
      backdropDismiss:false,
      componentProps:{
        Resultado:'50%',
      }


    });


    await this.modal.present();

  }
   async loadingPage(){
    this.loading = await this.loadingCtrl.create({
      message: 'Calculando...',

    });

    setTimeout(()=>{
      this.loading.dismiss();
    },2000);
    await this.loading.present();
  }

}
