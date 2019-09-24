import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlanesAdminPage } from './planes-admin.page';

const routes: Routes = [
  {
    path: '',
    component: PlanesAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlanesAdminPage]
})
export class PlanesAdminPageModule {}
