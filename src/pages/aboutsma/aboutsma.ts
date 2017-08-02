import { Component } from '@angular/core';
import { CorridorsPage } from '../corridors/corridors'
import { MethodologyPage } from '../methodology/methodology'

@Component({
  selector: 'page-aboutsma',
  templateUrl: 'aboutsma.html',
})

export class AboutsmaPage {
corridorsPage;
methodologyPage;
constructor(){
      this.corridorsPage = CorridorsPage
      this.methodologyPage = MethodologyPage
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutsmaPage');
  } 
}
