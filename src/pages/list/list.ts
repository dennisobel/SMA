import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
AmountReceived: any;
ExchangeRateMargin: any;
TotalCostEur: any;
TotalCostPercent: any;
fee: any;
firm: any;
product_availability: any;
  

constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController){}
    
ionViewDidLoad(){
    this.AmountReceived = this.navParams.get("AmountReceived")
    this.ExchangeRateMargin = this.navParams.get("ExchangeRateMargin")
    this.TotalCostEur = this.navParams.get("TotalCostEur")
    this.TotalCostPercent = this.navParams.get("TotalCostPercent")
    this.fee = this.navParams.get("fee")
    this.firm = this.navParams.get("firm")
    this.product_availability = this.navParams.get("product_availability")
}

onClose(remove = false){
    this.viewCtrl.dismiss(remove)
}
}
