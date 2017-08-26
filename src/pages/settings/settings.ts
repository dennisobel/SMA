import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransferratesPage } from "../transferrates/transferrates"

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public translateService: TranslateService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  
  onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }

  /*
  onChange(e){    
    if(e.checked == true){
      this.translateService.use('en');
      console.log(this.translateService.use('en'))
      console.log(e.checked)
    }else{
      this.translateService.use('es');
      console.log(this.translateService.use('es'))
      console.log(e.checked)
    }
  }
  */

  onEnglish(){
    this.translateService.use('en');
    console.log(this.translateService.use('en'))
  }

  onFrench(){
    this.translateService.use('fr');
    console.log(this.translateService.use('fr'))
  }


}
