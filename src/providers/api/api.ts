import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  constructor(public http: Http){}

  //get transactions

  getTransactions(){
  	//return this.http.get("http://sma.au-air.org/api/sma.json")
    return this.http.get("http://localhost:8000/transactions/")
  	.map(res=>res.json());
  }


  getTransactionsTest(){
  	//return this.http.get("https://api.myjson.com/bins/1hf2gf")
    return this.http.get("http://localhost:8000/transactions/")
    //return this.http.get("https://api.myjson.com/bins/jsahr")
  	.map(res=>res.json());
  }

  getapi(){
    return this.http.get("http://localhost:8000/transactions/")
    .map(res=>{
        console.log(res.json())
    })
  }
}
