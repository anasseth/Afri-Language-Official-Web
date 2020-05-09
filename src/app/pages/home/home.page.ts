import { Component, OnInit } from '@angular/core';
import {AfrilangueService} from '../../services/afrilangue.service';
import {log} from 'util';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private afriService: AfrilangueService,private router:Router) { }

  profile:any;

  ngOnInit() {
this.onGetProfile();
this.onGetLangues();

  }




  langues;



  itemClick(langue){
    console.log('langue choisie : ' , langue.id);


    let navigationExtra : NavigationExtras = {
        queryParams :{
            language_id : langue.id
        }
    }

    this.router.navigate(["/tabs/tabs/cours/"+langue.id], navigationExtra)
    
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
