import { Component } from '@angular/core';
import { CorridorsPage } from '../corridors/corridors'
import { MethodologyPage } from '../methodology/methodology'
import { SettingsPage } from "../settings/settings";
import { NavController } from "ionic-angular";
import { TransferratesPage } from '../transferrates/transferrates'

@Component({
  selector: 'page-aboutsma',
  templateUrl: 'aboutsma.html',
})

export class AboutsmaPage {
corridorsPage;
methodologyPage;
aboutsmaPage;
settingsPage:any;
constructor(
  public navCtrl:NavController){
      this.corridorsPage = CorridorsPage
      this.methodologyPage = MethodologyPage
      this.settingsPage = SettingsPage;
  }


  onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }
}
