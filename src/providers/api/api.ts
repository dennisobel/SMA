import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  constructor(public http: Http){}

  //get transactions

  getTransactions(){
    return this.http.get("http://sma.au-air.org/transactions/")
  	.map((res)=>res.json())
  }
}
