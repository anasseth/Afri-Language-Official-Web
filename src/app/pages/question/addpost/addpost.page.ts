import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
import { AfrilangueService } from "../../../services/afrilangue.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-addpost",
  templateUrl: "./addpost.page.html",
  styleUrls: ["./addpost.page.scss"],
})
export class AddpostPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private route: Router,
    private afriService: AfrilangueService,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async successAlert() {
    const alert = await this.alertController.create({
      cssClass: "successAlert",
      header: "Réponse correcte",
      message: "<strong>lArticle est ajouter avec success!</strong>",
      buttons: ["Continuer"],
    });

    await alert.present();
  }

  onSubmit(f: any) {
    this.afriService
      .postForum(
        f.value.post_title,
        f.value.post_content,
        f.value.post_topic,
        this.afriService.language_id
      )
      .subscribe(
        (data) => {
          this.dismissModal();
        },
        (error) => {
          //console.log(error);
        }
      );
  }
}
