import { Component, OnInit } from '@angular/core';
//import { PopoverController, NavParams } from 'ionic-angular';
//import { TocountryPage } from "../tocountry/tocountry"
//import { AlertController, ModalController } from 'ionic-angular'
//import { RatesPage } from "../rates/rates"
//import { FormGroup, FormControl } from '@angular/forms'
import { ModalController } from "ionic-angular";
import { RatesPage } from "../rates/rates";

import dummy from "../../data/dummydata"




@Component({
    selector: 'page-transferrates',
    templateUrl: 'transferrates.html', 
})

export class TransferratesPage implements OnInit{
choice;

dummyData: any
receiving : any[] = [];
choose: any[] = [];
    
ngOnInit(){
    this.dummyData = dummy    
}

constructor(public modalCtrl: ModalController){
    /*this.choices = new FormGroup({
    "choice"    : new FormControl({value:"from", disabled: false})
    })*/
}
    
//doSubmit(event){
//    console.log("submiting form ", this.choices.value);
//    event.preventDefault();
//}


/*   
onClick(dummy){
alert()
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
    //alert("You have selected")
    this.receiving.pop()
    var res: any[] = [];
    var mod;
    
    //let alert = this.alertCtrl.create()
    
    for(var i = 0; i < dummy.to.length; i++){
        //res = dummy.to[i].name
        res.push(dummy.to[i].name)
        mod = dummy.to       
        //console.log(res)
    }
    //console.log(res);
    
    this.receiving.push(res)  
    this.choose = mod
    //console.log(this.receiving)
    //console.log(this.choose)
    
    
}
    
onChoose(r){ 
    for(var i = 0; i < this.choose.length; i++){
        if(this.choose[i].name == r){
            this.choice = this.choose[i]
            console.log(this.choice)
        }
    }
}
    
onClick(choice){
    const modal = this.modalCtrl.create(RatesPage, choice)
    modal.present() 
}
}

     




