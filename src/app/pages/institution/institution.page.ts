import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.page.html',
  styleUrls: ['./institution.page.scss'],
})
export class InstitutionPage implements OnInit {


  modalReady = false;
  constructor(private modalCtrl: ModalController) { }

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

}
