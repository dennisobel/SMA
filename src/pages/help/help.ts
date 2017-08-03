import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsPage } from "../settings/settings"
import { MethodologyPage } from "../methodology/methodology"

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
settings;
methodology;    

constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController){
    this.settings = SettingsPage
    this.methodology = MethodologyPage
}
    
onClose(remove = false){
    this.viewCtrl.dismiss(remove)
}

}
