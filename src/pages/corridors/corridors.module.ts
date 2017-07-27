import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CorridorsPage } from './corridors';

@NgModule({
  declarations: [
    CorridorsPage,
  ],
  imports: [
    IonicPageModule.forChild(CorridorsPage),
  ],
  exports: [
    CorridorsPage
  ]
})
export class CorridorsPageModule {}
