import { Component, OnInit } from '@angular/core';
//import { Dummy } from "../../data/dummydata.interface"
import { ModalController } from "ionic-angular";
import { RatesPage } from "../rates/rates";
import dummy from "../../data/dummydata"

@Component({
  selector: 'page-corridors',
  templateUrl: 'corridors.html',
})
export class CorridorsPage implements OnInit{
    
constructor(private modalCtrl: ModalController){}
    dummyData: any
    
    ngOnInit(){
        this.dummyData = dummy
    }
    
openRates(toGroup){
    const modal = this.modalCtrl.create(RatesPage, toGroup)
        modal.present()
    }
}
