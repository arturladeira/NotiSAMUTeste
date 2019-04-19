import { Component, OnInit } from '@angular/core';
import { NavController,
  Loading,
  LoadingController,
  AlertController,
  Alert} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreService } from '../../Firestore/firestore.service';


@Component({
  selector: 'app-registro-data-hora',
  templateUrl: './registro-data-hora.page.html',
  styleUrls: ['./registro-data-hora.page.scss'],
})
export class RegistroDataHoraPage implements OnInit {

  public createRegisterForm: FormGroup;

  constructor(private navCtrl: NavController,
  public loadingCtrl: LoadingController,
  public alertCtrl: AlertController,
  public firestoreService: FirestoreService,
  formBuilder: FormBuilder) { 
    this.createRegisterForm = formBuilder.group({
    notifierName: ['', Validators.required],
    occurrenceDate: ['', Validators.required],
    schedule: ['', Validators.required],
    notifierProfession: ['', Validators.required],
  });
}

  ngOnInit() {
  }

  createRegister(): void {
    const loading: Loading = this.loadingCtrl.create();
    loading.present();

  const notifierName = this.createRegisterForm.value.notifierName;
  const occurrenceDate = this.createRegisterForm.value.occurrenceDate;
  const schedule = this.createRegisterForm.value.schedule;
  const notifierProfession = this.createRegisterForm.value.notifierProfession;

  this.firestoreService
    .createRegister(notifierName, occurrenceDate, schedule, notifierProfession)
    .then(
      () => {
        loading.dismiss().then(() => {
          this.navCtrl.pop();
        });
      },
      async error => {
        loading.dismiss().then(() => {
          let alert: Alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: 'Ok', role: 'cancel' }],
          });
          alert.present();
        });
      }
    );
   }

  abrirPagina(nomeDaPagina: string) {
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
