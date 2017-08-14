import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController } from 'ionic-angular';
import { ListPage } from "../list/list"
import dummy from "../../data/dummydata";

@Component({
  selector: 'page-rates',
  templateUrl: 'rates.html',
})
export class RatesPage { 


record: any[]=[]
dummyData: any
amnt:any;
from:any[]=[];
originctry:any;    
name: string;
flag: string;
amount: any[]=[]

constructor(private modalCtrl: ModalController, public navParams: NavParams, private viewCtrl: ViewController) {
}

ionViewDidLoad() {
    this.name = this.navParams.get("name")
    this.flag = this.navParams.get("flag")    
    this.amount = this.navParams.get("amount")
    
    this.dummyData = dummy
    for(var i = 0; i < this.dummyData.length; i++){
        this.from = this.dummyData[i].from
        console.log(this.from)
        
        
        
        for(var j = 0; j < this.from.length; j++){
            this.originctry = this.from[j]
            //console.log(this.originctry)
        }
        
    }
    
}

onClick(amt){    
    this.record = amt.record
    console.log(this.record)
    this.amnt = amt.amount
    console.log(this.amnt)
}
    
onClose(remove = false){
    this.viewCtrl.dismiss(remove)
}
    
moreDetails(record){
    const modal = this.modalCtrl.create(ListPage, record)
    modal.present()
}


}
