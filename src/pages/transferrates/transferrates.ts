import { Component, OnInit } from '@angular/core';
//import { PopoverController, NavParams } from 'ionic-angular';
//import { TocountryPage } from "../tocountry/tocountry"
//import { AlertController, ModalController } from 'ionic-angular'
//import { RatesPage } from "../rates/rates"
//import { FormGroup, FormControl } from '@angular/forms'

import dummy from "../../data/dummydata"




@Component({
    selector: 'page-transferrates',
    templateUrl: 'transferrates.html', 
})

export class TransferratesPage implements OnInit{
choice;
choices;
dummyData: any
rs : any[] = [];
    
ngOnInit(){
    this.dummyData = dummy    
}

constructor(/*public alertCtrl: AlertController,public modalCtrl: ModalController*/){
    /*this.choices = new FormGroup({
    "choice"    : new FormControl({value:"from", disabled: false})
    })*/
}
    
doSubmit(event){
    console.log("submiting form ", this.choices.value);
    event.preventDefault();
}
/*   
onClick(dummy){
    var res;
    var mod;
    let alert = this.alertCtrl.create()
    for(var i = 0; i < dummy.to.length; i++){
        res = dummy.to[i].name
        mod = dummy.to[i]
        console.log(res);
        
        alert.setTitle("Send To:");

        alert.addInput({
            type: "radio",
            label: res,
            value: res
        })
        
    }
    
    alert.addButton("Cancel");
    alert.addButton({
        text: "Ok",
        handler: data=>{
        let modal = this.modalCtrl.create(RatesPage, mod);
        modal.present()
        console.log(res + " clicked")
        }
    })
    
    alert.present() 
    }*/
    
onSelect(dummy){
    this.rs.pop()
    var res: any[] = [];
    var mod;
    
    //let alert = this.alertCtrl.create()
    
    for(var i = 0; i < dummy.to.length; i++){
        //res = dummy.to[i].name
        res.push(dummy.to[i].name)
        mod = dummy.to[i]       
        //console.log(res)
    }
    
    this.rs.push(res);
    //this.rs.push(res)    
    //console.log(this.rs)
    console.log(this.rs[0]);
    
}
    

}

     




