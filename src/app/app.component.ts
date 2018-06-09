
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.setRoot();

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  setRoot(){
    if (localStorage.getItem("newUser")) {
      if(localStorage.getItem("isLoggedIn"))
        this.rootPage = "HomePage";
        else
        this.rootPage = "LoginPage"
    }
    else {

      this.rootPage = "OnboardPage";
    }

  }
}

