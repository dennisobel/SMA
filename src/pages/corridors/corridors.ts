import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from "ionic-angular";
import { RatesPage } from "../rates/rates";
import { TransferratesPage } from "../transferrates/transferrates";

import dummy from "../../data/dummydata"

@Component({
  selector: 'page-corridors',
  templateUrl: 'corridors.html',
})
export class CorridorsPage implements OnInit{
    
constructor(
	private modalCtrl: ModalController,
	private navCtrl: NavController){}
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
}
