import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../../services/afrilangue.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

import { Platform } from "@ionic/angular";
import { VocabularyPage } from "../../question/vocabulary/vocabulary.page";
import { LoadingController } from "@ionic/angular";
import { PayementPage } from "src/app/payement/payement.page";
import { LessonsPage } from "src/app/lessons/lessons.page";

declare var waripay;

@Component({
  selector: "app-cours",
  templateUrl: "./cours.page.html",
  styleUrls: ["./cours.page.scss"],
})
export class CoursPage implements OnInit {
  data: any;
  idVerify;
  constructor(
    public platform: Platform,
    private afriService: AfrilangueService,
    private route: ActivatedRoute,
    private router: Router,
    public modalController: ModalController
  ) {
    this.route.queryParams.subscribe((params) => {
      this.onGetProfile();
      this.onGetLanguage();
      this.afriService.showNotification();

      console.log("paramss : ", params.language);
      if (params && params.language) {
        this.data = params.language;
      }
    });
  }

  topics;
  verify;
  user;
  subscribed;
  language_id;
  showExt() {
    waripay();
  }

  ngOnInit() {
    //this.afriService.showHelp();
    //this.onGetProfile();
    this.onGetTopics();
    this.onGetLangues();
    this.afriService.showNotification();
  }

  onGetProfile() {
    this.afriService.getProfile().subscribe((data) => {
      this.user = data["success"];
      this.subscribed = this.user.subscribed;

      if (this.afriService.language_id == undefined) {
        this.afriService.language_id = this.user.language_id;
        this.language_id = this.afriService.language_id;
      } else {
        this.language_id = this.afriService.language_id;
      }

      console.log(this.language_id);

      this.onGetTopics();
      this.onGetVerifier();
    });
  }

  languages;
  onGetLanguage() {
    this.afriService.getLangues().subscribe((data) => {
      this.languages = data;
    });
  }

  showName() {
    if (this.languages != undefined) {
      const nom = this.languages.filter(
        (x) => x.id == this.afriService.language_id
      );
      return nom[0].name;
    }
  }

  onGetTopics() {
    console.log("id service : ", this.afriService.language_id);
    if (this.afriService.language_id != undefined) {
      this.afriService.getTopics(this.afriService.language_id).subscribe(
        (data) => {
          this.topics = data;
        },
        (error) => console.log(error)
      );
    }
  }

  onGetVerifier() {
    if (this.afriService.language_id != undefined) {
      this.afriService.getVerify(this.afriService.language_id).subscribe(
        (data) => {
          this.verify = data["payment_required"];
        },
        (error) => console.log(error)
      );
    }
  }

  async topicClick(topic, user, index, mail) {
    console.log(this.verify);
    console.log(this.user);
    console.log(this.subscribed);

    let subId = [];

    if (index >= 0 && this.user.role != "user") {
      const modal = await this.modalController.create({
        component: LessonsPage,
        componentProps: {
          topic: topic,
        },
      });
      return await modal.present();
    } else if (this.verify == true && index == 0) {
      const modal = await this.modalController.create({
        cssClass: "modal-fullscreen",
        component: LessonsPage,
        componentProps: {
          topic: topic,
        },
      });
      return await modal.present();
    } else if (this.verify == false && index >= 0) {
      const modal = await this.modalController.create({
        cssClass: "modal-fullscreen",
        component: LessonsPage,
        componentProps: {
          topic: topic,
        },
      });
      return await modal.present();
    } else {
      const modal = await this.modalController.create({
        cssClass: "modal-fullscreen",
        component: PayementPage,
        componentProps: {
          mail: mail,
        },
      });
      return await modal.present();
    }

    /*       else if(user.subscribed == true && index == 0){
                       const modal = await this.modalController.create({
                           component: LessonsPage,
                           componentProps: {
                               'topic': topic,

                           }
                       });
                       return await modal.present();
                   }

                   else if(user.subscribed == true && index > 0){
                       const modal = await this.modalController.create({
                           component: LessonsPage,
                           componentProps: {
                               'topic': topic,

                           }
                       });
                       return await modal.present();
                   }*/
  }


  langues;
  user2;

  onGetProfile2() {
    this.afriService.getProfile().subscribe(
      data => {
        this.user2 = data['success'];

        console.log('user ', this.user2);

      }
    );
  }

  currentLangue
  onLanguage() {

    for (let i = 0; i < this.langues.length; i++) {
      if (this.langues[i].id == this.afriService.language_id) {
        this.currentLangue = this.langues[i]
      }
    }

  }

  onGetLangues() {

    this.afriService.getLangues()

      .subscribe(
        data => {

          this.langues = data;
          this.onLanguage();
        }, error => console.log(error)
      );

  }

  servLanguage

  itemClick(langue: any) {

    this.afriService.language_id = langue.id
    this.servLanguage = this.afriService.language_id
    this.ngOnInit()


  }
}
