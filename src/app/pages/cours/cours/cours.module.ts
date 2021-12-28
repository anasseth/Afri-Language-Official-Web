import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoursPage } from './cours.page';
import {NgPipesModule} from 'ngx-pipes';

const routes: Routes = [
  {
    path: '',
    component: CoursPage,
    children : [


    ]
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        NgPipesModule
    ],
  declarations: [CoursPage]
})
export class CoursPageModule {}
