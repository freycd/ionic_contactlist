# ionic_contactlist
Ionic + Angular2 + Typescript +FireBase practice
# 20170320
# Create + mapping data + button ADD :
* Create ionic_contactlist project
# Install AngularFire2 :
* `npm install angularfire2 --save`
# Initialize firebase by going to src/app/app.module.ts
* `import { NgModule, ErrorHandler } from '@angular/core';`
* `import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';`
* `import { MyApp } from './app.component';`
* `import { HomePage } from '../pages/home/home';`
* // Import the AF2 Module
* `import { AngularFireModule } from 'angularfire2';`
 
* // AF2 Settings
   * `export const firebaseConfig = {`
    * `apiKey: "AIzaSyDnAX0CQbbsMYuOTJ66ox_F0GwzPM4XPXY",`
    * `authDomain: "angularfire2-list-example.firebaseapp.com",`
    * `databaseURL: "https://angularfire2-list-example.firebaseio.com",`
    * `storageBucket: "",`
    * `messagingSenderId: "609067141823"`
    * `};`
