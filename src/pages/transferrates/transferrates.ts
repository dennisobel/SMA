import { SocialSharing } from "@ionic-native/social-sharing"
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from "ionic-angular";
import { RatesPage } from "../rates/rates";
import { HelpPage } from "../help/help";
import { SettingsPage } from "../settings/settings";
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import _ from 'lodash'

//api stuff
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { ApiProvider } from "../../providers/api/api";
import { TransactionsSchema } from "../../schemas/transactions";

import dummy from "../../data/dummydata";

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

    transactions:TransactionsSchema[];
    transaction:TransactionsSchema;
    transactions_test:TransactionsSchema[];
    
constructor(
    public modalCtrl: ModalController, 
    public toastCtrl:ToastController,
    public socialSharing:SocialSharing,
    public storage: Storage,
    public apiProvider:ApiProvider,
    private network: Network,
    public http:Http){
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

ngOnInit(){
    //this.dummyData = dummy    
    //console.log(this.dummyData)

    // for(var i=0; i<this.dummyData.length; i++){
    //     //console.log(this.dummyData[i].to)
    //     this.names.push(this.dummyData[i].to)        
    // }
}


ionViewDidLoad(){
    let connectSubscription = this.network.onConnect().subscribe(() => {
      console.log('network connected!');
      // We just got a connection but we need to wait briefly
       // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    });   
    connectSubscription.unsubscribe();
    //console.log(this.dummyData)
    //get transactions
    this.apiProvider.getTransactions()
    .subscribe(transactions=>{
        this.transactions = transactions;
         //console.log(this.transactions)        
    })

    
    this.apiProvider.getTransactionsTest()
    .subscribe(transactions =>{
        //console.log(transactions)
        this.dummyData=transactions;

        if(this.dummyData == undefined){
            console.log("undefined")
            const toast = this.toastCtrl.create({
                message: "Problem with your connection. Retrying!",
                duration:3000,
                position: "middle"
            });   
            toast.present();
        }else{
            console.log("present")
            console.log(this.dummyData)

            for(var i=0; i<this.dummyData.length; i++){
                //console.log(this.dummyData[i].to)
                this.names.push(this.dummyData[i].to)        
            }            
        }
    })



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
    console.log(choice.amount.length)
    if(choice.amount.length < 2){
        const toast = this.toastCtrl.create({
            message: "Problem with your data, sorry for the inconvenience. Notifying support team!",
            duration:3000,
            position: "middle"
        });   
        toast.present();
    }else if(choice.amount.length >= 2){
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

}

onClickTwo(choiceTwo){
    if(choiceTwo.amount.length < 2){
        const toast = this.toastCtrl.create({
            message: "Problem with your data, sorry for the inconvenience. Notifying support team!",
            duration:3000,
            position: "middle"
        });   
        toast.present();
    }else if(choiceTwo.amount.length >= 2){
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
    // console.log(choiceTwo)
    // if(choiceTwo == undefined){
    //     const toast = this.toastCtrl.create({
    //         message: "Please Check Your From and To Selection!",
    //         duration:3000,
    //         position: "bottom"
    //     });

    //     toast.onDidDismiss(()=>{
    //         //console.log("Toast Dismissed")    
    //     })
    
    //     toast.present();
    // }else{
    //     const modal = this.modalCtrl.create(RatesPage, choiceTwo)
    //     modal.present() 
    // }
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

     




