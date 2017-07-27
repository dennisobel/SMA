import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseamountPage } from './chooseamount';

@NgModule({
  declarations: [
    ChooseamountPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseamountPage),
  ],
  exports: [
    ChooseamountPage
  ]
})
export class ChooseamountPageModule {}
