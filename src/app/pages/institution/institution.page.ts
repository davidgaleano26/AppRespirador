import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, LoadingController, MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HospitalService } from '../../services/hospital.service';
import { Hospital } from '../hospitals/hospitals.model';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.page.html',
  styleUrls: ['./institution.page.scss'],
})
export class InstitutionPage implements OnInit {
  
  hospitals$: Observable<Hospital[]>;
  numberTwo;
  place;
  id;

  form:FormGroup;
  modalReady = false;
  constructor(private router:Router, 
              private modalCtrl: ModalController, 
              private hospitalService: HospitalService, 
              private loadingCtrl:LoadingController, 
              private storageService: StorageService,
              private menuCtrl: MenuController) { 
    this.getAllStorage();
  }
  ionViewDidEnter(): void {
    this.menuCtrl.enable(false);
   }
   
    ionViewDidLeave(): void {
     this.menuCtrl.enable(true);
    }

  async ngOnInit() {
    this.ionViewDidEnter();
    const loading = await this.loadingCtrl.create({message: 'Cargando...'});
    loading.present();

    this.form = new FormGroup({
      
      hospital: new FormControl(null,[Validators.required]),
      paciente_id: new FormControl(null,[Validators.required]),
    });

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

  public optionsFn() { //here item is an object 
    console.log(this.place);

    let item = this.place; // Just did this in order to avoid changing the next lines of code :P
    console.log(item.id);
    return this.id = item.id;
    
  }

  ruta(){
    console.log(this.numberTwo);
    console.log(this.optionsFn());
    this.router.navigateByUrl(`data/${this.numberTwo}/${this.optionsFn()}`);
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

  async home() {
    this.router.navigateByUrl('home');
  }

}
