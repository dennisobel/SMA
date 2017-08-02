import { Component } from '@angular/core';
import { CorridorsPage } from "../corridors/corridors";
import { AboutsmaPage } from "../aboutsma/aboutsma";

@Component({
  selector: 'page-methodology',
  templateUrl: 'methodology.html',
})
export class MethodologyPage {
    corridorsPage;
    aboutPage;

  constructor() {
      this.corridorsPage = CorridorsPage;
      this.aboutPage = AboutsmaPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MethodologyPage');
  }
    


}
