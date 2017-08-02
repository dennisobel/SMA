import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController } from 'ionic-angular';
import { ListPage } from "../list/list"
//import dummy from "../../data/dummydata";

@Component({
  selector: 'page-rates',
  templateUrl: 'rates.html',
})
export class RatesPage {
record: any[]=[]

//dummyData: any
name: string;
flag: string;
amount: any[]=[]

constructor(private modalCtrl: ModalController, public navParams: NavParams, private viewCtrl: ViewController) {
}

ionViewDidLoad() {
    this.name = this.navParams.get("name")
    this.flag = this.navParams.get("flag")    
    this.amount = this.navParams.get("amount")
}

onClick(amt){    
    this.record = amt.record
    console.log(this.record)
}
    
onClose(remove = false){
    this.viewCtrl.dismiss(remove)
}
    
moreDetails(record){
    const modal = this.modalCtrl.create(ListPage, record)
    modal.present()
}


}
