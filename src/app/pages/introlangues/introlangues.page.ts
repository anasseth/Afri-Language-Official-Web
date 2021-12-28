import { Component, OnInit } from '@angular/core';
import {AfrilangueService} from '../../services/afrilangue.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-introlangues',
  templateUrl: './introlangues.page.html',
  styleUrls: ['./introlangues.page.scss'],
})
export class IntrolanguesPage implements OnInit {

  constructor(private afriService: AfrilangueService,private router:Router) { }

  profile:any;
  flagLink:[
    'https://img.icons8.com/emoji/96/000000/cameroon-emoji.png',
    'https://img.icons8.com/emoji/96/000000/senegal-emoji.png',
    'https://img.icons8.com/emoji/96/000000/senegal-emoji.png',
    'https://img.icons8.com/emoji/96/000000/congo-brazzaville-emoji.png'
  ]

  ngOnInit() {
    //this.onGetProfile();
    this.onGetLangues();

  }




  langues;



  itemClick(langue){
    console.log('langue choisie : ' , langue);

    this.afriService.language_id = langue.id

      let navigationExtra : NavigationExtras = {
          queryParams :{
              language : langue
          }
      }

      this.router.navigate(["/register"], navigationExtra)

  }


  onGetProfile(){

    this.afriService.getProfile()

        .subscribe(
            data=>{
              this.profile = data['success'];
              console.log(this.profile);
            }, error => console.log(error)
        )

  }

  onGetLangues(){

    this.afriService.getLangues()

        .subscribe(
            data=>{

              this.langues = data;
              console.log(this.langues);
            }, error => console.log(error)
        )

  }

  resetToken(){
    this.afriService.clearToken();
  }

}
