import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransferratesPage } from "../transferrates/transferrates"
import { SettingsPage } from "../settings/settings"


@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs.html',
})
export class FaqsPage {
  settingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.settingsPage = SettingsPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqsPage');
  }

    onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }

}
