import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstitutionPageRoutingModule } from './institution-routing.module';

import { InstitutionPage } from './institution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstitutionPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [InstitutionPage]
})
export class InstitutionPageModule {}
