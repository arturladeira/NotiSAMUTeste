import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-local',
  templateUrl: './registro-local.page.html',
  styleUrls: ['./registro-local.page.scss'],
})
export class RegistroLocalPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  public isChecked: boolean = false;
  ngOnInit() {
  }

  abrirPagina(nomeDaPagina: string) {
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
