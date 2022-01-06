import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavParams} from '@ionic/angular';
import {StreamingMedia} from '@ionic-native/streaming-media/ngx';
import {AfrilangueService} from '../../../services/afrilangue.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Track} from '../vocabulary/vocabulary.page';
import {Howl, Howler} from 'howler';


export interface Track {
  name: string;
  question: string;
  audio: string;
}

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.page.html',
  styleUrls: ['./sentences.page.scss'],
})
export class SentencesPage implements OnInit {
  lesson;
  question_type;
  index = -1;
  datas = [];

  data;

  checkOptions;
  checkAnswer;

  options_data;
  question_data;
  answer_data;


  translateCheck;
  answerCheck;

  name: string;
  player: Howl = null;

  constructor(private streamingMedia: StreamingMedia, private alertController: AlertController, private modalController: ModalController, private navParams: NavParams, private afriService: AfrilangueService, private domSanitize: DomSanitizer) {
    this.question_type = this.navParams.get('question_type');
    this.lesson = this.navParams.get('lesson');



  }


  async successAlert() {


    const alert = await this.alertController.create({
      cssClass: 'successAlert',
      header: 'Réponse correcte',
      message: '<strong>Bravo!</strong>',
      buttons: ['Continuer']
    });

    await alert.present();
  }

  async falseAlert(wrong) {


    const alert = await this.alertController.create({
      cssClass: 'falseAlert',
      header: 'Réponse incorrecte',
      message: '<strong>' + wrong + '</strong>',
      buttons: ['Continuer']
    });

    await alert.present();
  }



  ngOnInit() {
    this.onGetQuestion();


  }


  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }



  onGetQuestion() {
    this.afriService.getQuestion(this.lesson.id, this.question_type.value).subscribe(data => {


      this.datas.push(data);
      this.data = this.datas[0][0];

    },
      error => {
        console.log(error);
      });
  }

  activeTrack: Track = null;


  startAudio(track: Track) {


    console.log("index : ", this.data);



    if (this.data.content_type == "multiple") {

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

    } if (this.data.content_type == "tap") {

      this.player = new Howl({
        src: ["https://afrilangues.com/public/audio/" + track.audio],
        html5: true,
      });
      this.player.play();

    }

    else {
      this.player = new Howl({
        src: ["https://afrilangues.com/public/audio/" + track.question],
        html5: true,
      });
      this.player.play();
    }





  }


  indexChoose;


  optionsClick(op, e) {


    this.indexChoose = e
      .map(function (e) {
        return e;
      })
      .indexOf(op);


    console.log(this.indexChoose);


    this.checkOptions = op;


  }




  optionIndex;
  questionIndex;

  optionsMatch(op, ops) {

    let index = ops.map(function (e) { return e; }).indexOf(op);

    this.optionIndex = index;

  }

  questionMatch(op, ops) {

    let index = ops.map(function (e) { return e; }).indexOf(op);

    this.questionIndex = index;

  }


  check() {


    if (this.datas[0][this.index].content_type == "multiple") {
      if (this.checkOptions == this.checkAnswer) {
        this.successAlert()
      } else {
        this.falseAlert(this.data.wrong_feedback);
      }

    }


    if (this.datas[0][this.index].content_type == "tap") {

      let result = this.responses.join(' ');
      let question = this.datas[0][this.index].question;
      console.log("response ", result);
      console.log("question ", question);

      if (result == question) {
        this.successAlert()
      }
      else {
        this.falseAlert(this.data.wrong_feedback);
      }

    }



    if (this.datas[0][this.index].content_type == "match") {



      if (this.questionIndex == this.optionIndex) {
        this.successAlert()
      } else {
        this.falseAlert("réessayer");
      }

    }

    if (this.datas[0][this.index].content_type == 'translate') {
      let result = this.answerCheck;

      let index = result
        .map(function (e) {
          return e.toLowerCase();
        })
        .indexOf(this.translateCheck.toLowerCase());

      console.log(index);

      if (index != -1) {
        this.successAlert();
      } else {
        this.falseAlert('réessayer');
      }
    }





  }

  next() {

    let taille: number = this.datas[0].length;


    if (this.index < taille) {
      ++this.index;
      this.data = this.datas[0][this.index];

      if (this.datas[0][this.index].content_type == "multiple") {


        this.checkAnswer = this.data.answer.replace(/^\["+|\"]+$/g, '');

        this.options_data = this.data.options.replace(/^\["+|\"]+$/g, '').split('","');

        var x = '[f|oo|]';
        var y = x.replace(/^\[+|\]+$/g, '');
        this.indexChoose = null;


      }

      if (this.datas[0][this.index].content_type == "match") {


        this.options_data = this.data.options.replace(/^\["+|\"]+$/g, '').split('","');
        this.question_data = this.data.question.replace(/^\["+|\"]+$/g, '').split('","');

        var x = '[f|oo|]';
        var y = x.replace(/^\[+|\]+$/g, '');

        console.log("Data : ", this.options_data);
        console.log("Data2 : ", this.question_data);

      }

      if (this.datas[0][this.index].content_type == "tap") {


        this.answer_data = this.data.answer.replace(/^\["+|\"]+$/g, '').split('","');


        var x = '[f|oo|]';
        var y = x.replace(/^\[+|\]+$/g, '');

        console.log("Data : ", this.answer_data);

        this.responses = [];

      }

      if (this.datas[0][this.index].content_type == "translate") {


        this.answerCheck = this.data.answer.replace(/^\["+|\"]+$/g, '').split('","');


        console.log("answer : ", this.answerCheck);

        this.translateCheck = ""


      }

    }

  }

  prev() {


    let taille: number = this.datas[0].length;

    if (this.index > 0) {
      --this.index;
      this.data = this.datas[0][this.index];


      if (this.datas[0][this.index].content_type == 'multiple') {

        this.checkAnswer = this.data.answer.replace(/^\["+|\"]+$/g, '');

        this.options_data = this.data.options
          .replace(/^\["+|\"]+$/g, '')
          .split('","');

        var x = '[f|oo|]';
        var y = x.replace(/^\[+|\]+$/g, '');

        this.indexChoose = null;
      }




      if (this.datas[0][this.index].content_type == "match") {




        this.options_data = this.data.options.replace(/^\["+|\"]+$/g, '').split('","');
        this.question_data = this.data.question.replace(/^\["+|\"]+$/g, '').split('","');

        var x = '[f|oo|]';
        var y = x.replace(/^\[+|\]+$/g, '');

        console.log("Data : ", this.options_data);
        console.log("Data2 : ", this.question_data);

      }

      if (this.datas[0][this.index].content_type == "tap") {


        this.answer_data = this.data.answer.replace(/^\["+|\"]+$/g, '').split('","');


        var x = '[f|oo|]';
        var y = x.replace(/^\[+|\]+$/g, '');

        console.log("Data : ", this.answer_data);

        this.responses = [];

      }

      if (this.datas[0][this.index].content_type == "translate") {


        this.answerCheck = this.data.answer.replace(/^\["+|\"]+$/g, '').split('","');


        console.log("answer : ", this.answerCheck);

        this.translateCheck = ""


      }


    }




  }


  responses = [];


  addItem(answer) {


    if (answer != null) {


      let index = this.answer_data.map(function (e) {
        return e;
      })
        .indexOf(answer);

      let demo = this.answer_data.splice(index, 1);
    }

    let demo = "";


    const result = this.answer_data.filter(data => data != demo);



    this.answer_data = result;


    this.responses.push(answer);

  }

  removeItem(answer) {

    let index = this.responses.map(function (e) {
      return e;
    })
      .indexOf(answer);

    let demo = this.responses.splice(index, 1);


    const result = this.responses.filter(data => data != demo);



    this.responses = result;


    this.answer_data.push(answer);



    this.addItem(null);
    this.responses.pop();
    console.log(this.responses);

  }
}
