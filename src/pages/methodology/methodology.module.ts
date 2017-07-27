import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MethodologyPage } from './methodology';

@NgModule({
  declarations: [
    MethodologyPage,
  ],
  imports: [
    IonicPageModule.forChild(MethodologyPage),
  ],
  exports: [
    MethodologyPage
  ]
})
export class MethodologyPageModule {}
