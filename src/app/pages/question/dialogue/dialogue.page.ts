import { Component, Input, OnInit } from "@angular/core";
import { AlertController, ModalController, NavParams } from "@ionic/angular";
import { StreamingMedia } from "@ionic-native/streaming-media/ngx";
import { AfrilangueService } from "../../../services/afrilangue.service";
import { DomSanitizer } from "@angular/platform-browser";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Buffer } from "buffer";
import { log } from "util";
import { Howl, Howler } from "howler";

export interface Track {
  name: string;
  question: string;
  audio: string;
}

@Component({
  selector: "app-dialogue",
  templateUrl: "./dialogue.page.html",
  styleUrls: ["./dialogue.page.scss"],
})
export class DialoguePage implements OnInit {
  lesson;
  question_type;
  datas = [];

  data;

  index = 0;

  @Input() saisie: string;

  constructor(
    public sanitizer: DomSanitizer,
    private alertController: AlertController,
    private streamingMedia: StreamingMedia,
    private modalController: ModalController,
    private navParams: NavParams,
    private afriService: AfrilangueService,
    private domSanitize: DomSanitizer
  ) {
    this.question_type = this.navParams.get("question_type");
    this.lesson = this.navParams.get("lesson");
    // console.log("Intro info : ", this.question_type);
    // console.log("Lesson info : ", this.lesson);
  }

  ngOnInit() {
    this.onGetQuestion();
  }
  tailles;
  onGetQuestion() {
    this.afriService
      .getQuestion(this.lesson.id, this.question_type.value)
      .subscribe(
        (data) => {
          this.datas.push(data);
          this.tailles = this.datas[0].length - 1;
          this.data = this.datas[0][this.index];

          // console.log("data info : ", this.datas);
          this.resultats = [];
          this.onResponse();
        },
        (error) => {
          // console.log(error);
        }
      );
  }

  question_data = [];

  arrayTags = [];

  resultats = [];

  onDatas = [];
  player: Howl = null;

  startAudio(track: Track) {
    this.player = new Howl({
      src: ["https://afrilangues.com/public/audio/" + track.audio],
      html5: true,
    });
    this.player.play();
  }

  onResponse() {
    let question = this.data.question
      .replace(/^\[+|\]+$/g, "")
      .replace(/^\{+|\}+$/g, "")
      .split("},{");

    let reg = "/\\[(.*?)\\]/";
    let str = "Seriba, í ní [tag]sɔ̀gɔma[/tag].";

    //// console.log("solutions =>" ,  str.match(reg));

    let q = question.map((x) => {
      let pe = x.padStart(x.length + 1, "{").padEnd(x.length + 2, "}");

      this.question_data.push(JSON.parse(pe));
    });

    let sousTag;
    this.question_data.forEach((x, index) => {
      if (x.person1 != undefined) {
        // this.arrayTags.push(x.person1.split('[tag]').pop().split('[/tag]')[0])
        this.arrayTags.push(x.person1.split("[tag]"));
      } else if (x.person1 == undefined) {
        this.arrayTags.push(x.person2.split("[tag]"));
      }
    });
    sousTag = this.arrayTags.join("");

    let donnee = sousTag.split(",");

    // console.log("sousTag =>", sousTag);
    // console.log("sousTag2 =>", donnee);

    donnee.forEach((x) => {
      if (x.includes("[/tag]")) {
        this.resultats.push(x.split("[/tag]")[0]);
      }
    });

    // // console.log('solutions =>', this.arrayTags);
    // console.log("Resultats =>", this.resultats);

    this.onDatas = this.resultats;

    // console.log(this.oldSize);
    // console.log(this.onDatas.length);

    if (this.state == false) {
      const lost = this.resultats.slice(this.oldSize, this.onDatas.length);
      this.onDatas = this.resultats.slice(lost.length + 1, this.onDatas.length);

      this.resultats = this.onDatas;
    } else if (this.state == true) {
      const lost = this.resultats.slice(this.oldSize, this.onDatas.length);

      // console.log("lost =>", lost);
      this.onDatas = this.resultats.slice(lost.length - 1, this.onDatas.length);

      this.resultats = this.onDatas;
    }

    // console.log("size =>", this.onDatas.length);
    // console.log("onDatas =>", this.onDatas);

    // console.log(this.question_data);
    var x = "[f|oo|]";
    var y = x.replace(/^\[+|\]+$/g, "");
  }

  demo() {
    // console.log("Ca marche.");
  }

  test;

  onResultats(phrases, name, color) {
    let untag = phrases
      .replace("[tag]", "")
      .replace("/tag]", "")
      .replace("[tag]", "")
      .replace("/tag]", "");

    let actionold =
      "<input class='demo' style='width: 100px' type='text' ngModel name=" +
      name +
      "     /> ";
    let action =
      "<input class='demo' style=\"margin: 3px 1px;" +
      "width: 100px;\" type='text' ngModel name=" +
      name +
      "  readonly   /> ";

    for (let i = 0; i < this.resultats.length; i++) {
      //// console.log("index => " + i +" : "+ this.resultats[i]);

      //// console.log("Phrase : ", phrases ,phrases.includes(this.resultats[i]) , "Mot : " ,  this.resultats[i]);

      let untagtag;
      let ununtagtag;
      let unununtagtag;
      let ununununtagtag;
      let unununununtagtag;
      let ununununununtagtag;
      let unununununununtagtag;
      let ununununununununtagtag;
      let unununununununununtagtag;
      let unununununununununtagtag2;
      let unununununununununtagtag3;

      if (untag.includes(this.resultats[i] + "[")) {
        // // console.log("Phrase : ", untag.replace(this.resultats[i]+"[" , "!Okay!")    , "Mot : " ,  this.resultats[i]);

        untagtag = untag.replace(this.resultats[i] + "[", action);

        // // console.log("untagtag " ,  untagtag.replace(this.resultats[i-1]+"[" , action));

        ununtagtag = untagtag
          .replace(this.resultats[i - 1] + "[", action)
          .replace("[tag]", "")
          .replace("/tag]", "")
          .replace("[tag]", "")
          .replace("/tag]", "");
        unununtagtag = ununtagtag
          .replace(this.resultats[i - 1] + "[", action)
          .replace("[tag]", "")
          .replace("/tag]", "")
          .replace("[tag]", "")
          .replace("/tag]", "");
        ununununtagtag = unununtagtag
          .replace(this.resultats[i - 1] + "[", action)
          .replace("[tag]", "")
          .replace("/tag]", "")
          .replace("[tag]", "")
          .replace("/tag]", "");
        unununununtagtag = ununununtagtag
          .replace(this.resultats[i - 1] + "[", action)
          .replace("[tag]", "")
          .replace("/tag]", "")
          .replace("[tag]", "")
          .replace("/tag]", "");
        ununununununtagtag = unununununtagtag
          .replace(this.resultats[i - 1] + "[", action)
          .replace("[tag]", "")
          .replace("/tag]", "")
          .replace("[tag]", "")
          .replace("/tag]", "");
        unununununununtagtag = ununununununtagtag
          .replace(this.resultats[i - 1] + "[", action)
          .replace("[tag]", "")
          .replace("/tag]", "")
          .replace("[tag]", "")
          .replace("/tag]", "");
        ununununununununtagtag = unununununununtagtag
          .replace(this.resultats[i - 1] + "[", action)
          .replace("[tag]", "")
          .replace("/tag]", "")
          .replace("[tag]", "")
          .replace("/tag]", "");
        unununununununununtagtag = ununununununununtagtag
          .replace(this.resultats[i - 1] + "[", action)
          .replace("[tag]", "")
          .replace("/tag]", "")
          .replace("[tag]", "")
          .replace("/tag]", "");
        unununununununununtagtag2 = unununununununununtagtag
          .replace(this.resultats[i - 1] + "[", action)
          .replace("[tag]", "")
          .replace("/tag]", "")
          .replace("[tag]", "")
          .replace("/tag]", "");
        unununununununununtagtag3 = unununununununununtagtag2
          .replace(this.resultats[i - 1] + "[", action)
          .replace("[tag]", "")
          .replace("/tag]", "")
          .replace("[tag]", "")
          .replace("/tag]", "");

        phrases = unununununununununtagtag3
          .replace(this.resultats[i - 1] + "[", action)
          .replace("[tag]", "")
          .replace("/tag]", "")
          .replace("[tag]", "")
          .replace("/tag]", "");
      }
    }

    return phrases;
  }

  onDatasDemo = ["A - 1", "B - 2", "C - 3", "D - 4"];

  onDatasDemo2 = ["E - 1", "F - 2", "G - 3", "H - 4"];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
        /*  event.previousContainer.data,
                  event.container.data,
                  event.previousIndex,
                  event.currentIndex*/
      );
    }
    // console.log("Event : ", event);
  }

  onSubmit(f) {
    // console.log(this.saisie);
    // console.log(f.value);
  }

  saisieData = [];

  async successAlert() {
    const alert = await this.alertController.create({
      cssClass: "successAlert",
      header: "Réponse correcte",
      message: "<strong>Bravo!</strong>",
      buttons: ["Continuer"],
    });

    this.player = new Howl({
      src: ["https://afrilangues.com/public/right_answer.mp3"],
      html5: true,
    });
    this.player.play();

    await alert.present();
  }

  async falseAlert(wrong) {
    const alert = await this.alertController.create({
      cssClass: "falseAlert",
      header: "Réponse incorrecte",
      message: "<strong>Veuillez réessayer </strong>",
      buttons: ["Continuer"],
    });

    this.player = new Howl({
      src: ["https://afrilangues.com/public/wrong_answer.mp3"],
      html5: true,
    });
    this.player.play();
    await alert.present();
  }

  check() {
    let demo = document.getElementsByClassName("demo");

    for (let i = 0; i < demo.length; i++) {
      // @ts-ignore
      this.saisieData.push(demo[i].value);
    }

    // console.log(this.resultats.join(" "));
    // console.log(this.saisieData.join(" "));

    if (this.resultats.join(" ") == this.saisieData.join(" ")) {
      this.successAlert();
    } else {
      this.falseAlert(this.data.wrong_feedback);
    }

    this.saisieData = [];
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  cible = 0;

  onTap(result: any, index) {
    let demo = document.getElementsByClassName("demo");

    if (this.cible < demo.length) {
      (demo[this.cible] as HTMLInputElement).value = result;
      // console.log("possible");
      this.cible++;
      this.onDatas = [...this.onDatas.filter((word) => word != result)];
    }

    if (this.cible == demo.length) {
      this.cible = 100;
    }
  }

  reset() {
    let demo = document.getElementsByClassName("demo");
    for (let i = 0; i < demo.length; i++) {
      (demo[i] as HTMLInputElement).value = "";
    }
    this.cible = 0;

    this.onDatas = this.resultats;
    //// console.log(this.resultats);
  }

  oldSize;

  next() {
    if (this.data.question != undefined) {
      this.state = false;
      this.reset();
      this.index++;

      this.question_data = [];

      this.resultats = [];

      this.oldSize = this.onDatas.length;

      this.onGetQuestion();
    }
  }
  prevold;
  state;
  prev() {
    if (this.data.question != undefined) {
      this.state = true;
      this.reset();
      this.index--;

      this.question_data = [];
      this.resultats = [];

      this.oldSize = this.onDatas.length;
      this.prevold = this.onDatas.length;
      // console.log("prevvvvvvvv =>>>><", this.prevold);
      // console.log("prevvvvvvvvold =>>>><", this.oldSize);

      this.onGetQuestion();
      this.resultats = [];
    }
  }
}
