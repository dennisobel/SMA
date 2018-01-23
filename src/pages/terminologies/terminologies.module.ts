import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerminologiesPage } from './terminologies';

@NgModule({
  declarations: [
    TerminologiesPage,
  ],
  imports: [
    IonicPageModule.forChild(TerminologiesPage),
  ],
  exports: [
    TerminologiesPage
  ]
})
export class TerminologiesPageModule {}
