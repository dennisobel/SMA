import { SocialSharing } from '@ionic-native/social-sharing';
import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";
//import { TabsPage } from "../tabs/tabs";
import { CorridorsPage } from "../corridors/corridors";
import { AboutsmaPage } from "../aboutsma/aboutsma";
import { TransferratesPage } from "../transferrates/transferrates";

@Component({
  selector: 'page-methodology',
  templateUrl: 'methodology.html',
})
export class MethodologyPage implements OnInit{
    corridorsPage;
    aboutPage;
    root: any;

  constructor(
    public navCtrl: NavController,
    public socialSharing: SocialSharing){
      this.corridorsPage = CorridorsPage;
      this.aboutPage = AboutsmaPage;
  }

  // ionViewDidLoad(){
  //   this.navCtrl.setRoot(TabsPage)
  // }
  
     ngOnInit(){
  //   this.root = TabsPage;
  //   this.navCtrl.setRoot(this.root)
     }
  
  onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }

  regularShare(){
    this.socialSharing.share("Share page");
  }
}
