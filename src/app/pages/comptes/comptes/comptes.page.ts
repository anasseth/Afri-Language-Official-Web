import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../../services/afrilangue.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-comptes",
  templateUrl: "./comptes.page.html",
  styleUrls: ["./comptes.page.scss"],
})
export class ComptesPage implements OnInit {
  options = [
    // { name: "Notification", icon: "assets/icon/bell.svg", url: "notification" },
    { name: "Mes langues", icon: "assets/icon/internet.svg", url: "langues" },
    { name: "Paramètres", icon: "assets/icon/settings.svg", url: "parametres" },
    { name: "Aide", icon: "assets/icon/information.svg", url: "help" },
    /* {
      name: "Mon abonnement",
      icon: "assets/icon/rss-feed-suscription-button-symbol-for-interface.svg",
      url: "subscribe",
    }, */
    {
      name: "A propos d'Afrilangues ",
      icon: "assets/icon/businessman-talking-about-data-analysis.svg",
      url: "about",
    },
  ];

  constructor(
    private afriService: AfrilangueService,
    private router: ActivatedRoute,
    private route: Router
  ) {
    this.router.queryParams.subscribe((params) => {
      // // console.log(this.afriService.myToken );
      this.afriService.showNotification();
      if (this.afriService.myToken == "") {
        this.route.navigateByUrl("/login");
      }
    });
  }

  ngOnInit() { }
  notification() {
    this.afriService.showNotification();
  }
  logout() {
    this.afriService.clearToken();
    this.afriService.language_id = undefined;
  }
}
