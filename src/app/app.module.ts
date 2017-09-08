import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
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
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HideHeaderDirective } from '../directives/hide-header/hide-header';
import { SocialSharing } from '@ionic-native/social-sharing';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
      HideHeaderDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader:{
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps:[Http]
      }
    }),
    IonicModule.forRoot(MyApp)
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
      TransferratesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
