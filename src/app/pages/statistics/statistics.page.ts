import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../services/afrilangue.service";
import { ModalController, NavParams } from "@ionic/angular";
import { VocabularyPage } from "../question/vocabulary/vocabulary.page";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.page.html",
  styleUrls: ["./statistics.page.scss"],
})
export class StatisticsPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private afriService: AfrilangueService,
    private modalController: ModalController
  ) {
    this.route.queryParams.subscribe((params) => {
      this.afriService.showNotification();
      this.onGetStatistics();
    });
  }

  data;
  datas;
  datasw;

  demo = "kris";

  ngOnInit() {
    this.afriService.showNotification();
    this.onGetStatistics();
  }

  onGetStatistics() {
    this.afriService.getStatistics().subscribe(
      (data) => {
        this.datas = data["questionStrong"];
        this.datasw = data["questionWeek"];
        this.data = data["questionStrong"];
        console.log(data["questionStrong"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onGetStatistics2() {
    this.afriService.getStatistics().subscribe(
      (data) => {
        this.datas = data["questionStrong"];
        this.datasw = data["questionWeek"];
        this.data = data["questionWeek"];
        console.log(data["questionStrong"]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  niceText(text) {
    return text.replace(/^\["+|\"]+$/g, "").split('","');
  }

  async clickStatistic(data) {
    console.log(data);
    /* console.log(data.id);
    console.log(data.question_type);
    console.log(data.content_type);
    console.log(data.lession_id);
    console.log(data.answer); */

    const modal = await this.modalController.create({
      cssClass: "modal-fullscreen",
      component: VocabularyPage,
      componentProps: {
        question_type: data,
        lesson: data,
      },
    });
    return await modal.present();
  }
}
