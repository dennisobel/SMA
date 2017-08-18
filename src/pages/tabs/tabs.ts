import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CorridorsPage } from "../corridors/corridors"
import { AboutsmaPage } from "../aboutsma/aboutsma"
import { MethodologyPage } from "../methodology/methodology"
import { TransferratesPage } from "../transferrates/transferrates"

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  transferratesRoot = TransferratesPage
  corridorsRoot = CorridorsPage
  aboutSmaRoot = AboutsmaPage
  methodologyRoot = MethodologyPage

  constructor(public navCtrl: NavController) {}

}
