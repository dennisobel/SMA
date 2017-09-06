import { SocialSharing } from '@ionic-native/social-sharing';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from "ionic-angular";
import { RatesPage } from "../rates/rates";
import { TransferratesPage } from "../transferrates/transferrates";
import { MethodologyPage } from "../methodology/methodology";
import { SettingsPage } from "../settings/settings";
import { AboutsmaPage } from "../aboutsma/aboutsma";

import dummy from "../../data/dummydata"

@Component({
  selector: 'page-corridors',
  templateUrl: 'corridors.html',
})
export class CorridorsPage implements OnInit{
    settingsPage:any;
    methodologyPage;
    aboutPage;
    
constructor(
	private modalCtrl: ModalController,
	private navCtrl: NavController,
  public socialSharing: SocialSharing){
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

    
openRates(toGroup){
    const modal = this.modalCtrl.create(RatesPage, toGroup)
        modal.present()
    }

    onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }

regularShare(){
  this.socialSharing.share("Share page");
}

}
