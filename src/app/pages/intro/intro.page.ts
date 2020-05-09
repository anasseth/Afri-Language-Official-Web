import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {AfrilangueService} from '../../services/afrilangue.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private alertController : AlertController, private afriService: AfrilangueService ,private router : Router) { }

  ngOnInit() {

  }





}
