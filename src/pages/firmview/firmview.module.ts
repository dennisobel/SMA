import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirmviewPage } from './firmview';

@NgModule({
  declarations: [
    FirmviewPage,
  ],
  imports: [
    IonicPageModule.forChild(FirmviewPage),
  ],
  exports: [
    FirmviewPage
  ]
})
export class FirmviewPageModule {}
