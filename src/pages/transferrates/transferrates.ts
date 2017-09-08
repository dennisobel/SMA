import { SocialSharing } from "@ionic-native/social-sharing"
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from "ionic-angular";
import { RatesPage } from "../rates/rates";
import { HelpPage } from "../help/help";
import { SettingsPage } from "../settings/settings";

import dummy from "../../data/dummydata"

@Component({
    selector: 'page-transferrates',
    templateUrl: 'transferrates.html', 
})

export class TransferratesPage implements OnInit{
    choice;
    settingsPage:any;
    items:any;

dummyData: any
receiving : any[] = [];
choose: any[] = [];
    
ngOnInit(){
    this.dummyData = dummy    
}

constructor(
    public modalCtrl: ModalController, 
    public toastCtrl:ToastController,
    public socialSharing:SocialSharing){
    this.settingsPage = SettingsPage;  
}

ionViewDidLoad(){
    
}
    
onSelect(dummy){
    
    this.receiving.pop()
    var res: any[] = [];
    var mod;
    
    
    
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
            //console.log(this.choice)
        }
    }
}
    
onClick(choice){
    //console.log(choice)
if(choice == undefined){
        const toast = this.toastCtrl.create({
            message: "Please Check Your From and To Selection!",
            duration:3000,
            position: "bottom"
        });

        toast.onDidDismiss(()=>{
            //console.log("Toast Dismissed")    
        })
    
        toast.present();
    }else{
        const modal = this.modalCtrl.create(RatesPage, choice)
        modal.present()    
    }
}
    
onHelp(){
    const modal = this.modalCtrl.create(HelpPage)
    modal.present()
}

regularShare(){
    this.socialSharing.share("Share app")
}

}

     




