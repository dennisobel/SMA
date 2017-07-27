import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutsmaPage } from '../pages/aboutsma/aboutsma';
import { CorridorsPage } from '../pages/corridors/corridors';
import { HelpPage } from '../pages/help/help';
import { MethodologyPage } from '../pages/methodology/methodology';
import { RatesPage } from '../pages/rates/rates';
import { SettingsPage } from '../pages/settings/settings';
import { SharePage } from '../pages/share/share';
import { TransferratesPage } from '../pages/transferrates/transferrates';
import { ChooseamountPage } from "../pages/chooseamount/chooseamount"
import { ChoosefirmPage } from "../pages/choosefirm/choosefirm"



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
      AboutsmaPage,
      CorridorsPage,
      HelpPage,
      MethodologyPage,
      RatesPage,
      SettingsPage,
      SharePage,
      TransferratesPage,
      ChooseamountPage,
      ChoosefirmPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
      AboutsmaPage,
      CorridorsPage,
      HelpPage,
      MethodologyPage,
      RatesPage,
      SettingsPage,
      SharePage,
      TransferratesPage,
      ChooseamountPage,
      ChoosefirmPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
