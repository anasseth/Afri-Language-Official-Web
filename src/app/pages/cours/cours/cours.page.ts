import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../../services/afrilangue.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, ModalController, NavParams } from "@ionic/angular";
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
  usersData: any;
  contentLockingPercentage: any;
  showLastViewedPopup: boolean = false;
  lastViewedCourseID = -1;
  usersData2: any;
  // imageData = [
  //   "../../../assets/images/1.png",
  //   "../../../assets/images/2.png",
  //   "../../../assets/images/3.png",
  //   "../../../assets/images/4.png",
  //   "../../../assets/images/5.png",
  //   "../../../assets/images/6.png",
  //   "../../../assets/images/7.png",
  //   "../../../assets/images/8.png",
  //   "../../../assets/images/9.png",
  //   "../../../assets/images/10.png",
  //   "../../../assets/images/11.png"
  // ]

  constructor(
    public platform: Platform,
    private afriService: AfrilangueService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute
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
    this.onGetTopics();
    this.onGetLangues();
    this.loadContentPercentage();
    this.afriService.showNotification();

    this.afriService.getLanguageData().subscribe(
      (data) => {
        this.usersData = JSON.parse(JSON.stringify(data))
        // for (var i = 0; i < this.usersData.length; i++) {
        //   this.usersData[i].logo = this.imageData[i]
        // }
        console.log(data)
      }, (err) => {
        console.log(err)
      }, () => {
        console.log(this.usersData)
        this.usersData2 = this.usersData
      }
    )

    // setTimeout(() => {
    //   this.showLastViewedPopup = true;
    // }, 6000);
  }

  loadContentPercentage() {
    if (this.afriService.language_id == undefined) {
      this.onGetProfile();
      setTimeout(() => {
        this.afriService.getContentCoveredPercentage().subscribe(
          data => {
            console.log("User Content % Covered 1")
            console.log(data)
            this.contentLockingPercentage = data
          }, err => {
            console.log(err)
          }, () => {
            this.popupForLastStartedCourse()
          }
        )
      }, 3000);
    }
    else {
      this.afriService.getContentCoveredPercentage().subscribe(
        data => {
          console.log("User Content % Covered 2")
          console.log(data)
          this.contentLockingPercentage = data
        }, err => {
          console.log(err)
        }
      )
    }
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

  async contentPercentageErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: "successAlert",
      header: "Erreur",
      message: "<strong>Veuillez d'abord terminer la leçon précédente</strong>",
      buttons: ["Continuer"],
    });
    await alert.present();
  }

  popupForLastStartedCourse() {
    for (var i = 0; i < this.topics.length; i++) {
      if (
        this.contentLockingPercentage[i].grammar_percentage >= 70
        &&
        this.contentLockingPercentage[i].review_percentage >= 70
        &&
        this.contentLockingPercentage[i].sentence_percentage >= 70
      ) {
        console.log("grammar_percentage : ", this.contentLockingPercentage[i].grammar_percentage)
        console.log("review_percentage : ", this.contentLockingPercentage[i].review_percentage)
        console.log("sentence_percentage : ", this.contentLockingPercentage[i].sentence_percentage)
        continue;
      }
      else {
        console.log("grammar_percentage : ", this.contentLockingPercentage[i].grammar_percentage)
        console.log("review_percentage : ", this.contentLockingPercentage[i].review_percentage)
        console.log("sentence_percentage : ", this.contentLockingPercentage[i].sentence_percentage)
        this.lastViewedCourseID = i;
        this.afriService.lastViewedPopupCount = this.afriService.lastViewedPopupCount + 1;
        break
      }
    }

    setTimeout(() => {
      this.showLastViewedPopup = true;
    }, 7000);
    console.log("Last Viewed topic : ", this.topics[this.lastViewedCourseID].name)
    console.log("Last Viewed Popup Countup", this.afriService.lastViewedPopupCount)
  }

  clickCourseCard(topic, user, index, mail) {
    console.log("Topic : ", topic)
    console.log("User : ", user)
    console.log("Index : ", index)
    console.log("Mail : ", mail)

    if (index != 0 && topic.name == this.contentLockingPercentage[index].name) {
      if (
        this.contentLockingPercentage[index - 1].grammar_percentage >= 70
        &&
        this.contentLockingPercentage[index - 1].review_percentage >= 70
        &&
        this.contentLockingPercentage[index - 1].sentence_percentage >= 70
      ) {
        console.log("grammar_percentage : ", this.contentLockingPercentage[index - 1].grammar_percentage)
        console.log("review_percentage : ", this.contentLockingPercentage[index - 1].review_percentage)
        console.log("sentence_percentage : ", this.contentLockingPercentage[index - 1].sentence_percentage)
        this.topicClick(topic, user, index, mail)
      }
      else {
        this.contentPercentageErrorAlert()
        console.log("grammar_percentage : ", this.contentLockingPercentage[index - 1].grammar_percentage)
        console.log("review_percentage : ", this.contentLockingPercentage[index - 1].review_percentage)
        console.log("sentence_percentage : ", this.contentLockingPercentage[index - 1].sentence_percentage)
      }
    }
    else if (index == 0) {
      console.log("grammar_percentage : ", this.contentLockingPercentage[index].grammar_percentage)
      console.log("review_percentage : ", this.contentLockingPercentage[index].review_percentage)
      console.log("sentence_percentage : ", this.contentLockingPercentage[index].sentence_percentage)
      this.topicClick(topic, user, index, mail)
    }

  }

  async topicClick(topic, user, index, mail) {

    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { topic: topic.name.replace(/\s/g, '-') },
        queryParamsHandling: 'merge'
      });
 
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
