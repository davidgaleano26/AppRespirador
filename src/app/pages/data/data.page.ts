import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { ResultsPage } from '../results/results.page';
import { HospitalService } from '../../services/hospital.service';
import { take } from 'rxjs/operators';
import { StorageService } from '../../services/storage.service';
import { DataInformation } from '../data/data.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  loading: HTMLIonLoadingElement;
  form:FormGroup;
  modal: HTMLIonModalElement;
  dataInformations: DataInformation;
  id_paciente:any;
  id_hospital:any;
  constructor(  private modalCtrl: ModalController, 
                private loadingCtrl:LoadingController, 
                private hospitalService: HospitalService, 
                private storageService: StorageService,
                private route: ActivatedRoute
                ) { }
                
 
  

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
      // hospital_id: new FormControl(null, [Validators.required]),
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
  resultOne:any;
  resultTwo:any;
  result:any;


  resultAcid:any;
  resultRSBI:any;
  resultDeath:any;
  numberNine:number;

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
        resultTwo:this.resultTwo,

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
    let numberNine = 0.0022280184;
    let numberTen = 0.0175100373;
    let numberEleven = 0.01102682592;

    let numberTwelve = -1.2732828426;
    let numberThirteen = 0.38731209;

    let numberFourteen = -6.612206;
    
    this.resultAcid = (numberNine * Math.exp(numberOne));
    this.resultRSBI = (numberTwo * numberTen);
    this.resultDeath = (numberFour * numberEleven);

    this.resultOne = this.resultAcid + this.resultRSBI + (numberTwelve * numberThree) + this.resultDeath + (numberFive * numberThirteen)+ numberFourteen;
    this.resultTwo =    ((Math.exp(this.resultOne))/(Math.exp(this.resultOne)+1)*100);
    this.result =    (Math.round(this.resultTwo *10)/10 );
    this.submitData();
  }

  

  
  submitData(){
    this.id_paciente= this.route.snapshot.paramMap.get('numberTwo');
    this.id_hospital= this.route.snapshot.paramMap.get('id');
    console.log(parseInt(this.id_paciente));
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
      paciente_id: parseInt(this.id_paciente),
      hospital_id: parseInt(this.id_hospital)
    }
    console.log(formulario);
    
    this.hospitalService.addData(formulario).pipe(
    take(1)
  ).subscribe((data)=>{
    console.log(data);
    
  })
  
  }

  
  

}
