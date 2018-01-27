import { IonicStorageModule } from '@ionic/storage';
import { HttpModule, Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Network } from '@ionic-native/network';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ListPage } from '../pages/list/list';
import { AboutsmaPage } from '../pages/aboutsma/aboutsma';
import { CorridorsPage } from '../pages/corridors/corridors';
import { HelpPage } from '../pages/help/help';
import { MethodologyPage } from '../pages/methodology/methodology';
import { RatesPage } from '../pages/rates/rates';
import { TerminologiesPage } from '../pages/terminologies/terminologies';
import { SettingsPage } from '../pages/settings/settings';
import { FaqsPage } from '../pages/faqs/faqs';
import { TransferratesPage } from '../pages/transferrates/transferrates';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HideHeaderDirective } from '../directives/hide-header/hide-header';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ApiProvider } from '../providers/api/api';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
      MyApp,
      ListPage,
      AboutsmaPage,
      CorridorsPage,
      HelpPage,
      MethodologyPage,
      RatesPage,
      SettingsPage,  
      FaqsPage,
      TerminologiesPage,    
      TransferratesPage,
      HideHeaderDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    TranslateModule.forRoot({
      loader:{
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps:[Http]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      ListPage,
      AboutsmaPage,
      CorridorsPage,
      HelpPage,
      MethodologyPage,
      RatesPage,
      SettingsPage,
      FaqsPage,
      TerminologiesPage,
      TransferratesPage
  ],
  providers: [
    Network,
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
