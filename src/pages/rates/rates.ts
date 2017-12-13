import { SocialSharing } from '@ionic-native/social-sharing';
import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController } from 'ionic-angular';
import { ListPage } from "../list/list"
//import { CorridorsPage } from "../corridors/corridors"
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
to:any[]=[];
originctry:any;    
name: string;
flag: string;
amount: any[]=[]
curr:any


//modify later
toggle:any = "one"
amtone:any
amttwo:any
recordone:any
recordtwo:any

constructor(
    private modalCtrl: ModalController, 
    public navParams: NavParams, 
    private viewCtrl: ViewController,
    public socialSharing: SocialSharing) {
    /*
    this.amount = this.navParams.get("amount")
    this.toggle = this.amount[0].amount    
    //console.log(this.toggle)
    */
    }

ionViewDidLoad() {
    this.name = this.navParams.get("name")
    this.curr = this.navParams.get("currency")
    this.flag = this.navParams.get("flag")    
    this.amount = this.navParams.get("amount")    
    //this.toggle = this.amount[0].amount 
    //console.log(this.curr)
    
    this.dummyData = dummy
    for(var i = 0; i < this.dummyData.length; i++){      
        this.from = this.dummyData[i].to;     

        for(var j = 0; j < this.from.length; j++){     
          if(this.from[j].name == this.name){
            ////console.log("match")
            this.originctry = this.dummyData[i].from
            
            
          }
          
        }
    }
    this.amtone = this.amount[0].amount
    //console.log(this.amtone)
    this.amttwo = this.amount[1].amount
    //console.log(this.amttwo)
    this.recordone=this.amount[0].record
    //console.log(this.recordone)
    this.recordtwo=this.amount[1].record
    //console.log(this.recordtwo)

    
}
/*

onClick(amt){    
    this.record = amt.record
    //console.log(this.record)
    this.amnt = amt.amount
    //console.log(this.amnt)
}
*/
    
onClose(remove = false){
    this.viewCtrl.dismiss(remove)
}
    
moreDetails(record){
    const modal = this.modalCtrl.create(ListPage, record)
    modal.present()
}

regularShare(){
  this.socialSharing.share("http://www.sendmoneyafrica-auair.org");
}
}
