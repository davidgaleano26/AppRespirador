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
  numberFive:any;
  result:any;


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
    let numberOne = parseFloat(this.numberOne);
    let numberTwo = parseFloat(this.numberTwo);
    let numberThree = parseFloat(this.numberThree);
    let numberFour = parseFloat(this.numberFour);
    let numberFive = parseFloat(this.numberFive);

    this.result = numberOne + numberTwo +numberThree +numberFour +numberFive;

  }

}
