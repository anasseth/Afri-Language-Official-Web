import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  InAppBrowser,
  InAppBrowserEvent,
} from "@ionic-native/in-app-browser/ngx";
import { HTTP } from "@ionic-native/http/ngx";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { AfrilangueService } from "src/app/services/afrilangue.service";
@Component({
  selector: "app-payement",
  templateUrl: "./payement.page.html",
  styleUrls: ["./payement.page.scss"],
})
export class PayementPage implements OnInit {
  mail;
  mailAfrilangue = "afrilangues@gmail.com";
  waripayApiKey = "API-WPAY-44429a02-295e-11ea-bda4-0050560641f9";
  tokenKey;

  constructor(
    private httpNative: HTTP,
    private modalController: ModalController,
    private navParams: NavParams,
    private router: Router,
    private http: HttpClient,
    private iab: InAppBrowser,
    private alertController: AlertController,
    private afriService: AfrilangueService
  ) {
    this.mail = navParams.get("mail");
  }

  ngOnInit() {
    this.pricings();
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  datas;

  pricings() {
    this.afriService.getPayment().subscribe(
      (data) => {
        this.datas = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  transaction(wari, mois) {
    this.afriService
      .getTransaction(wari, this.afriService.language_id, mois)
      .subscribe(
        (data) => {
          console.log(data);
          this.dismissModal();
          this.router.navigateByUrl("/tabs/tabs/info");
          // this.wrongAlert("Montant", data["amount"] + " EURO");
        },
        (error) => {
          console.log(error);
        }
      );
  }

  async wrongAlert(head, message) {
    //this.router.navigateByUrl("/tabs/tabs/cours");

    const alert = await this.alertController.create({
      header: head,
      message: "<strong> Montant : " + message + "</strong>",
      buttons: [
        {
          text: "Fermer",
          handler: () => {
            this.dismissModal();
            this.router.navigateByUrl("/tabs/tabs/info");
          },
        },
      ],
    });

    await alert.present();
  }

  wpayId;

  check(price: number, mois: number) {
    let keyCheck;
    let tokenKey;

    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    console.log(price, this.mail, this.mailAfrilangue, this.waripayApiKey);

    let bodyData = { apikey: this.waripayApiKey, email: this.mailAfrilangue };

    let bodyDataTrans = {
      destination: this.mailAfrilangue,
      email: this.mail,
      nbToken: price,
      type: "PAYMENT",
      options: {
        success: "oui",
        error: "non",
      },
    };

    this.http
      .post(
        "https://d3ii1lw2ab85qe.cloudfront.net/api/v1/authorization/token",
        bodyData,
        httpOptions
      )
      .subscribe(
        (data) => {
          tokenKey = data["token"];

          if (tokenKey) {
            const httpOptionTrans = {
              headers: new HttpHeaders({
                "Content-Type": "application/json",
                Authorization: "Bearer " + tokenKey,
              }),
            };

            this.http
              .post(
                "https://d3ii1lw2ab85qe.cloudfront.net/api/v1/transaction/create",
                bodyDataTrans,
                httpOptionTrans
              )
              .subscribe((data) => {
                const browser = this.iab.create(
                  "https://www.wariflow.com/#/Checkout/" + data["wpayId"],
                  "_blank"
                );

                browser
                  .on("loadstart")
                  .subscribe((event: InAppBrowserEvent) => {
                    const closeUrl = "oui";
                    const failed = "non";
                    if (event.url.includes(closeUrl)) {
                      const wari = data["wpayId"];

                      this.transaction(wari, mois);
                      browser.close();
                    } else if (event.url.includes(failed)) {
                      this.wrongAlert("Erreur", "Achat non effectué");
                      browser.close();
                    }
                  });
              });
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
