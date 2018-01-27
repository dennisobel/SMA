import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController } from 'ionic-angular';
import { ListPage } from "../list/list"


@Component({
  selector: 'page-rates',
  templateUrl: 'rates.html',
})
export class RatesPage { 
   
name: string;
flag: string;
amount: any[]=[]
currency:any
toggle:string 



constructor(
    private modalCtrl: ModalController, 
    public navParams: NavParams, 
    private viewCtrl: ViewController){}

    ionViewDidLoad() {
        this.name = this.navParams.get("name")
        this.currency = this.navParams.get("currency")
        this.flag = this.navParams.get("flag")    
        this.amount = this.navParams.get("amount")    
        this.toggle = this.amount[0].amount
    }
    
    onClose(remove = false){
        this.viewCtrl.dismiss(remove)
    }
        
    moreDetails(record){
        const modal = this.modalCtrl.create(ListPage, record)
        modal.present()
    }
}
