import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransferratesPage } from "../transferrates/transferrates"
import { SettingsPage } from "../settings/settings"


@Component({
  selector: 'page-faqs',
  templateUrl: 'faqs.html',
})
export class FaqsPage {
  settingsPage:any;

  constructor(public navCtrl: NavController) {
    this.settingsPage = SettingsPage
  }

  onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }

}
