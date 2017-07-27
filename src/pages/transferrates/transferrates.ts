import { Component, OnInit } from '@angular/core';
import dumbo from "../../data/dummydata"

@Component({
  selector: 'page-transferrates',
  templateUrl: 'transferrates.html',
})

export class TransferratesPage implements OnInit{

dummyData: any



ngOnInit(){
this.dummyData = dumbo
}
    


constructor() {}

    onSelect(dummy){    
        var receivingoptions = "";
        

        for(var i=0; i<dummy.to.length; i++){
            receivingoptions += "<ion-option>"+dummy.to[i].name+"</ion-option>"
            console.log(dummy.to[i].name)
            
        }    
        //alert(receivingoptions)
        //document.getElementById("edit-field-destination-iso2").innerHTML = receivingoptions;    
    }   
    
    
}



