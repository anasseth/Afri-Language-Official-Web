import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import {AfrilangueService} from './services/afrilangue.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router,
        private aftiService:AfrilangueService

    ) {
        this.initializeApp();
    }



    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.login();


           
        });


    }



    public login(){

        let authenfification = this.aftiService.loadToken();

        if (authenfification){
            this.router.navigateByUrl("/tabs/tabs/cours");
        }else {
            this.router.navigateByUrl("/intro");
        }


    }

}
