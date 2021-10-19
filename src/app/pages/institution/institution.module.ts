import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstitutionPageRoutingModule } from './institution-routing.module';

import { InstitutionPage } from './institution.page';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstitutionPageRoutingModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [InstitutionPage]
})
export class InstitutionPageModule {

  
}
const routes: Routes =[
  { path: 'hospitals', loadChildren: './pages/hospitals/hospitals.module' },
]
