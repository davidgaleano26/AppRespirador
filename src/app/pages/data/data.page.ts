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
  numberOne:any;
  numberTwo:any;
  numberThree:any;
  numberFour:any;
  result:number;


  async results(){
    this.calculate()
    this.loadingPage();
    var toString = this.result.toString()
    this.modal = await this.modalCtrl.create({
      component:ResultsPage,
      cssClass:'cal-modal',
      backdropDismiss:false,
      componentProps:{
        Resultado:this.result,

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


  calculate(){
    let numberOne = parseInt(this.numberOne);
    let numberTwo = parseInt(this.numberTwo);
    let numberThree = parseInt(this.numberThree);
    let numberFour = parseInt(this.numberFour);

    this.result = numberOne + numberTwo +numberThree +numberFour;

  }

}
