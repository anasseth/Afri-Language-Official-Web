import { Component, OnInit } from "@angular/core";
import { AlertController, ModalController, NavParams } from "@ionic/angular";
import { AfrilangueService } from "../../../services/afrilangue.service";
import { DomSanitizer } from "@angular/platform-browser";
import { VideoPlayer } from "@ionic-native/video-player/ngx";

import {
  StreamingMedia,
  StreamingAudioOptions,
  StreamingVideoOptions,
} from "@ionic-native/streaming-media/ngx";
import { Howl, Howler } from "howler";

export interface Track {
  name: string;
  question: string;
  audio: string;
}

@Component({
  selector: "app-vocabulary",
  templateUrl: "./vocabulary.page.html",
  styleUrls: ["./vocabulary.page.scss"],
})
export class VocabularyPage implements OnInit {
  constructor(
    private streamingMedia: StreamingMedia,
    private alertController: AlertController,
    private modalController: ModalController,
    private navParams: NavParams,
    private afriService: AfrilangueService,
    private domSanitize: DomSanitizer,
    private videoPlayer: VideoPlayer
  ) {
    this.question_type = this.navParams.get("question_type");
    this.lesson = this.navParams.get("lesson");
  }

  triedTimes = 0;

  lesson;
  question_type;
  index = 0;
  datas = [];

  answer_data;
  data;

  checkOptions;
  checkAnswer;

  options_data;
  question_data;

  translateCheck;
  answerCheck;

  name: string;
  player: Howl = null;
  statistics;

  tailles;

  activeTrack: Track = null;

  indexChoose;

  optionIndex;

  nomOption;

  questionIndex;
  nomQuestion;

  // Tap

  responses = [];

  play(url) {
    const options: StreamingVideoOptions = {
      successCallback: () => {
        console.log("Video played");
      },
      errorCallback: (e) => {
        console.log("Error streaming");
      },
      orientation: "portrait",
      /* shouldAutoClose: true,
             controls: false*/
    };

    this.streamingMedia.playVideo(
      "https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4",
      options
    );

    /*    this.videoPlayer.play(url).then(() => {
                console.log('video completed');
            }).catch(err => {
                console.log(err);
            });*/
  }

  playVideo(url) {
    const options: StreamingVideoOptions = {
      successCallback: () => {
        console.log("Video played");
      },
      errorCallback: (e) => {
        console.log("Error streaming");
      },
      orientation: "portrait",
      /* shouldAutoClose: true,
             controls: false*/
    };

    console.log(
      '"https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4"'
    );

    this.streamingMedia.playVideo(
      "https://www.youtube.com/watch?v=MB4CuO6-0GE",
      options
    );

    /*    this.videoPlayer.play(url).then(() => {
             console.log('video completed');
         }).catch(err => {
             console.log(err);
         });*/
  }

  formatMultiple(data) {
    this.indexChoose = null;

    return data.replace(/^\["+|\"]+$/g, "").split('","');
  }
  formatTap(data) {
    this.responses = [];

    return data.replace(/^\["+|\"]+$/g, "").split('","');
  }

  format(data) {
    return data.replace(/^\["+|"]+$/g, "").split(",");
  }
  replaceImg(data) {
    return data.replace('"', "").replace('"', "").replace('"', "");
  }

  nameInp = -1;

  renit() {
    this.arrayDrag = [];
    this.nameInp = -1;

    let datas = document.querySelectorAll(".data.result");

    for (let i = 0; i < datas.length; i++) {
      const element = datas[i];
      element.innerHTML = " ";
    }
  }

  arrayDrag = [];
  dragTap(data, array) {
    this.nameInp++;
    const indexTap = this.format(array)
      .map(function (e) {
        return e;
      })
      .indexOf(data);

    //this.checkOptions = op;

    if (this.arrayDrag.length < array.length) {
      const inputThis = document.getElementById(this.nameInp.toString());

      inputThis.innerText = this.replaceImg(data);
      this.arrayDrag.push(this.replaceImg(data));
    }

    console.log(this.arrayDrag);
  }

  async successAlert() {
    this.triedTimes = 0;
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
  // this.data.answer
  async falseAlert(wrong) {
    const alert = await this.alertController.create({
      cssClass: "falseAlert",
      header: "Réponse incorrecte",
      message: (this.triedTimes >= 3) && (this.data.content_type == "truefalse") ? "<strong> La bonne réponse est : <br /><br />" + this.data.answer + "</strong><br /><br />" : (this.triedTimes >= 3) && (this.data.content_type == "multiple") ? "<strong> La bonne réponse est : <br /><br />" + this.checkAnswer + "</strong><br /><br />" : (this.triedTimes >= 3) && (this.data.content_type == "translate") ? "<strong> La bonne réponse est : <br /><br />" + this.answerCheck[0] + "</strong><br /><br />" : (this.triedTimes >= 3) && (this.data.content_type == "tap") ? "<strong> La bonne réponse est : <br /><br />" + this.data.question + "</strong><br /><br />" : (this.triedTimes >= 3) && (this.data.content_type == "fill") ? "<strong> La bonne réponse est : <br /><br />" + this.data.answer + "</strong><br /><br />" : "<strong>Mauvaise réponse</strong><br />",
      buttons: ["Continuer"],
    });

    this.player = new Howl({
      src: ["https://afrilangues.com/public/wrong_answer.mp3"],
      html5: true,
    });
    this.player.play();

    await alert.present();
  }

  ngOnInit() {
    this.onGetQuestion();
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  /*   onGetQuestionSing() {
    console.log("lesson = ", this.lesson.id);
    console.log("question_type = ", this.question_type.question_type);
    this.afriService
      .getQuestion(this.lesson.id, this.question_type.question_type)
      .subscribe(
        (data) => {
          this.datas.push(this.question_type);
          this.data = this.question_type;

          console.log("Data => ", this.data);
          //this.tailles = this.datas[0].length - 1;
        },
        (error) => {
          console.log(error);
        }
      );
  } */
  onGetQuestion() {
    console.log("question_type => ", this.question_type.value);

    if (this.question_type.value != undefined) {
      this.afriService
        .getQuestion(this.lesson.id, this.question_type.value)
        .subscribe(
          (data) => {
            this.datas.push(data);
            this.data = this.datas[0][0];

            console.log("Data => ", this.data);
            this.tailles = this.datas[0].length - 1;
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      this.afriService
        .getQuestion(this.lesson.id, this.question_type.question_type)
        .subscribe(
          (data) => {
            this.datas.push(data);
            this.data = this.question_type;

            console.log("Data => ", this.data);
            this.tailles = this.datas[0].length;

            this.globalRender(this.data);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  startAudio(track: Track) {
    if (this.data.content_type == "multiple") {
      this.player = new Howl({
        src: ["https://afrilangues.com/public/audio/" + track.audio],
        html5: true,
      });
      this.player.play();
    }

    if (this.data.content_type == "tap") {
      this.player = new Howl({
        src: ["https://afrilangues.com/public/audio/" + track.audio],
        html5: true,
      });
      this.player.play();
    }

    if (this.data.content_type == "fill") {
      this.player = new Howl({
        src: ["https://afrilangues.com/public/audio/" + track.audio],
        html5: true,
      });
      this.player.play();
    }

    if (this.data.content_type == "translate") {
      this.player = new Howl({
        src: ["https://afrilangues.com/public/audio/" + track.audio],
        html5: true,
      });
      this.player.play();
    } else {
      this.player = new Howl({
        src: ["https://afrilangues.com/public/audio/" + track.question],
        html5: true,
      });
      this.player.play();
    }
  }

  chooses = [
    { name: "faux", data: "false", value: 0 },
    { name: "Vrai", data: "true", value: 1 },
  ];

  choosesVal;

  chooseClick(choose) {
    this.indexChoose = choose.value;
    this.choosesVal = choose.data;

    console.log(this.choosesVal);
  }

  optionsClick(op, e) {
    this.indexChoose = e
      .map(function (e) {
        return e;
      })
      .indexOf(op);

    this.checkOptions = op;

    console.log(this.checkAnswer)
    console.log(this.checkOptions)
    console.log(this.data)
  }

  fillMatch(op, ops) {
    this.indexChoose = ops
      .map(function (e) {
        return e;
      })
      .indexOf(op);

    this.questionIndex = ops
      .map(function (e) {
        return e;
      })
      .indexOf(op);

    this.nomQuestion = ops[this.questionIndex];
  }

  optionsMatch(op, ops) {
    this.optionIndex = ops
      .map(function (e) {
        return e;
      })
      .indexOf(op);

    this.nomOption = ops[this.optionIndex];
  }

  questionMatch(op, ops) {
    this.questionIndex = ops
      .map(function (e) {
        return e;
      })
      .indexOf(op);

    this.nomQuestion = ops[this.questionIndex];
  }

  addItem(answer) {
    if (answer != null) {
      const index = this.answer_data
        .map(function (e) {
          return e;
        })
        .indexOf(answer);

      const demo = this.answer_data.splice(index, 1);
    }

    const demo = "";

    const result = this.answer_data.filter((data) => data != demo);

    this.answer_data = result;

    this.responses.push(answer);
  }

  removeItem(answer) {
    const index = this.responses
      .map(function (e) {
        return e;
      })
      .indexOf(answer);

    const demo = this.responses.splice(index, 1);

    const result = this.responses.filter((data) => data != demo);

    this.responses = result;

    this.answer_data.push(answer);

    this.addItem(null);
    this.responses.pop();
  }

  // Fin Tap

  check() {
    this.triedTimes = this.triedTimes + 1;
    if (this.data.content_type == "multiple") {
      const answercheck = '["' + this.checkOptions + '"]';
      this.afriService
        .getCheck(
          this.data.id,
          this.data.content_type,
          this.data.question_type,
          this.data.lession_id,
          answercheck
        )
        .subscribe((data) => {
          console.log(data);
        });

      if (this.checkOptions == this.checkAnswer) {
        this.checkOptions = null;
        this.successAlert();
      } else {
        this.checkOptions = null;
        this.falseAlert(this.data.wrong_feedback);
      }
    }

    if (this.data.content_type == "fill") {
      this.afriService
        .getCheck(
          this.data.id,
          this.data.content_type,
          this.data.question_type,
          this.data.lession_id,
          this.nomQuestion
        )
        .subscribe((data) => {
          console.log(data);
        });

      if (this.nomQuestion == this.data.answer) {
        this.nomQuestion = null;
        this.successAlert();
      } else {
        this.nomQuestion = null;
        this.falseAlert(this.data.wrong_feedback);
      }
    }

    if (this.data.content_type == "match") {
      if (this.questionIndex == this.optionIndex) {
        this.options_data = this.options_data.filter(
          (word) => word != this.options_data[this.optionIndex]
        );
        this.question_data = this.question_data.filter(
          (word) => word != this.question_data[this.questionIndex]
        );
        this.successAlert();
      } else {
        this.falseAlert("réessayer");
      }

      this.nomOption = null;
      this.nomQuestion = null;

      if (this.question_data.length == 0) {
        this.player = new Howl({
          src: ["http://www.universal-soundbank.com/sounds/1480.mp3"],
          html5: true,
        });
        this.player.play();
      }
    }

    if (this.data.content_type == "tap") {
      const result = this.responses.join(" ");
      const question = this.data.question;
      const answercheck = JSON.stringify(result.split(" "));

      if (result == question) {
        this.successAlert();
      } else {
        this.falseAlert(this.data.wrong_feedback);
      }
    }

    if (this.data.content_type == "translate") {
      const result = this.answerCheck;
      console.log("Answer Check : ", this.answerCheck)
      this.translateCheck = this.translateCheck.toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').replace(/ /g, "")
      console.log(this.answerCheck[0]);
      // console.log(this.answerCheck[0].toLowerCase().replace(/[^a-zA-Z ]/g, ""))
      // console.log(this.answerCheck[0].toLowerCase().replace(/\s+/g, ''))
      console.log(this.answerCheck[0].toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').replace(/ /g, ""))
      console.log(this.translateCheck)

      // const index = result
      //   .map(function (e) {
      //     console.log(e.toLowerCase().replace(/\s+/g, ''))
      //     console.log()
      //     return e.toLowerCase().replace(/\s+/g, '');
      //   })
      //   .indexOf(this.translateCheck.toLowerCase().replace(/\s+/g, ''));

      // Updated Translation Code
      var index = 0;
      for (var j = 0; j < result.length; j++) {
        var userAnswer = this.translateCheck.toLowerCase().replace(/\s+/g, '').replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '');
        if (result[j].toLowerCase().replace(/\s+/g, '').replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '') == userAnswer) {
          index = 1;
          break;
        }
        else {
          index = -1;
        }
      }

      console.log(" Correct Answer : ", this.answerCheck[0].toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').replace(/ /g, ""))
      console.log(" User Answer : ", this.translateCheck.toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '').replace(/ /g, ""))

      console.log(index)

      if (index != -1) {
        this.successAlert();
        this.afriService
          .getCheck(
            this.data.id,
            this.data.content_type,
            this.data.question_type,
            this.data.lession_id,
            this.answerCheck[0]
          )
          .subscribe((data) => {
            console.log(data);
          });
      } else {
        this.falseAlert("réessayer");
        this.afriService
          .getCheck(
            this.data.id,
            this.data.content_type,
            this.data.question_type,
            this.data.lession_id,
            this.data.id
          )
          .subscribe((data) => {
            console.log(data);
          });
      }
    }

    if (this.data.content_type == "imagedrag") {
      let final = [];
      const results = this.format(this.data.answer);

      for (let i = 0; i < results.length; i++) {
        const element = results[i];
        final.push(this.replaceImg(element));
      }

      if (final.join(" ").includes(this.arrayDrag.join(" "))) {
        this.successAlert();
        this.afriService
          .getCheck(
            this.data.id,
            this.data.content_type,
            this.data.question_type,
            this.data.lession_id,
            this.data.answer
          )
          .subscribe((data) => {
            console.log(data);
          });
      } else {
        this.falseAlert("réessayer");
        this.afriService
          .getCheck(
            this.data.id,
            this.data.content_type,
            this.data.question_type,
            this.data.lession_id,
            this.data.id
          )
          .subscribe((data) => {
            console.log(data);
          });
      }
    }
    if (this.data.content_type == "truefalse") {
      console.log(this.choosesVal);
      console.log(this.data.answer);

      if (this.choosesVal == this.data.answer) {
        this.successAlert();
      } else {
        this.falseAlert("réessayer");
      }
    }
  }

  tapRender() {
    this.answer_data = this.data.answer
      .replace(/^\["+|\"]+$/g, "")
      .split('","');

    const x = "[f|oo|]";
    const y = x.replace(/^\[+|\]+$/g, "");

    this.responses = [];
  }
  matchRender() {
    this.options_data = this.data.options
      .replace(/^\["+|\"]+$/g, "")
      .split('","');
    this.question_data = this.data.question
      .replace(/^\["+|\"]+$/g, "")
      .split('","');

    this.nomOption = null;
    this.nomQuestion = null;
  }
  multipleRender() {
    this.checkAnswer = this.data.answer.replace(/^\["+|\"]+$/g, "");

    this.options_data = this.data.options
      .replace(/^\["+|\"]+$/g, "")
      .split('","');

    this.indexChoose = null;
  }
  fillRender() {
    this.checkAnswer = this.data.answer.replace(/^\["+|\"]+$/g, "");

    this.options_data = this.data.options
      .replace(/^\["+|\"]+$/g, "")
      .split('","');

    const x = "[f|oo|]";
    const y = x.replace(/^\[+|\]+$/g, "");
    this.indexChoose = null;
    this.nomQuestion = null;
  }
  translateRender() {

    this.answerCheck = this.data.answer
      .replace(/^\["+|\"]+$/g, "")
      .split('","');

    this.translateCheck = "";

  }
  truefalseRender() {
    this.answerCheck = this.data.answer
      .replace(/^\["+|\"]+$/g, "")
      .split('","');

    this.translateCheck = "";
  }
  globalRender(data) {
    if (data.content_type == "multiple") {
      this.multipleRender();
    }

    if (data.content_type == "fill") {
      this.fillRender();
    }

    if (data.content_type == "tap") {
      this.tapRender();
    }

    if (data.content_type == "match") {
      this.matchRender();
    }

    if (data.content_type == "translate") {
      this.translateRender();
    }
    if (data.content_type == "truefalse") {
      this.truefalseRender();
    }
  }

  next() {
    this.triedTimes = 0;
    const taille: number = this.datas[0].length - 1;

    if (this.index < taille) {
      this.index++;
      this.data = this.datas[0][this.index];

      this.globalRender(this.datas[0][this.index]);
    } else {
      this.datas[0][this.index].content_type == undefined;
    }
  }

  prev() {
    this.triedTimes = 0;
    const taille: number = this.datas[0].length;

    if (this.index > 0) {
      --this.index;
      this.data = this.datas[0][this.index];

      this.globalRender(this.datas[0][this.index]);

      /*   if (this.datas[0][this.index].content_type === "multiple") {
        this.checkAnswer = this.data.answer.replace(/^\["+|\"]+$/g, "");

        this.options_data = this.data.options
          .replace(/^\["+|\"]+$/g, "")
          .split('","');

        const x = "[f|oo|]";
        const y = x.replace(/^\[+|\]+$/g, "");

        this.indexChoose = null;
      }

      if (this.datas[0][this.index].content_type === "fill") {
        this.checkAnswer = this.data.answer.replace(/^\["+|\"]+$/g, "");

        this.options_data = this.data.options
          .replace(/^\["+|\"]+$/g, "")
          .split('","');

        const x = "[f|oo|]";
        const y = x.replace(/^\[+|\]+$/g, "");
        this.indexChoose = null;
        this.nomQuestion = null;
      }

      if (this.datas[0][this.index].content_type === "match") {
        this.options_data = this.data.options
          .replace(/^\["+|\"]+$/g, "")
          .split('","');
        this.question_data = this.data.question
          .replace(/^\["+|\"]+$/g, "")
          .split('","');

        const x = "[f|oo|]";
        const y = x.replace(/^\[+|\]+$/g, "");

        this.nomOption = null;
        this.nomQuestion = null;
      }

      if (this.datas[0][this.index].content_type === "tap") {
        this.answer_data = this.data.answer
          .replace(/^\["+|\"]+$/g, "")
          .split('","');

        const x = "[f|oo|]";
        const y = x.replace(/^\[+|\]+$/g, "");

        this.responses = [];
      }

      if (this.datas[0][this.index].content_type === "translate") {
        this.answerCheck = this.data.answer
          .replace(/^\["+|\"]+$/g, "")
          .split('","');

        this.translateCheck = "";
      } */
    }
  }
}
