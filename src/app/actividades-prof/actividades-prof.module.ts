import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActividadesProfPage } from './actividades-prof.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadesProfPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActividadesProfPage]
})
export class ActividadesProfPageModule {}
