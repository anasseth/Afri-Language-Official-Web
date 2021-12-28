import { Component, OnInit } from '@angular/core';
import { AfrilangueService } from '../../../services/afrilangue.service';


@Component({
    selector: 'app-langues',
    templateUrl: './langues.page.html',
    styleUrls: ['./langues.page.scss'],
})
export class LanguesPage implements OnInit {

    usersData: any;
    usersData2: any;
    imageData = [
        "../../../assets/images/1.png",
        "../../../assets/images/2.png",
        "../../../assets/images/3.png",
        "../../../assets/images/4.png",
        "../../../assets/images/5.png",
        "../../../assets/images/6.png",
        "../../../assets/images/7.png",
        "../../../assets/images/8.png",
        "../../../assets/images/9.png",
        "../../../assets/images/10.png",
        "../../../assets/images/11.png"
    ]

    constructor(private afriService: AfrilangueService) {
        this.servLanguage = this.afriService.language_id
    }

    ngOnInit() {
        this.onGetProfile();
        this.onGetLangues();
        this.afriService.getLanguageData().subscribe(
            (data) => {
                this.usersData = JSON.parse(JSON.stringify(data))
                for (var i = 0; i < this.usersData.length; i++) {
                    this.usersData[i].logo = this.imageData[i]
                }
                console.log(data)
            }, (err) => {
                console.log(err)
            }, () => {
                console.log(this.usersData)
                this.usersData2 = this.usersData
            }
        )
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

        for (let i = 0; i < this.langues.length; i++) {
            if (this.langues[i].id == this.afriService.language_id) {
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
        this.servLanguage = this.afriService.language_id
        this.ngOnInit()


    }
}
