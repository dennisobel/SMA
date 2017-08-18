import { Component, OnInit } from '@angular/core';
import { NavController } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import { CorridorsPage } from "../corridors/corridors";
import { AboutsmaPage } from "../aboutsma/aboutsma";
import { TransferratesPage } from "../transferrates/transferrates";

@Component({
  selector: 'page-mecorab',
  templateUrl: 'mecorab.html',
})
export class MecorabPage implements OnInit{
    corridorsPage;
    aboutPage;
    page: string = "methodology"
    //root: any;

  constructor(public navCtrl: NavController) {
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
}
