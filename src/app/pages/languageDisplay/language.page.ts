import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../services/afrilangue.service";
// import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { from } from "rxjs";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./language.page.html",
  styleUrls: ["./language.page.scss"],
})
export class LanguageDisplay implements OnInit {
  email: string;
  password: string;
  usersData: any;
  usersData2: any;
  randomNumber: number;
  imageData = [
    "../../../assets/images/1.png",
    "../../../assets/images/2.png",
    "../../../assets/images/3.png",
    "../../../assets/images/4.png",
    "../../../assets/images/5.png",
    "../../../assets/images/6.png",
    "../../../assets/images/7.png",
    "../../../assets/images/8.png",
    "../../../assets/images/9.png",
    "../../../assets/images/10.png",
    "../../../assets/images/11.png"
  ]

  constructor(
    private afriService: AfrilangueService,
    private router: Router,
    private loadCtrl: LoadingController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.afriService.getLanguageData().subscribe(
      (data) => {
        this.usersData = JSON.parse(JSON.stringify(data))
        for (var i = 0; i < this.usersData.length; i++) {
          this.usersData[i].logo = this.imageData[i]
        }
        console.log(data)
      }, (err) => {
        console.log(err)
      }, () => {
        console.log(this.usersData)
        this.usersData2 = this.usersData
      }
    )
  }
  itemClick(langue) {
    console.log('langue choisie : ', langue);

    this.afriService.language_id = langue.id

    let navigationExtra: NavigationExtras = {
      queryParams: {
        language: langue
      }
    }

    this.router.navigate(["/register"], navigationExtra)

  }


  generateRandomNumber() {

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
