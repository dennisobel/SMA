import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from "../settings/settings"
import { AboutsmaPage } from "../aboutsma/aboutsma"
import { MethodologyPage } from "../methodology/methodology"
import { TransferratesPage } from "../transferrates/transferrates"
import { FaqsPage } from "../faqs/faqs"
import { TerminologiesPage } from "../terminologies/terminologies"

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
aboutsmaPage;
settingsPage
methodologyPage;   
terminologiesPage;
faqsPage; 

constructor(
	public navCtrl: NavController){
    this.aboutsmaPage = AboutsmaPage
    this.settingsPage = SettingsPage
    this.methodologyPage = MethodologyPage
    this.faqsPage = FaqsPage
    this.terminologiesPage = TerminologiesPage
  }
    
  onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }
}
