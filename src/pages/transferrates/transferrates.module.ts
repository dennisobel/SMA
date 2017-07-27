import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferratesPage } from './transferrates';

@NgModule({
  declarations: [
    TransferratesPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferratesPage),
  ],
  exports: [
    TransferratesPage
  ]
})
export class TransferratesPageModule {}
