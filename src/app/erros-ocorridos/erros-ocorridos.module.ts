import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ErrosOcorridosPage } from './erros-ocorridos.page';

const routes: Routes = [
  {
    path: '',
    component: ErrosOcorridosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ErrosOcorridosPage]
})
export class ErrosOcorridosPageModule {}
