import { Component } from '@angular/core';

import { NavController , AlertController ,  ActionSheetController} from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
    contacts : FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController , af: AngularFire, 
              public actionSheetCtrl: ActionSheetController) {
    this.contacts = af.database.list('/Contacts');
  }
  //ADD BUTTON 
  addContact(){
  let prompt = this.alertCtrl.create({
    title: 'Add Contact :',
    message: "Contact details :",
    inputs: [
      {
        name: 'name',
        placeholder: 'Contact Name'
      },
      {
        name: 'number',
        placeholder: 'Contact number'
      }
      ,
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: contact => {
          this.contacts.push({
            name : contact.name ,
            number : contact.number,
          });
        }
      }
    ]
  });
  prompt.present();
}
}
