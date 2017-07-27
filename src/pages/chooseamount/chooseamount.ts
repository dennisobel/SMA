import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChoosefirmPage } from "../choosefirm/choosefirm"

/**
 * Generated class for the ChooseamountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chooseamount',
  templateUrl: 'chooseamount.html',
})
export class ChooseamountPage {
choosefirmPage = ChoosefirmPage 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseamountPage');
  }

}
