import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { TranslateModule } from "@ngx-translate/core";
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { AboutsmaPage } from '../pages/aboutsma/aboutsma';
import { CorridorsPage } from '../pages/corridors/corridors';
import { HelpPage } from '../pages/help/help';
import { MethodologyPage } from '../pages/methodology/methodology';
import { RatesPage } from '../pages/rates/rates';
import { SettingsPage } from '../pages/settings/settings';
import { TransferratesPage } from '../pages/transferrates/transferrates';
import { MecorabPage } from '../pages/mecorab/mecorab';
MecorabPage
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
      MyApp,
      TabsPage,
      ListPage,
      AboutsmaPage,
      CorridorsPage,
      HelpPage,
      MethodologyPage,
      RatesPage,
      SettingsPage,      
      TransferratesPage,
      MecorabPage
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      TabsPage,
      ListPage,
      AboutsmaPage,
      CorridorsPage,
      HelpPage,
      MethodologyPage,
      RatesPage,
      SettingsPage,
      TransferratesPage,
      MecorabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
