import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThematicsPage } from './thematics.page';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';



const routes: Routes = [
  {
    path: '',
    component: ThematicsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  declarations: [ThematicsPage]
})
export class ThematicsPageModule {}
