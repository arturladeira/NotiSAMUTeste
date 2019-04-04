import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegistroDataHoraPage } from './registro-data-hora.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroDataHoraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegistroDataHoraPage]
})
export class RegistroDataHoraPageModule {}
