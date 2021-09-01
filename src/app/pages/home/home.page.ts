import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';

import { InstitutionPage } from '../institution/institution.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loading: HTMLIonLoadingElement;
  modal: HTMLIonModalElement;

  constructor(public menuCtrl: MenuController,private modalCtrl: ModalController,private loadingCtrl:LoadingController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  async institution(){
    this.loadingPage();
    this.modal = await this.modalCtrl.create({
      component:InstitutionPage,
      cssClass:'modalHospitals',
      backdropDismiss:false,
      componentProps:{

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
