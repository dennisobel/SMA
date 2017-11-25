import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {

  constructor(public http: Http){}

  //get transactions

  getTransactions(){
  	return this.http.get("http://localhost:8000/transactions/")
  	.map(res=>res.json());
  }

}
