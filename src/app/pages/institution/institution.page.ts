import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HospitalService } from '../../services/hospital.service';
import { Hospital } from '../hospitals/hospitals.model';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.page.html',
  styleUrls: ['./institution.page.scss'],
})
export class InstitutionPage implements OnInit {
  
  hospitals$: Observable<Hospital[]>;
  

  modalReady = false;
  constructor(private modalCtrl: ModalController, private hospitalService: HospitalService, private loadingCtrl:LoadingController, private storageService: StorageService) { 
    this.getAllStorage();
  }

  async ngOnInit() {
    const loading = await this.loadingCtrl.create({message: 'Cargando...'});
    loading.present();


    this.hospitals$ = this.hospitalService.getHospitals().pipe(
      tap(hospitals =>{
        loading.dismiss();
        return hospitals;
      })
    );
  }
  salirSin(){
    this.modalCtrl.dismiss();

  }
  ngAfterViewInit() {
    setTimeout(()=>{
      this.modalReady = true;
    }, 2300)
  }

  getAllStorage(){
    this.storageService.getData();
  }

}
