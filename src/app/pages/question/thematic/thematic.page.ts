import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { AfrilangueService } from "../../../services/afrilangue.service";
import { Track } from "../vocabulary/vocabulary.page";
import { Howl, Howler } from "howler";

export interface Track {
  name: string;
  question: string;
  audio: string;
}

@Component({
  selector: "app-thematic",
  templateUrl: "./thematic.page.html",
  styleUrls: ["./thematic.page.scss"],
})
export class ThematicPage implements OnInit {
  thematic;
  datas;
  subthematic;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private afriService: AfrilangueService
  ) {
    this.thematic = this.navParams.get("thematic");
    this.subthematic = this.navParams.get("subthematic");
  }

  ngOnInit() {
    this.onGetThemaric();

    if (!this.thematic) {
      this.onGetSubThemaric();
    }
  }

  onGetThemaric() {
    if (this.thematic) {
      this.afriService.getThematic(this.thematic.id).subscribe(
        (data) => {
          this.datas = data;

          console.log(this.datas);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  onGetSubThemaric() {
    this.afriService.getSubThematic(this.subthematic.id).subscribe(
      (data) => {
        this.datas = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  player: Howl = null;

  startAudio(audio) {
    this.player = new Howl({
      src: ["https://afrilangues.com/public/audio/" + audio],
      html5: true,
    });
    this.player.play();
  }

  async subThematicClick(thematic) {
    const modal = await this.modalController.create({
      cssClass: "modal-fullscreen",
      component: ThematicPage,
      componentProps: {
        subthematic: thematic,
      },
    });
    return await modal.present();
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
