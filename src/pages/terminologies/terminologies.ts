import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransferratesPage } from "../transferrates/transferrates"

@Component({
  selector: 'page-terminologies',
  templateUrl: 'terminologies.html',
})
export class TerminologiesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminologiesPage');
  }

      onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }


}
