import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "../../services/afrilangue.service";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.page.html",
  styleUrls: ["./tabs.page.scss"],
})
export class TabsPage implements OnInit {
  constructor(private afriService: AfrilangueService) {
    // this.afriService.showNotification();
    console.log(this.afriService.myToken);
  }

  ngOnInit() {
    // this.afriService.showNotification();
  }

  test() {}
}
