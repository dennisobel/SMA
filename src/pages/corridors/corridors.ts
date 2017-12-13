import { SocialSharing } from '@ionic-native/social-sharing';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from "ionic-angular";
import { RatesPage } from "../rates/rates";
import { TransferratesPage } from "../transferrates/transferrates";
import { MethodologyPage } from "../methodology/methodology";
import { SettingsPage } from "../settings/settings";
import { AboutsmaPage } from "../aboutsma/aboutsma";

//api stuff
import { Http } from "@angular/http"
import 'rxjs/add/operator/map'
import { ApiProvider } from "../../providers/api/api"
import { TransactionsSchema } from "../../schemas/transactions"

import dummy from "../../data/dummydata"

@Component({
  selector: 'page-corridors',
  templateUrl: 'corridors.html',
})
export class CorridorsPage implements OnInit{
    settingsPage:any;
    methodologyPage;
    aboutPage;
    transactions:TransactionsSchema[];
    transaction:TransactionsSchema;
    transactions_test:TransactionsSchema[];
    to:any;
    from:any;
constructor(
	private modalCtrl: ModalController,
	private navCtrl: NavController,
  public socialSharing: SocialSharing,
  public apiProvider:ApiProvider){
      this.methodologyPage = MethodologyPage;
      this.aboutPage = AboutsmaPage;
      this.settingsPage = SettingsPage;
  }
dummyData: any

ngOnInit(){
    this.dummyData = dummy
}

  ionViewDidLeave(){
    //this.navCtrl.setRoot(TransferratesPage)
  }

  ionViewDidLoad(){
     //get transactions
    this.apiProvider.getTransactions()
    .subscribe(transactions=>{
        this.transactions = transactions;
        this.to = transactions.to
        this.from = transactions.from
        // console.log(this.from)
        // console.log(this.to)
        // console.log(this.transactions)
    })

    this.apiProvider.getTransactionsTest()
    .subscribe(transactions=>{
      this.transactions_test=transactions
    })
  }

    
openRates(toGroup){
    const modal = this.modalCtrl.create(RatesPage, toGroup)
        modal.present()
    }

    onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }

regularShare(){
  this.socialSharing.share("http://www.sendmoneyafrica-auair.org");
}

}
