import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from "ionic-angular";
import { RatesPage } from "../rates/rates";
import { TransferratesPage } from "../transferrates/transferrates";
import { MethodologyPage } from "../methodology/methodology";
import { AboutsmaPage } from "../aboutsma/aboutsma";

import dummy from "../../data/dummydata"

@Component({
  selector: 'page-corridors',
  templateUrl: 'corridors.html',
})
export class CorridorsPage implements OnInit{
    methodologyPage;
    aboutPage;
    
constructor(
	private modalCtrl: ModalController,
	private navCtrl: NavController){
      this.methodologyPage = MethodologyPage;
      this.aboutPage = AboutsmaPage;
  }
dummyData: any

ngOnInit(){
    this.dummyData = dummy
}

  ionViewDidLeave(){
    //this.navCtrl.setRoot(TransferratesPage)
  }

    
openRates(toGroup){
    const modal = this.modalCtrl.create(RatesPage, toGroup)
        modal.present()
    }

    onBack(){
    this.navCtrl.setRoot(TransferratesPage)
  }
}
