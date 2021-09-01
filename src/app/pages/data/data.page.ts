import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { ResultsPage } from '../results/results.page';
import { HospitalService } from '../../services/hospital.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  loading: HTMLIonLoadingElement;
  form:FormGroup;
  modal: HTMLIonModalElement;
  constructor(private modalCtrl: ModalController, private loadingCtrl:LoadingController, private hospitalService: HospitalService) { }

 
  

  ngOnInit() {
    console.log(this.result);
    
    this.form = new FormGroup({
      acid_basestatus: new FormControl(null,[Validators.required]),
      rsbi: new FormControl(null,[Validators.required]),
      efective_cough: new FormControl(null,[Validators.required]),
      death_probability: new FormControl(null,[Validators.required]),
      medical_patient: new FormControl(null,[Validators.required]),
      //result: new FormControl(2,[Validators.required]),
      excur_diafrag: new FormControl(null,[Validators.required]),
      engro_diafrag: new FormControl(null,[Validators.required]),
      velcontrac_diafra: new FormControl(null,[Validators.required]),
      paciente_id: new FormControl(null,[Validators.required]),
      hospital_id: new FormControl(null, [Validators.required]),
    });
  }
  numberOne:any;
  numberTwo:any;
  numberThree:any;
  numberFour:any;
  numberFive:any;
  numberSix:any;
  numberSeven:any;
  numberEight:any;
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
    let numberSix = parseFloat(this.numberSix);
    let numberSeven = parseFloat(this.numberSeven);
    let numberEight = parseFloat(this.numberEight);
    
    
    this.result = numberOne + numberTwo +numberThree +numberFour +numberFive+ numberSix+numberSeven+numberEight;
    this.submitData();
  }

  
  submitData(){
    const formulario = {
      acid_basestatus:this.form.get('acid_basestatus').value ,
      rsbi: this.form.get('rsbi').value,
      efective_cough: this.form.get('efective_cough').value,
      death_probability: this.form.get('death_probability').value,
      medical_patient:this.form.get('medical_patient').value,
      result:this.result,
      excur_diafrag:this.form.get('excur_diafrag').value,
      engro_diafrag: this.form.get('engro_diafrag').value,
      velcontrac_diafra: this.form.get('velcontrac_diafra').value,
      paciente_id: this.form.get('paciente_id').value,
      hospital_id: this.form.get('hospital_id').value,
    }
  this.hospitalService.addData(formulario).pipe(
    take(1)
  ).subscribe((data)=>{
    console.log(data);
    
  })
  
  }

}
