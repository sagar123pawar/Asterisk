
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSettingPage(){
    this.navCtrl.push("SettingPage");
  }

  goToPasswordDetailsPage(){
    this.navCtrl.push("PasswordDetailsPage")
  }

  goToNotesDetailsPage(){
    this.navCtrl.push("NotesDetailsPage")
  }
}
