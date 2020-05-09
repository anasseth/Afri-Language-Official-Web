import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IntrolanguesPage } from './introlangues.page';

const routes: Routes = [
  {
    path: '',
    component: IntrolanguesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IntrolanguesPage]
})
export class IntrolanguesPageModule {}
