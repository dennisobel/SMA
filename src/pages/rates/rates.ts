import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
//import dummy from "../../data/dummydata";

@Component({
  selector: 'page-rates',
  templateUrl: 'rates.html',
})
export class RatesPage {

//dummyData: any
name: string;
flag: string;

constructor(private viewCtrl: ViewController, public navParams: NavParams) {
}

ionViewDidLoad() {
    this.name = this.navParams.get("name")
    this.flag = this.navParams.get("flag")
}

onClose(remove = false){
    this.viewCtrl.dismiss(remove)
}


}
