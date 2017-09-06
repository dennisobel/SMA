import { SocialSharing } from "@ionic-native/social-sharing"
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { SettingsPage } from "../settings/settings"
import { AboutsmaPage } from "../aboutsma/aboutsma"
import { MethodologyPage } from "../methodology/methodology"
import { TransferratesPage } from "../transferrates/transferrates"

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
aboutsmaPage;
settingsPage
methodologyPage;    

constructor(
	public navCtrl: NavController, 
	public navParams: NavParams, 
	public viewCtrl: ViewController,
	public socialSharing:SocialSharing){
    this.aboutsmaPage = AboutsmaPage
    this.settingsPage = SettingsPage
    this.methodologyPage = MethodologyPage
}
    
  onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }

  regularShare(){
    this.socialSharing.share("Share page");
  }

}
