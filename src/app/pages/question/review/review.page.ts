import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AfrilangueService } from '../../../services/afrilangue.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})

export class ReviewPage implements OnInit {

  lesson;
  question_type;
  data;


  name: string;

  constructor(private modalController: ModalController, private navParams: NavParams, private afriService: AfrilangueService, private domSanitize: DomSanitizer) {
    this.question_type = this.navParams.get('question_type');
    this.lesson = this.navParams.get('lesson');
    console.log("Intro info : ", this.question_type);
    console.log("Lesson info : ", this.lesson);

    this.name = "<p><em><strong>abc</strong></em></p>";
  }

  ngOnInit() {
    this.onGetQuestion();
  }


  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  html;

  onGetQuestion() {
    this.afriService.getQuestion(this.lesson.id, this.question_type.value).subscribe(data => {
      this.html = data[0].answer.toString();
      console.log(this.html);
      this.data = this.html;

    },
      error => {
        console.log(error);
      })
  }

}
