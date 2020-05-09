import { NgModule, ViewChild } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy, IonSlides } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { QuestiontypesPage } from "./pages/questiontypes/questiontypes.page";
import { VocabularyPage } from "./pages/question/vocabulary/vocabulary.page";
import { SentencesPage } from "./pages/question/sentences/sentences.page";
import { GrammarPage } from "./pages/question/grammar/grammar.page";
import { DialoguePage } from "./pages/question/dialogue/dialogue.page";
import { ReviewPage } from "./pages/question/review/review.page";

import { NgPipesModule } from "ngx-pipes";

import { MediaCapture } from "@ionic-native/media-capture/ngx";
import { StreamingMedia } from "@ionic-native/streaming-media/ngx";
import { FormsModule } from "@angular/forms";
import { ThematicPage } from "./pages/question/thematic/thematic.page";
import { AddpostPage } from "./pages/question/addpost/addpost.page";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";

//import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { SafeHtmlPipe } from "./safe-html.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { VideoPlayer } from "@ionic-native/video-player/ngx";
import { CommentpostPage } from "./pages/question/commentpost/commentpost.page";

import { NgpSortModule } from "ngp-sort-pipe";

import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { HTTP } from "@ionic-native/http/ngx";
//import { SubscribeinfoPage } from "./pages/comptes/subscribeinfo/subscribeinfo.page";

import { File } from "@ionic-native/file/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { InfoPage } from "./pages/info/info.page";
import { SubscribeinfoPage } from "./subscribeinfo/subscribeinfo.page";
import { LessonsPage } from "./lessons/lessons.page";
import { PayementPage } from "./payement/payement.page";

library.add(fas);

@NgModule({
  declarations: [
    SafeHtmlPipe,
    AppComponent,
    CommentpostPage,
    PayementPage,
    LessonsPage,
    AddpostPage,
    QuestiontypesPage,
    ReviewPage,
    VocabularyPage,
    ThematicPage,
    SentencesPage,
    GrammarPage,
    DialoguePage,
    SafeHtmlPipe,
    SubscribeinfoPage,
  ],
  entryComponents: [
    LessonsPage,
    CommentpostPage,
    PayementPage,
    QuestiontypesPage,
    AddpostPage,
    ReviewPage,
    VocabularyPage,
    ThematicPage,
    SentencesPage,
    GrammarPage,
    DialoguePage,
    SubscribeinfoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    DragDropModule,
    AppRoutingModule,
    HttpClientModule,
    NgPipesModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    NgpSortModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    ViewChild,
    IonSlides,
    HTTP,
    StreamingMedia,
    VideoPlayer,
    InAppBrowser,
    HTTP,
    File,
    SocialSharing,
    LocalNotifications,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
