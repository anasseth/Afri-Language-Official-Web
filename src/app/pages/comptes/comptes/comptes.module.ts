import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComptesPage } from './comptes.page';

const routes: Routes = [
  {
    path: 'comptes',
    component: ComptesPage,
    children:[
      { path: 'parametres', loadChildren: '../parametres/parametres.module#ParametresPageModule' },
      { path: 'langues', loadChildren: '../langues/langues.module#LanguesPageModule' },
      { path: 'help', loadChildren: '../help/help.module#HelpPageModule' },
    ],

  },

  {
    path:'',
    redirectTo: 'comptes',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ComptesPage]
})
export class ComptesPageModule {}
