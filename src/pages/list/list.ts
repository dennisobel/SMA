import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
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

constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController){}
    
ionViewDidLoad(){
    this.AmountReceived = this.navParams.get("AmountReceived")
    this.ExchangeRateMargin = this.navParams.get("ExchangeRateMargin")
    this.TotalCostEur = this.navParams.get("TotalCostEur")
    this.TotalCostPercent = this.navParams.get("TotalCostPercent")
    this.fee = this.navParams.get("fee")
    this.firm = this.navParams.get("firm")
    this.product_availability = this.navParams.get("product_availability")
       
    this.dummyData = dummy
    for(var i = 0; i < this.dummyData.length; i++){      
        this.from = this.dummyData[i].to; 
          
        for(var j = 0; j < this.from.length; j++){  
          //console.log(this.from[j])
          this.amount = this.from[j].amount
          //console.log(this.amount)
          
          for(var k = 0; k < this.amount.length; k++){
            //console.log(this.amount[k].record)
            this.amount2 = this.amount[k].record
            this.amount3 = this.from[j].name
            console.log(this.amount3)
            //console.log(this.amount2)
            
            // if(this.amount[k].firm = this.firm){
            //   console.log(this.dummyData[i].to)
            // }
            
            for(var l = 0; l < this.amount2.length; l++){
              //console.log(this.amount2[l].firm)              
              if(this.amount2[l].firm = this.firm){
                //console.log("finally")
                //console.log(this.from[j].name)
                //console.log(this.dummyData[i].to)
                this.amt = this.amount[k].amount
                //this.to = this.from[j].name
                console.log(this.amt)
                
              }else{
                console.log("Jesus of Nazareth, King of the Jews, have mercy on my country Kenya")
              }
            }
            
          }
          
          /*
          if(this.from[j].amount == this.name){
            console.log("match")
            this.originctry = this.dummyData[i].from
          }
          */
          
        }
        
    }
    
}

onClose(remove = false){
    this.viewCtrl.dismiss(remove)
}
}
