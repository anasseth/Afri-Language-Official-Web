import { Component, Input, OnInit } from "@angular/core";
import { AfrilangueService } from "../../services/afrilangue.service";
import { Router } from "@angular/router";
import { ModalController, NavParams } from "@ionic/angular";

import { GrammarPage } from "../question/grammar/grammar.page";
import { DialoguePage } from "../question/dialogue/dialogue.page";
import { ReviewPage } from "../question/review/review.page";
import { VocabularyPage } from "../question/vocabulary/vocabulary.page";
import { SentencesPage } from "../question/sentences/sentences.page";

@Component({
  selector: "app-questiontypes",
  templateUrl: "./questiontypes.page.html",
  styleUrls: ["./questiontypes.page.scss"],
})
@Input("lesson")
export class QuestiontypesPage implements OnInit {
  lesson;

  constructor(
    private afriService: AfrilangueService,
    private navParams: NavParams,
    private router: Router,
    public modalController: ModalController
  ) {
    this.lesson = this.navParams.get("lesson");
  }

  questions = [
    {
      id: 1,
      name: "Intro",
      value: "Review",
      icon: "star-half",
      modal: "ReviewPage",
    },
    {
      id: 2,
      name: "Vocabulaire",
      value: "Vocabulary",
      icon: "school",
      modal: "VocabularyPage",
    },
    {
      id: 3,
      name: "Phrases",
      value: "Sentences",
      icon: "text",
      modal: "SentencesPage",
    },
    {
      id: 4,
      name: "Dialogue",
      value: "Dialogue",
      icon: "contacts",
      modal: "DialoguePage",
    },
    {
      id: 5,
      name: "Grammaire",
      value: "Grammar",
      icon: "book",
      modal: "GrammarPage",
    },
  ];

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  ngOnInit() {

    this.afriService.getContentCoveredPercentage().subscribe(
      data => {
        console.log(data)
      },
      (err) => {
        console.log(err)
      }
    )
  }


  async questionClick(question) {
    let modalPage;

    let page = [
      ReviewPage,
      VocabularyPage,
      SentencesPage,
      DialoguePage,
      GrammarPage,
    ];

    if (question.modal == "ReviewPage") {
      modalPage = page[1];
    } else if (question.modal == "VocabularyPage") {
      modalPage = page[1];
    } else if (question.modal == "SentencesPage") {
      modalPage = page[1];
    } else if (question.modal == "DialoguePage") {
      modalPage = page[3];
    } else {
      modalPage = page[1];
    }

    console.log("modal : ", page);

    const modal = await this.modalController.create({
      cssClass: "modal-fullscreen",

      component: modalPage,
      componentProps: {
        question_type: question,
        lesson: this.navParams.get("lesson"),
      },
    });
    return await modal.present();
  }
}
