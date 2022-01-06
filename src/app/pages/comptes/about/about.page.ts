import { Component, OnInit } from "@angular/core";
import { AfrilangueService } from "src/app/services/afrilangue.service";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";
import { File } from "@ionic-native/file/ngx";

@Component({
  selector: "app-about",
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"],
})
export class AboutPage implements OnInit {
  constructor(
    private afriService: AfrilangueService,
    private iab: InAppBrowser,
    private socialSharing: SocialSharing,
    private file: File
  ) { }

  options = [
    { name: "Mentions", icon: "assets/icon/information.svg", url: "mentions" },
    { name: "CGV", icon: "assets/icon/007-blog.svg", url: "cgv" },
    {
      name: "Confidentialité",
      icon: "assets/icon/002-shield.svg",
      url: "confidentilaite",
    },
  ];

  data;

  showInfo(url) {
    this.afriService.getHtml(url).subscribe((data) => {
      console.log("data ", data);
      this.data = data;
    });
    console.log(url);
  }

  blankInfo(url) {
    this.iab.create(url, "_blank");
  }

  url = "https://afrilangues.com/";
  text = "Apprenez gratuitement une langue africaine en 10 minutes par jour";

  async resolveLocalFile() {
    return this.file.copyFile(
      `${this.file.applicationDirectory}wwww/assets/imgs/`,
      "icon.png",
      this.file.cacheDirectory,
      `${new Date().getTime()}.jpg`
    );
  }

  removeTempFile(name) {
    this.file.removeFile(this.file.cacheDirectory, name);
  }

  share() {
    let options = {
      message:
        "Apprenez gratuitement une langue africaine en 10 minutes par jour",
      url: "https://afrilangues.com/",
    };

    this.socialSharing.shareWithOptions(options);
  }

  async shareFacebook() {
    const file = await this.resolveLocalFile();
    console.log("file ", file);

    this.socialSharing
      .shareViaFacebook(null, file.nativeURL, this.text)
      .then(() => {
        this.removeTempFile(file);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  ShareWhatsapp() {
    this.socialSharing
      .shareViaWhatsApp(this.text, null, this.url)
      .then(() => { })
      .catch((e) => {
        console.log(e);
      });
  }

  ngOnInit() { }
}
