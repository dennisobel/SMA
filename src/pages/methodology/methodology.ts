import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { SettingsPage } from "../settings/settings";
import { CorridorsPage } from "../corridors/corridors";
import { AboutsmaPage } from "../aboutsma/aboutsma";
import { TransferratesPage } from "../transferrates/transferrates";

@Component({
  selector: 'page-methodology',
  templateUrl: 'methodology.html',
})
export class MethodologyPage{
    corridorsPage;
    settingsPage:any;
    aboutPage;

  constructor(
    public navCtrl: NavController){
      this.corridorsPage = CorridorsPage;
      this.aboutPage = AboutsmaPage;
      this.settingsPage = SettingsPage;
  }
  
  onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }
}
