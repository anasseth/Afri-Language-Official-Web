import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../services/afrilangue.service";
import { Router } from "@angular/router";

import { finalize } from "rxjs/operators";
import { from } from "rxjs";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(
    private afriService: AfrilangueService,
    private router: Router,
    private loadCtrl: LoadingController,
    private alertController: AlertController
  ) { }

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
    if (user.email == undefined || user.password == undefined) {
      this.wrongAlert("Tous les champs doivent être remplis");
    } else if (user.password.toString().length < 5) {
      this.wrongAlert("Ce champ requiert 5 caractères minimum");
    } else {
      this.afriService
        .login(user.email, user.password)

        .subscribe(
          (data) => {
            this.afriService.myToken = data["success"].token;
            this.afriService.saveToken();
            localStorage.setItem("userDetails", JSON.stringify(user))
            this.afriService.loadHelp();

            this.router.navigateByUrl(this.afriService.loadHelp());
            // this.router.navigateByUrl('/tabs/tabs/cours');
          },
          (error) => {
            console.log(error);
            this.wrongAlert("L'email ou le mot de passe est incorrect");
          }
        );
    }
  }

  /*   async onSubmitOld(user) {


        let loading = await this.loadCtrl.create();
        await loading.present();



        let nativeCall =  this.afriService.login(user.email,user.password);
        from(nativeCall).pipe(
           finalize(() => loading.dismiss())
         )
     .subscribe(
          data =>{

            let parsed = JSON.parse(data.data).success.token;
              this.afriService.myToken = parsed;
              this.afriService.saveToken();



             console.log(parsed);


              this.router.navigateByUrl("/tabs/tabs/home")

          },error =>{

              console.log(error);

          }

      )
    } */
}
