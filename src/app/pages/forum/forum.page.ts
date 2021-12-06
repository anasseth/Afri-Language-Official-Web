import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../services/afrilangue.service";

import { ModalController } from "@ionic/angular";
import { AddpostPage } from "../question/addpost/addpost.page";
import { CommentpostPage } from "../question/commentpost/commentpost.page";
import { ActivatedRoute } from "@angular/router";

import { ToastController } from "@ionic/angular";
import { PayementPage } from "src/app/payement/payement.page";

@Component({
  selector: "app-forum",
  templateUrl: "./forum.page.html",
  styleUrls: ["./forum.page.scss"],
})
export class ForumPage implements OnInit {
  datas;

  constructor(
    private afriService: AfrilangueService,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private toastController: ToastController
  ) {
    this.route.queryParams.subscribe((params) => {
      this.datas = undefined;
      this.show = undefined;
      this.onGetProfile();
      this.getForum();

      this.afriService.showNotification();
    });
  }

  ngOnInit() { }
  mail;
  onGetProfile() {
    this.afriService.getProfile().subscribe((data) => {
      this.mail = data["success"]["email"];
      // console.log(this.mail);
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Votre question est ajouté",
      position: "bottom",
      color: "dark",
      duration: 2000,
    });
    toast.present();
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
  show;
  async getForum() {
    this.afriService.getForum(this.afriService.language_id).subscribe(
      (data) => {
        if (data["payment_required"]) {
          this.payment();

          this.show = data;
        } else {
          this.datas = data;
        }

        // console.log(this.datas);
      },
      (error) => console.log(error)
    );
  }

  async addPost() {
    const modal = await this.modalController.create({
      cssClass: "modal-fullscreen",
      component: AddpostPage,
      /*  componentProps: {
        'thematic': thematic,

      }*/
    });

    modal.onDidDismiss().then((data) => {
      this.datas = undefined;
      this.show = undefined;
      this.onGetProfile();
      this.getForum();
      //  this.presentToast();

      // Here's your selected user!
    });

    return await modal.present();
  }

  async commentPost(post) {
    const modal = await this.modalController.create({
      cssClass: "modal-fullscreen",
      component: CommentpostPage,
      componentProps: {
        post: post,
      },
    });
    return await modal.present();
  }
}
