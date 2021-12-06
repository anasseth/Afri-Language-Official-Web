import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "src/app/services/afrilangue.service";
import { ModalController } from "@ionic/angular";
import { SubscribeinfoPage } from "src/app/subscribeinfo/subscribeinfo.page";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.page.html",
  styleUrls: ["./subscribe.page.scss"],
})
export class SubscribePage implements OnInit {
  constructor(
    private afriService: AfrilangueService,
    public modalController: ModalController,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.onGetSubscribes();
    });
  }

  ngOnInit() {
    this.onGetSubscribes();
  }

  datas;
  onGetSubscribes() {
    this.afriService.getSubscribes().subscribe((data) => {
      this.datas = data;
      // console.log(data);

      this.onGetLanguage();
    });
  }

  languages;

  onGetLanguage() {
    this.afriService.getLangues().subscribe((data) => {
      this.languages = data;
    });
  }

  showName(id) {
    if (this.languages != undefined) {
      const nom = this.languages.filter((x) => x.id == id);
      return nom[0].name;
    }
  }

  async showInfo(data) {
    const modal = await this.modalController.create({
      component: SubscribeinfoPage,
      componentProps: {
        info: data,
      },
    });
    return await modal.present();
  }
}
