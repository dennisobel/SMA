import { SocialSharing } from '@ionic-native/social-sharing';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import dummy from "../../data/dummydata";

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

dummyData: any
from:any[]=[];
originctry:any;    
name:any;
amount:any[]=[]
amount2:any[]=[]
amt:any;
amount3:any;
to:any;
frm:any;

constructor(
  public navCtrl: NavController, 
  public navParams: NavParams, 
  public viewCtrl: ViewController,
  public alertCtrl:AlertController,
  public socialSharing:SocialSharing){}
    
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
       
    this.dummyData = dummy
    for(var i = 0; i < this.dummyData.length; i++){      
        this.from = this.dummyData[i].to; 
          
        for(var j = 0; j < this.from.length; j++){  
          ////console.log(this.from[j])
          this.amount = this.from[j].amount
          ////console.log(this.amount)
          
          for(var k = 0; k < this.amount.length; k++){
            ////console.log(this.amount[k].record)
            this.amount2 = this.amount[k].record
            this.amount3 = this.from[j].name
            //console.log(this.amount3)
            ////console.log(this.amount2)
            
            // if(this.amount[k].firm = this.firm){
            //   //console.log(this.dummyData[i].to)
            // }
            
            for(var l = 0; l < this.amount2.length; l++){
              ////console.log(this.amount2[l].firm)              
              if(this.amount2[l].firm = this.firm){
                ////console.log("finally")
                ////console.log(this.from[j].name)
                ////console.log(this.dummyData[i].to)
                this.amt = this.amount[k].amount
                //this.to = this.from[j].name
                //console.log(this.amt)
                
              }else{
                //console.log("Jesus of Nazareth, King of the Jews, have mercy on my country Kenya")
              }
            }
            
          }
          
          /*
          if(this.from[j].amount == this.name){
            //console.log("match")
            this.originctry = this.dummyData[i].from
          }
          */
          
        }
        
    }
    
}

onClose(remove = false){
    this.viewCtrl.dismiss(remove)
}
regularShare(){
  this.socialSharing.share("Share page");
}

onHelpFee(){
  let alert = this.alertCtrl.create({
        title:"Fee",
        subTitle:"Fee is the amount one is charged for the transfer.",
        buttons:["OK"]
      });
      alert.present();
    /*
    if(document.getElementById("fee")){
      let alert = this.alertCtrl.create({
        title:"Fee",
        subTitle:"Fee is the amount one is charged for the transfer.",
        buttons:["OK"]
      });
      alert.present();
    }else if(document.getElementById("xrt")){
      let alert = this.alertCtrl.create({
        title:"Exchange Rate Margin",
        subTitle:"Exchange Rate Margin is the cost resulting from the fact that the firm applies a rate that is different from the interbank one. THe margin is the percentage difference between the interbank exchange rate and the exchange rate actually applied to the transaction.",
        buttons:["OK"]
      });
      alert.present();
    }else if(document.getElementById("tcp")){
      let alert = this.alertCtrl.create({
        title:"Total Cost Percent",
        subTitle:"The total cost of sending a remitance transfer includes: the fee charged to the sender plus the exchange rate margin.",
        buttons:["OK"]
      });
      alert.present();
    }
    else if(document.getElementById("tcpe")){
      let alert = this.alertCtrl.create({
        title:"Total Cost (EUR)",
        subTitle:"The total cost of sending a remittance transfer includes: the fee charged to the sender plus the exchange rate margin.",
        buttons:["OK"]
      });
      alert.present();
    }
    else if(document.getElementById("amt")){
      let alert = this.alertCtrl.create({
        title:"Amount Received",
        subTitle:"The amount that will be received.",
        buttons:["OK"]
      });
      alert.present();
    }
    else if(document.getElementById("tsp")){
      let alert = this.alertCtrl.create({
        title:"Transfer Speed",
        subTitle:"The amount of time it will take to transfer.",
        buttons:["OK"]
      });
      alert.present();
    }
    else if(document.getElementById("ncv")){
      let alert = this.alertCtrl.create({
        title:"Network Coverage",
        subTitle:"The reach of the money transfer services.",
        buttons:["OK"]
      });
      alert.present();
    }
    else if(document.getElementById("pav")){
      let alert = this.alertCtrl.create({
        title:"Product Availability",
        subTitle:"This tells you, in what format the product is available.",
        buttons:["OK"]
      });
      alert.present();
    }
    */
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
