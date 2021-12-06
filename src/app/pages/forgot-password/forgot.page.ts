import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../services/afrilangue.service";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { from } from "rxjs";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./forgot.page.html",
  styleUrls: ["./forgot.page.scss"],
})
export class ForgotPasswordPage implements OnInit {
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
    if (user.email == undefined) {
      this.wrongAlert("Tous les champs doivent être remplis");
    }
    else {
      this.afriService
        .forgotPassword(user.email)
        .subscribe(
          (data) => {
            // this.afriService.myToken = data["success"].token;
            // this.router.navigateByUrl(this.afriService.loadHelp());
            alert("Un e-mail vous a été envoyé, veuillez réinitialiser le mot de passe en utilisant le lien fourni dans l'e-mail.")
            this.router.navigate(["/login"])
          },
          (error) => {
            // console.log(error);
            this.wrongAlert("L'email est incorrect");
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



             // console.log(parsed);


              this.router.navigateByUrl("/tabs/tabs/home")

          },error =>{

              // console.log(error);

          }

      )
    } */
}
