import { TranslateService } from '@ngx-translate/core';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutsmaPage } from '../pages/aboutsma/aboutsma';
import { CorridorsPage } from '../pages/corridors/corridors';
import { MethodologyPage } from '../pages/methodology/methodology';
import { SettingsPage } from '../pages/settings/settings';
import { TransferratesPage } from '../pages/transferrates/transferrates';
import { HelpPage } from '../pages/help/help';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage: any = TabsPage;
  rootPage: any = TransferratesPage;
  @ViewChild(Nav) nav: Nav;

    //rootPage: any = TransferratesPage;
    //rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(  
  public platform: Platform, 
  public translate: TranslateService,
  public statusBar: StatusBar, 
  public splashScreen: SplashScreen) {

  translate.setDefaultLang('en');
  
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [ 
      { title: 'Corridors', component: CorridorsPage },     
      { title: 'Methodology', component: MethodologyPage },                 
      { title: 'About SMA', component: AboutsmaPage },      
      { title: 'Help', component: HelpPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
