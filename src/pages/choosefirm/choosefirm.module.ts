import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosefirmPage } from './choosefirm';

@NgModule({
  declarations: [
    ChoosefirmPage,
  ],
  imports: [
    IonicPageModule.forChild(ChoosefirmPage),
  ],
  exports: [
    ChoosefirmPage
  ]
})
export class ChoosefirmPageModule {}
