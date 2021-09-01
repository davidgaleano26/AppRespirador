import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, ModalController, LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { HospitalService } from '../../services/hospital.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.page.html',
  styleUrls: ['./hospitals.page.scss'],
})
export class HospitalsPage implements OnInit {

  form:FormGroup;
  modalReady = false;
  constructor(private modalCtrl: ModalController, public toastController: ToastController, public alertCtrl: AlertController, private hospitalsService: HospitalService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null,[Validators.required]),
    });
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
         position: 'middle',
         color: 'success'
     });
     toast.present()
    }
  async submitHospital(){
    this.presentToast1();
    const loading = await this.loadingCtrl.create({message:'Guardando...'})
    loading.present();
    this.hospitalsService.addHospital(this.form.value).pipe(
      take(1)
    ).subscribe((hospital)=>{
      console.log(hospital);
      loading.dismiss();
    })
  }

}
