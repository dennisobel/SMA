import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutsmaPage } from './aboutsma';

@NgModule({
  declarations: [
    AboutsmaPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutsmaPage),
  ],
  exports: [
    AboutsmaPage
  ]
})
export class AboutsmaPageModule {}
