import { SocialSharing } from "@ionic-native/social-sharing"
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from "ionic-angular";
import { RatesPage } from "../rates/rates";
import { HelpPage } from "../help/help";
import { SettingsPage } from "../settings/settings";
import { Storage } from '@ionic/storage';

import dummy from "../../data/dummydata"

@Component({
    selector: 'page-transferrates',
    templateUrl: 'transferrates.html', 
})

export class TransferratesPage implements OnInit{
    choice;
    choiceTwo;
    settingsPage:any;
    items:any;

dummyData: any
receiving : any[] = [];
choose: any[] = [];
sending:any[] = [];

froms:any[]=[]
tos:any[]=[]
names:any[]=[]
dat:any;
    
ngOnInit(){
    this.dummyData = dummy    
    //console.log(this.dummyData)

    for(var i=0; i<this.dummyData.length; i++){
        //console.log(this.dummyData[i].to)
        this.names.push(this.dummyData[i].to)        
    }



}

constructor(
    public modalCtrl: ModalController, 
    public toastCtrl:ToastController,
    public socialSharing:SocialSharing,
    public storage: Storage){
    this.settingsPage = SettingsPage; 

    this.storage.get("myStore").then((data)=>{
        this.items = data
        if(data != null){
            //data.push(this.dummyData);
            data = this.dummyData
            this.storage.set("myStore", data)
            //console.log(data)     
        }
        /*
        else{
            let array=[];
            array.push(this.dummyData)
            this.storage.set("myStore", array)
            //console.log("my data " + data)     
        }   
        */
    })
}


ionViewDidLoad(){
    
}
    
onSelect(dummy){
    this.receiving.pop()
    var res: any[] = [];
    var mod;
    
    for(var i = 0; i < dummy.to.length; i++){
        res.push(dummy.to[i].name)
        mod = dummy.to       
    }

    this.receiving.push(res)  
    this.choose = mod
}

onSelectTwo(datato){
    this.sending.pop()    
    for(var i in this.dummyData){
        this.choiceTwo=datato;
        if(this.dummyData[i].to.includes(datato)){
            this.sending.push(this.dummyData[i].from)
        }
    }
}
    
onChoose(r){ 
    for(var i = 0; i < this.choose.length; i++){
        if(this.choose[i].name == r){
            this.choice = this.choose[i]
        }
    }
}
    
onClick(choice){
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

onClickTwo(choiceTwo){
    if(choiceTwo == undefined){
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
        const modal = this.modalCtrl.create(RatesPage, choiceTwo)
        modal.present() 
    }
}


    
onHelp(){
    const modal = this.modalCtrl.create(HelpPage)
    modal.present()
}

onFromTo(){
    document.getElementById("toFrom").setAttribute("style","display:none")
    document.getElementById("fromTo").setAttribute("style","display:null")
}

onToFrom(){
    document.getElementById("toFrom").setAttribute("style","display:null")
    document.getElementById("fromTo").setAttribute("style","display:none")
}

regularShare(){
    this.socialSharing.share("http://www.sendmoneyafrica-auair.org")
}

}

     




