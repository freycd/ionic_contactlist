import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyC1zVfBO6E6JrdTm-QcglPxDPyCf6vQ6EY",
    authDomain: "ionc-contactlist.firebaseapp.com",
    databaseURL: "https://ionc-contactlist.firebaseio.com",
    storageBucket: "ionc-contactlist.appspot.com",
    messagingSenderId: "931416621921"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
