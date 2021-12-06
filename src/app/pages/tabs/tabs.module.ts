import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      { path: "home", loadChildren: "../home/home.module#HomePageModule" },
      {
        path: "cours",
        loadChildren: "../cours/cours/cours.module#CoursPageModule",
      },

      /* { path: 'cours/:id', loadChildren: '../cours/cours/cours.module#CoursPageModule' },*/

      {
        path: "comptes",
        loadChildren: "../comptes/comptes/comptes.module#ComptesPageModule",
      },

      {
        path: "parametres",
        loadChildren:
          "../comptes/parametres/parametres.module#ParametresPageModule",
      },
      {
        path: "langues",
        loadChildren: "../comptes/langues/langues.module#LanguesPageModule",
      },

      {
        path: "about",
        loadChildren: "../comptes/about/about.module#AboutPageModule",
      },
      {
        path: "subscribe",
        loadChildren:
          "../comptes/subscribe/subscribe.module#SubscribePageModule",
      },

      {
        path: "help",
        loadChildren: "../comptes/help/help.module#HelpPageModule",
      },

      {
        path: "thematics",
        loadChildren: "../thematics/thematics.module#ThematicsPageModule",
      },
      {
        path: "statistics",
        loadChildren: "../statistics/statistics.module#StatisticsPageModule",
      },
      { path: "forum", loadChildren: "../forum/forum.module#ForumPageModule" },
      { path: "info", loadChildren: "../info/info.module#InfoPageModule" },
    ],
  },
  {
    path: "",
    redirectTo: "tabs/cours/:id",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {
  ionTabsWillChange() {
    // console.log("changeerr");
  }

  ionViewDidLeave() {
    // console.log("TabX is exited");
  }
}
