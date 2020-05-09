import {Component, OnInit} from '@angular/core';
import {AfrilangueService} from '../../../services/afrilangue.service';


@Component({
    selector: 'app-langues',
    templateUrl: './langues.page.html',
    styleUrls: ['./langues.page.scss'],
})
export class LanguesPage implements OnInit {

    constructor(private afriService: AfrilangueService) {
        this.servLanguage =  this.afriService.language_id
    }

    ngOnInit() {
        this.onGetProfile();
        this.onGetLangues();
    }

    langues;
    user;

    onGetProfile() {
        this.afriService.getProfile().subscribe(
            data => {
                this.user = data['success'];

                console.log('user ', this.user);

            }
        );
    }

    currentLangue
    onLanguage() {

        for (let i = 0 ; i < this.langues.length ; i++) {
           if (this.langues[i].id == this.afriService.language_id){
               this.currentLangue = this.langues[i]
           }
        }

    }

    onGetLangues() {

        this.afriService.getLangues()

            .subscribe(
                data => {

                    this.langues = data;
                    this.onLanguage();
                }, error => console.log(error)
            );

    }

    servLanguage

    itemClick(langue: any) {

        this.afriService.language_id = langue.id
        this.servLanguage =  this.afriService.language_id
     this.ngOnInit()


    }
}
