import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../services/afrilangue.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ThematicPage } from "../question/thematic/thematic.page";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { PayementPage } from "src/app/payement/payement.page";

@Component({
  selector: "app-thematics",
  templateUrl: "./thematics.page.html",
  styleUrls: ["./thematics.page.scss"],
})
export class ThematicsPage implements OnInit {
  faCoffee = faCoffee;

  data: any;

  constructor(
    private afriService: AfrilangueService,
    private route: ActivatedRoute,
    private router: Router,

    public modalController: ModalController
  ) {
    this.route.queryParams.subscribe((params) => {
      /*  this.afriService.showNotification();
      this.onGetThematics(); */
      this.thematics = undefined;
      this.show = undefined;
      this.onGetProfile();
      this.onGetThematics();
      this.afriService.showNotification();
      console.log("params : ", params);
      if (params && params.language) {
        this.data = params.language;
      }
    });
  }

  mail;
  role;
  thematics;
  show;

  ngOnInit() { }

  onGetProfile() {
    this.afriService.getProfile().subscribe((data) => {
      this.mail = data["success"]["email"];
      this.role = data["success"]["role"];
      console.log(data);
    });
  }

  async payment() {
    const modal = await this.modalController.create({
      cssClass: "modal-fullscreen",
      component: PayementPage,
      componentProps: {
        mail: this.mail,
      },
    });
    return await modal.present();
  }

  onGetThematics() {
    console.log(this.afriService.language_id);

    this.afriService.getThematics(this.afriService.language_id).subscribe(
      (data) => {
        if (data["payment_required"] == true) {
          this.payment();

          this.show = data;

          console.log("ici");
        } else {
          this.thematics = data;
        }
      },
      (error) => console.log(error)
    );
  }

  async thematicClick(thematic) {
    const modal = await this.modalController.create({
      cssClass: "modal-fullscreen",
      component: ThematicPage,
      componentProps: {
        thematic: thematic,
      },
    });
    return await modal.present();
  }
}
