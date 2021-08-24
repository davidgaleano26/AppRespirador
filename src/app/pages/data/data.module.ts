import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataPageRoutingModule } from './data-routing.module';

import { DataPage } from './data.page';
import { ResultsPage } from '../results/results.page';
import { ResultsPageModule } from '../results/results.module';

@NgModule({
  entryComponents:[
    ResultsPage
  ],


  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DataPageRoutingModule,
    ResultsPageModule
  ],
  declarations: [DataPage]
})
export class DataPageModule {}
