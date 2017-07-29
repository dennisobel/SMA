import { Component } from '@angular/core';
import { ViewController, NavParams, AlertController } from 'ionic-angular';
//import dummy from "../../data/dummydata";

@Component({
selector: 'page-home',
templateUrl: 'home.html',
})
export class HomePage {

//dummyData: any
from: string;
flag: string;
name: string;

testRadioOpen : boolean;
testRadioResult;


constructor(private viewCtrl: ViewController, public navParams: NavParams, private alertCtrl: AlertController) {
}

ionViewDidLoad() {
    this.from = this.navParams.get("from")
    this.flag = this.navParams.get("flag")
    
    
}

onClose(remove = false){
this.viewCtrl.dismiss(remove)
}

onClick(){
    let alert = this.alertCtrl.create();
    alert.setTitle("Sending to");
    
    for(var i = 0; i<this.from.length; i++){
    alert.addInput({
    type: "radio",
    label: this.from,
    value:"green"    
    });
    }
    
    
    alert.addButton("Cancel");
    alert.addButton({
        text:"Ok",
        handler: data => {
        console.log("Radio data:", data);
            this.testRadioOpen = false;
            this.testRadioResult = data
        }
    });
    
    alert.present().then(()=>{
    this.testRadioOpen = true
    })
}
}

