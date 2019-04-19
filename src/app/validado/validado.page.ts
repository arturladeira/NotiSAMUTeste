import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-validado',
  templateUrl: './validado.page.html',
  styleUrls: ['./validado.page.scss'],
})
export class ValidadoPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

}
