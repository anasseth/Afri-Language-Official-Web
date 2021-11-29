import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicSwipeAllModule } from 'ionic-swipe-all';
import { IonicModule } from "@ionic/angular";
import { VocabularyPage } from "./vocabulary.page";

const routes: Routes = [
  {
    path: "",
    component: VocabularyPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSwipeAllModule,
    RouterModule.forChild(routes),
  ],
  declarations: [],
})
export class VocabularyPageModule { }
