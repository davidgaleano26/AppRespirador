import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./pages/data/data.module').then( m => m.DataPageModule)
  },
  /* {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then( m => m.ResultsPageModule)
  }, */
  {
    path: 'information',
    loadChildren: () => import('./pages/information/information.module').then( m => m.InformationPageModule)
  },  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'institution',
    loadChildren: () => import('./pages/institution/institution.module').then( m => m.InstitutionPageModule)
  },
  {
<<<<<<< HEAD
    path: 'hospital',
    loadChildren: () => import('./pages/hospital/hospital.module').then( m => m.HospitalPageModule)
=======
    path: 'hospitals',
    loadChildren: () => import('./pages/hospitals/hospitals.module').then( m => m.HospitalsPageModule)
>>>>>>> 2ee6ad03f1d0c6fe38e328acb23161839c69a80c
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
