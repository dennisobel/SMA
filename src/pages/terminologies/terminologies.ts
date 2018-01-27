import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransferratesPage } from "../transferrates/transferrates"

@Component({
  selector: 'page-terminologies',
  templateUrl: 'terminologies.html',
})
export class TerminologiesPage {

  constructor(public navCtrl: NavController){}


  onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }


}
