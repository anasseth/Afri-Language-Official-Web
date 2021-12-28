import { Component, Input, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { ModalController, NavParams } from "@ionic/angular";

import { AfrilangueService } from "../services/afrilangue.service";
import { QuestiontypesPage } from "../pages/questiontypes/questiontypes.page";

@Component({
  selector: "app-lessons",
  templateUrl: "./lessons.page.html",
  styleUrls: ["./lessons.page.scss"],
})
@Input("topic")
export class LessonsPage implements OnInit {
  topic;

  constructor(
    private afriService: AfrilangueService,
    private navParams: NavParams,
    private router: Router,
    public modalController: ModalController
  ) {
    this.topic = navParams.get("topic");
  }

  ngOnInit() {
    this.onGetLessons();
  }

  lessons;

  onGetLessons() {
    this.afriService.getTLessons(this.topic).subscribe(
      (data) => {
        this.lessons = data;
        console.log(this.lessons);
      },
      (error) => console.log(error)
    );
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async lessonClick(lesson) {
    console.log(lesson);

    const modal = await this.modalController.create({
      cssClass: "modal-fullscreen",
      component: QuestiontypesPage,
      componentProps: {
        lesson: lesson,
      },
    });
    return await modal.present();
  }
}
