import { SocialSharing } from '@ionic-native/social-sharing';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { TransferratesPage } from "../transferrates/transferrates"

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public translateService: TranslateService,
    public socialSharing:SocialSharing,
    public viewCtrl:ViewController){
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SettingsPage');
  }
  
  onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }

  /*
  onChange(e){    
    if(e.checked == true){
      this.translateService.use('en');
      //console.log(this.translateService.use('en'))
      //console.log(e.checked)
    }else{
      this.translateService.use('es');
      //console.log(this.translateService.use('es'))
      //console.log(e.checked)
    }
  }
  */

  onEnglish(){
    this.translateService.use('en');
    //console.log(this.translateService.use('en'))
  }

  onFrench(){
    this.translateService.use('fr');
    //console.log(this.translateService.use('fr'))
  }

  regularShare(){
    this.socialSharing.share("http://www.sendmoneyafrica-auair.org");
  }
    
onClose(remove = false){
    this.viewCtrl.dismiss(remove)
}


}
