import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController, MenuController } from '@ionic/angular';
import { InstitutionPage } from '../institution/institution.page';
import { IonProgressBar } from '@ionic/angular';


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
  modal: HTMLIonModalElement;
  loading: HTMLIonLoadingElement;



  modalReady = false;
  constructor(private modalCtrl: ModalController, private loadingCtrl:LoadingController) {
   }

  ngOnInit() {
    console.log(this.Resultado);

  }
  async salirSin() {
    this.modalCtrl.dismiss();
      this.modal = await  this.modalCtrl.create({
        component:InstitutionPage,
        cssClass:'modalHospitals',
        backdropDismiss:false,
        componentProps:{
  
        }
  
      });
  
      this.modal.present();
  
    }

    async loadingPage(){
      this.loading = await this.loadingCtrl.create({
        message: 'Calculando...',
  
      });
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


