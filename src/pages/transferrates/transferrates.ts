import { Component, OnInit } from '@angular/core';
import dummy from "../../data/dummydata"
import { ModalController } from "ionic-angular";
import { HomePage } from "../home/home";

@Component({
  selector: 'page-transferrates',
  templateUrl: 'transferrates.html'
})

export class TransferratesPage implements OnInit{

dummyData: any

ngOnInit(){
this.dummyData = dummy
}
    


constructor(private modalCtrl: ModalController) {}
     onSelect(dummy){    
        var res;
        
        for(var i=0; i<dummy.to.length; i++){        

        //console.log(dummy.to[i].name)

        res = dummy.to[i].name

        //console.log(res)        

        }
        
        console.log(dummy)
        
        const modal = this.modalCtrl.create(HomePage, dummy)
        modal.present()
     }
     
     
}



