import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../services/afrilangue.service";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { from } from "rxjs";
import { LoadingController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";

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
    "https://thumbs.dreamstime.com/b/caucasian-couple-two-men-talking-sitting-sofa-argue-fight-angry-conversation-flat-style-stock-vector-illustration-163057073.jpg",
    "https://media.istockphoto.com/vectors/cartoon-character-man-talking-to-a-friend-vector-vector-id1130767377?k=20&m=1130767377&s=612x612&w=0&h=jYZ0wFg5CYqyeroZzQrWKB9u2ynWSofW2Pcs7AvIMeU=",
    "https://thumbs.dreamstime.com/b/two-young-men-talking-speech-bubbles-friends-colleagues-gossiping-sharing-impressions-cartoon-style-vector-illustration-207464831.jpg",
    "https://static.vecteezy.com/system/resources/previews/002/918/748/original/business-people-doing-office-activity-taking-tea-and-discussing-with-each-other-illustration-in-cartoon-style-vector.jpg",
    "https://image.freepik.com/free-vector/friends-drinking-coffee-chatting_97843-160.jpg",
    "https://thumbs.dreamstime.com/b/cartoon-trendy-male-talking-hipster-girl-vector-flat-illustration-two-people-communicating-speech-bubble-cartoon-trendy-170562574.jpg",
    "https://thumbs.dreamstime.com/b/two-young-men-talking-speech-bubbles-friends-colleagues-gossiping-sharing-impressions-cartoon-style-vector-illustration-207464831.jpg",
    "https://thumbs.dreamstime.com/b/two-female-friends-gossiping-speech-bubbles-vector-flat-illustration-cartoon-woman-talking-each-other-gesticulating-174282923.jpg"
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
          this.randomNumber = Math.floor(Math.random() * 9)
          console.log(this.randomNumber)
          this.usersData[i].logo = this.imageData[this.randomNumber]
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
