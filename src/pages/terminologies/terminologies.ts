import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransferratesPage } from "../transferrates/transferrates"

/**
 * Generated class for the TerminologiesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
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
