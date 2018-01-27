import { SocialSharing } from "@ionic-native/social-sharing"
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from "ionic-angular";
import { RatesPage } from "../rates/rates";
import { HelpPage } from "../help/help";
import { SettingsPage } from "../settings/settings";
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { ApiProvider } from "../../providers/api/api";
import { TransactionsSchema } from "../../schemas/transactions";



@Component({
    selector: 'page-transferrates',
    templateUrl: 'transferrates.html', 
})

export class TransferratesPage implements OnInit{
    choice:any;
    choiceTwo:any;
    items:any;
    apiData: any
    receiving : any[] = [];
    sending:any[] = [];    
    chosenSendingCountry: any[] = [];    
    transactions:TransactionsSchema[];
    settingsPage:any;
    
    constructor(
        public modalCtrl: ModalController, 
        public toastCtrl:ToastController,
        public socialSharing:SocialSharing,
        public storage: Storage,
        public apiProvider:ApiProvider
    )
    {
        this.settingsPage = SettingsPage; 
    }

    ngOnInit(){        
        this.apiProvider.getTransactions()
        .subscribe(transactions =>{
            this.apiData=transactions;

            if(this.apiData == undefined){
                const toast = this.toastCtrl.create({
                    message: "Problem with your connection. Retrying!",
                    duration:3000,
                    position: "middle"
                });   
                toast.present();
            }else{
                this.saveToLocal(transactions)                         
            }
        })        
    }

    ionViewDidLoad(){    
        this.getFromLocal()
    }

    saveToLocal(data){
        this.storage.set("mystore",data)
        .then((successData)=>{
        })
    }

    getFromLocal(){
        this.storage.get("mystore")
        .then((successData)=>{
            this.items = successData
        })
        return this.items 
    }
        
    onSelect(data){
        this.receiving.pop()
        var res: any[] = [];
        var sendingCountrydata;
        
        for(var i = 0; i < data.to.length; i++){
            res.push(data.to[i].name)
            sendingCountrydata = data.to     
        }

        this.receiving.push(res)  
        this.chosenSendingCountry = sendingCountrydata
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
        
    onChoose(receiving){ 
        for(var i = 0; i < this.chosenSendingCountry.length; i++){
            if(this.chosenSendingCountry[i].name == receiving){
                this.choice = this.chosenSendingCountry[i]
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

     




