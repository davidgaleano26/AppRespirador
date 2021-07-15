import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataPageRoutingModule } from './data-routing.module';

import { DataPage } from './data.page';
import { ResultsPage } from '../results/results.page';

@NgModule({
  entryComponents:[
    ResultsPage
  ],


  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataPageRoutingModule
  ],
  declarations: [DataPage]
})
export class DataPageModule {}
