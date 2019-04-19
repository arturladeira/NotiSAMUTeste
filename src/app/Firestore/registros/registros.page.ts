import { Component, OnInit } from '@angular/core';
// import {  IonicPage,
//   NavController,
//   Loading,
//   LoadingController,
//   AlertController,
//   Alert, } from '@ionic/angular';
//   import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//   import { FirestoreProvider } from '../../providers/firestore/firestore';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})

export class RegistrosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// export class RegistrosPage implements OnInit {

//   public createSongForm: FormGroup; // This is the form we're creating.

// constructor(
//   public navCtrl: NavController,
//   public loadingCtrl: LoadingController,
//   public alertCtrl: AlertController,
//   public firestoreProvider: FirestoreProvider,
//   formBuilder: FormBuilder
// ) {
//   this.createSongForm = formBuilder.group({
//     albumName: ['', Validators.required],
//     artistName: ['', Validators.required],
//     songDescription: ['', Validators.required],
//     songName: ['', Validators.required],
//   });
// }
//   ngOnInit() {
//   }

//   goToCreatePage(): void {
//     this.navCtrl.navigateForward('CreatePage');
//   }
  
//   createSong(): void {
//     const loading: Loading = this.loadingCtrl.create();
//     loading.present();
  
//     const albumName = this.createSongForm.value.albumName;
//     const artistName = this.createSongForm.value.artistName;
//     const songDescription = this.createSongForm.value.songDescription;
//     const songName = this.createSongForm.value.songName;
  
//     this.firestoreProvider
//       .createSong(albumName, artistName, songDescription, songName)
//       .then(
//         () => {
//           loading.dismiss().then(() => {
//             this.navCtrl.pop();
//           });
//         },
//         error => {
//           loading.dismiss().then(() => {
//             const alert: Alert = this.alertCtrl.create({
//               message: error.message,
//               buttons: [{ text: 'Ok', role: 'cancel' }],
//             });
//             alert.present();
//           });
//         }
//       );
//   }
// }
