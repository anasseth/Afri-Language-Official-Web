import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "src/app/services/afrilangue.service";
import { AlertController, ModalController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { SubscribeinfoPage } from "src/app/subscribeinfo/subscribeinfo.page";

@Component({
  selector: "app-parametres",
  templateUrl: "./parametres.page.html",
  styleUrls: ["./parametres.page.scss"],
})
export class ParametresPage implements OnInit {
  email: any;
  password: any;
  nompre: any;
  passwordConfirm: any;
  adresse: any;
  telephone: any;

  language: number;
  constructor(
    private afriService: AfrilangueService,
    private alertController: AlertController,
    public modalController: ModalController,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      this.datas = undefined;
      this.onGetProfil();
      // this.onGetSubscribes();
      this.datas = undefined;
    });
  }

  ngOnInit() {
    this.onGetProfil();
    //this.onGetSubscribes();
    this.datas = undefined;
  }

  datas = [];
  tableau;

  onGetSubscribes() {
    if (this.edit == true) {
      this.edit = false;
    }

    this.afriService.getSubscribes().subscribe((data) => {
      this.tableau = data;

      console.log(data);
      let tab = [];
      /*    data.forEach((element) => {
        if (element.status == "succeeded") {
          console.log("oui", element);
          tab.push(element);
        } else {
          console.log("non", element.id);
        }
      });
 */
      for (let index = 0; index < this.tableau.length; index++) {
        const element = this.tableau[index];
        if (element.status == "succeeded") {
          console.log("oui", element);
          tab.push(element);
        } else {
          console.log("non", element.id);
        }
      }

      this.datas = tab;
      console.log(this.datas);

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

  async wrongAlert(wrong) {
    const alert = await this.alertController.create({
      cssClass: "successAlert",
      header: "Erreur",
      message: "<strong>" + wrong + "</strong>",
      buttons: ["Continuer"],
    });

    /*  this.player = new Howl({
      src: ["https://afrilangues.com/public/right_answer.mp3"],
      html5: true
    });
    this.player.play(); */

    await alert.present();
  }
  user;
  onGetProfil() {
    this.afriService.getProfile().subscribe((data) => {
      this.user = data["success"];
      console.log(data["success"]);
    });
  }

  edit: boolean = false;

  onEdit() {
    this.datas = undefined;

    if (this.edit == false) {
      this.edit = true;

      this.nompre = this.user.name;
      this.email = this.user.email;
      this.telephone = this.user.phone_number;
      this.adresse = this.user.location;
    } else {
      this.edit = false;
    }
  }

  onSubmit(user) {
    if (
      user.nompre == undefined ||
      user.email == undefined ||
      user.adresse == undefined ||
      user.telephone == undefined
    ) {
      this.wrongAlert("Tous les champs doivent être remplis");
    } else if (
      user.nompre.toString().length < 5 ||
      user.email.toString().length < 5 ||
      user.adresse.toString().length < 5 ||
      user.telephone.toString().length < 5
    ) {
      this.wrongAlert("Ce champ requiert 5 caractères minimum");
    } else {
      console.log("succes");
      this.afriService.getEditUser(user).subscribe((data) => {
        console.log(data);
      });
    }
  }
}
