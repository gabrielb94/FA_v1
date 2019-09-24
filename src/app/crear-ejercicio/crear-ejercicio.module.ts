import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearEjercicioPage } from './crear-ejercicio.page';

const routes: Routes = [
  {
    path: '',
    component: CrearEjercicioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearEjercicioPage]
})
export class CrearEjercicioPageModule {}
