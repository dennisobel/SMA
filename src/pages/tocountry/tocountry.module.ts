import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TocountryPage } from './tocountry';

@NgModule({
  declarations: [
    TocountryPage,
  ],
  imports: [
    IonicPageModule.forChild(TocountryPage),
  ],
  exports: [
    TocountryPage
  ]
})
export class TocountryPageModule {}
