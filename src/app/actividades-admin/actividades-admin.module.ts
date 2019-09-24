import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActividadesAdminPage } from './actividades-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadesAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActividadesAdminPage]
})
export class ActividadesAdminPageModule {}
