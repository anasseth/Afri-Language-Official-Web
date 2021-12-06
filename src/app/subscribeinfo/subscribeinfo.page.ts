import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams, AlertController } from "@ionic/angular";
import { AfrilangueService } from "src/app/services/afrilangue.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-subscribeinfo",
  templateUrl: "./subscribeinfo.page.html",
  styleUrls: ["./subscribeinfo.page.scss"],
})
export class SubscribeinfoPage implements OnInit {
  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
    private afriService: AfrilangueService,
    private alert: AlertController,
    private router: ActivatedRoute,
    private route: Router
  ) {
    this.router.queryParams.subscribe((params) => {
      this.info = this.navParams.get("info");
      this.onGetLanguage();
      // console.log(this.info);
    });
  }

  info;
  languages;
  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  ngOnInit() {
    this.info = this.navParams.get("info");
    this.onGetLanguage();
    // console.log(this.info);
  }

  onGetLanguage() {
    this.afriService.getLangues().subscribe((data) => {
      this.languages = data;
    });
  }
  onGetCancel(language) {
    this.afriService.getCancelSubscribe(language).subscribe((data) => {
      // console.log(data);
      this.router.queryParams.subscribe((params) => {
        this.info = this.navParams.get("info");
        this.dismissModal();
        // console.log(this.info);
      });
    });
  }

  async showAlert(id) {
    const alert = await this.alert.create({
      header: "Attention!",
      message: "Vous êtes sûre d'annuler <strong>l'abonnement ?</strong>",
      buttons: [
        {
          text: "Non",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            // console.log("Confirm Cancel: blah");
          },
        },
        {
          text: "Oui",
          handler: () => {
            this.onGetCancel(id);
            this.route.navigateByUrl("/tabs/tabs/comptes/comptes");
          },
        },
      ],
    });

    await alert.present();
  }

  showName() {
    if (this.languages != undefined) {
      const nom = this.languages.filter((x) => x.id == this.info.language_id);
      return nom[0].name;
    }
  }
}
