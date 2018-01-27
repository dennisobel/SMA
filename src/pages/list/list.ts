import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

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
productavicn:any;
transferspeed:any;
networkcov:any;
transferspeeddef:any;
networkcovdef:any;

constructor(
  public navCtrl: NavController, 
  public navParams: NavParams, 
  public viewCtrl: ViewController,
  public alertCtrl:AlertController){}
    
ionViewDidLoad(){
    this.AmountReceived = this.navParams.get("AmountReceived")
    this.ExchangeRateMargin = this.navParams.get("ExchangeRateMargin")
    this.TotalCostEur = this.navParams.get("TotalCostEur")
    this.TotalCostPercent = this.navParams.get("TotalCostPercent")
    this.fee = this.navParams.get("fee")
    this.firm = this.navParams.get("firm")
    this.product_availability = this.navParams.get("product_availability")
    this.productavicn = this.navParams.get("productavicn")
    this.transferspeed = this.navParams.get("transferspeed")
    this.networkcov = this.navParams.get("networkcov")
    this.transferspeeddef = this.navParams.get("transferspeeddef")
    this.networkcovdef = this.navParams.get("networkcovdef")    
}

onClose(remove = false){
    this.viewCtrl.dismiss(remove)
}


onHelpFee(){
  let alert = this.alertCtrl.create({
        title:"Fee",
        subTitle:"Fee is the amount one is charged for the transfer.",
        buttons:["OK"]
      });
      alert.present();
  }

onHelpXrt(){
    let alert = this.alertCtrl.create({
        title:"Exchange Rate Margin",
        subTitle:"Exchange Rate Margin is the cost resulting from the fact that the firm applies a rate that is different from the interbank one. THe margin is the percentage difference between the interbank exchange rate and the exchange rate actually applied to the transaction.",
        buttons:["OK"]
      });
      alert.present();
  }

onHelpTcp(){
  let alert = this.alertCtrl.create({
        title:"Total Cost Percent",
        subTitle:"The total cost of sending a remitance transfer includes: the fee charged to the sender plus the exchange rate margin.",
        buttons:["OK"]
      });
      alert.present();
  }

onHelpTcpe(){
  let alert = this.alertCtrl.create({
        title:"Total Cost (EUR)",
        subTitle:"The total cost of sending a remittance transfer includes: the fee charged to the sender plus the exchange rate margin.",
        buttons:["OK"]
      });
      alert.present();
 }
onHelpAmt(){
  let alert = this.alertCtrl.create({
        title:"Amount Received",
        subTitle:"The amount that will be received.",
        buttons:["OK"]
      });
      alert.present();
  }
onHelpTsp(){
   let alert = this.alertCtrl.create({
        title:"Transfer Speed",
        subTitle:"The amount of time it will take to transfer.",
        buttons:["OK"]
      });
      alert.present();
 }
onHelpNcv(){
    let alert = this.alertCtrl.create({
        title:"Network Coverage",
        subTitle:"The reach of the money transfer services.",
        buttons:["OK"]
      });
      alert.present();
  }
onHelpPav(){
   let alert = this.alertCtrl.create({
        title:"Product Availability",
        subTitle:"This tells you, in what format the product is available.",
        buttons:["OK"]
      });
      alert.present(); 
  }
}
