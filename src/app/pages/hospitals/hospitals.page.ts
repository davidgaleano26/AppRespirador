import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.page.html',
  styleUrls: ['./hospitals.page.scss'],
})
export class HospitalsPage implements OnInit {

  modalReady = false;
  constructor(private modalCtrl: ModalController, public toastController: ToastController, public alertController: AlertController) { }

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
  async presentToast1(){
    const toast = await this.toastController.create({
        message: 'La institucion fue creada correctamente',
        duration:2000,
        animated: false,
        position: 'bottom'
    });
    toast.present()
  }
  async presentAlert1(){
    const alert = await this.alertController.create({
      header: "Crear Hospital",
      message: 'Se ha guardado el hospital correctamente',
      buttons: ["OK"],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log(result);
  }

}
