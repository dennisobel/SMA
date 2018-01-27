import { Component } from '@angular/core';
import { ModalController, NavController } from "ionic-angular";
import { RatesPage } from "../rates/rates";
import { TransferratesPage } from "../transferrates/transferrates";
import { MethodologyPage } from "../methodology/methodology";
import { SettingsPage } from "../settings/settings";
import { AboutsmaPage } from "../aboutsma/aboutsma";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-corridors',
  templateUrl: 'corridors.html',
})
export class CorridorsPage{
    settingsPage:any;
    methodologyPage;
    aboutPage;
    transactions:any;

    constructor(
      private modalCtrl: ModalController,
      private navCtrl: NavController,
      public storage: Storage,
    ){
      this.methodologyPage = MethodologyPage;
      this.aboutPage = AboutsmaPage;
      this.settingsPage = SettingsPage;
    }

    ionViewDidLoad(){
      this.getFromLocal()
    }

    getFromLocal(){
      this.storage.get("mystore")
      .then((successData)=>{
          this.transactions = successData
      })
      return this.transactions 
    }

    openRates(toGroup){
      const modal = this.modalCtrl.create(RatesPage, toGroup)
      modal.present()
    }

    onBack(){
      this.navCtrl.setRoot(TransferratesPage)
    }
}
