import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "intro", pathMatch: "full" },

  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  {
    path: "register",
    loadChildren: "./pages/register/register.module#RegisterPageModule",
  },
  { path: "tabs", loadChildren: "./pages/tabs/tabs.module#TabsPageModule" },
  {
    path: "lessons",
    loadChildren: "./lessons/lessons.module#LessonsPageModule",
  },
  {
    path: "questiontypes",
    loadChildren:
      "./pages/questiontypes/questiontypes.module#QuestiontypesPageModule",
  },
  {
    path: "review",
    loadChildren: "./pages/question/review/review.module#ReviewPageModule",
  },
  {
    path: "vocabulary",
    loadChildren:
      "./pages/question/vocabulary/vocabulary.module#VocabularyPageModule",
  },
  {
    path: "sentences",
    loadChildren:
      "./pages/question/sentences/sentences.module#SentencesPageModule",
  },
  {
    path: "dialogue",
    loadChildren:
      "./pages/question/dialogue/dialogue.module#DialoguePageModule",
  },
  {
    path: "grammar",
    loadChildren: "./pages/question/grammar/grammar.module#GrammarPageModule",
  },
  { path: "intro", loadChildren: "./pages/intro/intro.module#IntroPageModule" },
  {
    path: "cours",
    loadChildren: "./pages/cours/cours/cours.module#CoursPageModule",
  },
  {
    path: "introlangues",
    loadChildren:
      "./pages/introlangues/introlangues.module#IntrolanguesPageModule",
  },

  {
    path: "langues",
    loadChildren: "./pages/comptes/langues/langues.module#LanguesPageModule",
  },
  {
    path: "help",
    loadChildren: "./pages/comptes/help/help.module#HelpPageModule",
  },
  {
    path: "parametres",
    loadChildren:
      "./pages/comptes/parametres/parametres.module#ParametresPageModule",
  },
  {
    path: "thematics",
    loadChildren: "./pages/thematics/thematics.module#ThematicsPageModule",
  },
  {
    path: "thematic",
    loadChildren:
      "./pages/question/thematic/thematic.module#ThematicPageModule",
  },
  { path: "forum", loadChildren: "./pages/forum/forum.module#ForumPageModule" },
  {
    path: "addpost",
    loadChildren: "./pages/question/addpost/addpost.module#AddpostPageModule",
  },
  {
    path: "commentpost",
    loadChildren:
      "./pages/question/commentpost/commentpost.module#CommentpostPageModule",
  },
  {
    path: "payement",
    loadChildren: "./payement/payement.module#PayementPageModule",
  },
  { path: "pages", loadChildren: "./pages/pages.module#PagesPageModule" },
  {
    path: "statistics",
    loadChildren: "./pages/statistics/statistics.module#StatisticsPageModule",
  },
  {
    path: "about",
    loadChildren: "./pages/comptes/about/about.module#AboutPageModule",
  },
  {
    path: "subscribe",
    loadChildren:
      "./pages/comptes/subscribe/subscribe.module#SubscribePageModule",
  },
  {
    path: "subscribeinfo",
    loadChildren:
      "./subscribeinfo/subscribeinfo.module#SubscribeinfoPageModule",
  },
  { path: "info", loadChildren: "./pages/info/info.module#InfoPageModule" },
  // { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
