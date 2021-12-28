import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.page.html',
  styleUrls: ['./grammar.page.scss'],
})
export class GrammarPage implements OnInit {

  constructor(private modalController : ModalController) { }

  ngOnInit() {
  }


  dismissModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
