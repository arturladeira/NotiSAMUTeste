import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-data-hora',
  templateUrl: './registro-data-hora.page.html',
  styleUrls: ['./registro-data-hora.page.scss'],
})
export class RegistroDataHoraPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  abrirPagina(nomeDaPagina: string) {
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
