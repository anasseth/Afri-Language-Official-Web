import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "src/app/services/afrilangue.service";

@Component({
  selector: "app-help",
  templateUrl: "./help.page.html",
  styleUrls: ["./help.page.scss"],
})
export class HelpPage implements OnInit {
  constructor(private afriService: AfrilangueService) { }

  ngOnInit() {
    localStorage.setItem("help", "oui");
    this.showInfo("aide");
  }
  data;
  showInfo(url) {
    this.afriService.getHtml(url).subscribe((data) => {
      // console.log("data ", data);
      this.data = data;
    });
    // console.log(url);
  }
}
