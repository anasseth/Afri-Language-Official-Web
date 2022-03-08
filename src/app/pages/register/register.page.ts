import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../services/afrilangue.service";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  email: any;
  password: any;
  nompre: any;
  passwordConfirm: any;
  adresse: any;
  telephone: any;

  language: number;

  constructor(
    private afriService: AfrilangueService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) {
    console.log("params id: ", this.afriService.language_id);

    this.route.queryParams.subscribe((params) => {
      console.log("params : ", params.language_id);
      if (params && params.language_id) {
        this.language = params.language_id;
      }
    });
  }

  ngOnInit() { }

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

  onSubmit(user) {
    let navigationExtra: NavigationExtras = {
      queryParams: {
        language: this.language,
      },
    };

    if (
      user.nompre == undefined ||
      user.email == undefined ||
      // user.adresse == undefined || 
      // user.telephone == undefined ||
      user.password == undefined ||
      user.passwordConfirm == undefined
    ) {
      this.wrongAlert("Tous les champs doivent être remplis");
    } else if (
      user.nompre.toString().length < 5 ||
      user.email.toString().length < 5 ||
      // user.adresse.toString().length < 5 ||
      // user.telephone.toString().length < 5 ||
      user.password.toString().length < 5 ||
      user.passwordConfirm.toString().length < 5
    ) {
      this.wrongAlert("Ce champ requiert 5 caractères minimum");
    } else if (user.password !== user.passwordConfirm) {
      this.wrongAlert("Les 2 mots de passe ne sont pas identiques");
    } else {
      console.log("succes");
      this.afriService
        .getRegister(user, this.afriService.language_id)
        .subscribe((data) => {
          console.log(data);

          this.onLogin(user);
        });
    }

    // this.router.navigate(["/tabs/tabs/cours/23"] , navigationExtra );
  }

  onLogin(user) {
    this.afriService
      .login(user.email, user.password)

      .subscribe(
        (data) => {
          this.afriService.myToken = data["success"].token;
          this.afriService.saveToken();
          this.router.navigateByUrl("/tabs/tabs/help");
          // this.router.navigateByUrl("/tabs/tabs/cours");
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
