import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController, ViewController } from 'ionic-angular';
import { TransferratesPage } from "../transferrates/transferrates"

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController, 
    public translateService: TranslateService,
    public viewCtrl:ViewController){}
  
  onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }

  onEnglish(){
    this.translateService.use('en');
  }

  onFrench(){
    this.translateService.use('fr');
  }
    
  onClose(remove = false){
      this.viewCtrl.dismiss(remove)
  }
}
