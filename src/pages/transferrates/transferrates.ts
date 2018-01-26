import { SocialSharing } from "@ionic-native/social-sharing"
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from "ionic-angular";
import { RatesPage } from "../rates/rates";
import { HelpPage } from "../help/help";
import { SettingsPage } from "../settings/settings";
import { Storage } from '@ionic/storage';
//import { Network } from '@ionic-native/network';


//api stuff
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { ApiProvider } from "../../providers/api/api";
import { TransactionsSchema } from "../../schemas/transactions";

//import dummy from "../../data/dummydata";

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
        //private network: Network,
        public http:Http){
        this.settingsPage = SettingsPage; 



        // this.storage.get("myStore").then((data)=>{
        //     this.items = data

        //     if(data != null){
        //         //data.push(this.dummyData);
        //         data = this.dummyData
        //         this.storage.set("myStore", data)
        //         console.log(data)     
        //     }else{
        //         let _data=[];
        //         _data.push(this.dummyData)
        //         this.storage.set("myStore", _data)
        //         //console.log("my data " + data)     
        //     }   
            
        // })
    }

    ngOnInit(){        
        this.apiProvider.getTransactionsTest()
        .subscribe(transactions =>{
            console.log(transactions)

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
                this.saveToLocal(transactions)

                //save to local storage
                // this.storage.get("myStore").then((data)=>{
                //     this.items = data
                //        console.log(data)  
                //     if(data != null){
                //         //data.push(this.dummyData);
                //         data = transactions
                //         this.storage.set("myStore", data)
                //         console.log(data)     
                //     }else{
                //         let _data=[];
                //         _data.push(transactions)
                //         this.storage.set("myStore", _data)
                //         console.log("my data " + data)
                //     }   
                    
                // }) 


// for(var i=0; i<this.dummyData.length; i++){
//     //console.log(this.dummyData[i].to)
//     this.names.push(this.dummyData[i].to)        
// }                          
            }
        })        
    }

 


    ionViewDidLoad(){    
        this.getFromLocal()
    }

    saveToLocal(data){
        this.storage.set("mystore",data)
        .then((successData)=>{
            console.log(successData)
        })
    }

    getFromLocal(){
        this.storage.get("mystore")
        .then((successData)=>{
            console.log(successData)
            this.items = successData
        })
        return this.items 
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
        for(var i in this.items){
            this.choiceTwo=datato;
            if(this.items[i].to.includes(datato)){
                this.sending.push(this.items[i].from)
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
        console.log(choice)
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
        console.log(choiceTwo)
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

     




