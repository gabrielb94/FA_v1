import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClasesAdminPage } from './clases-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ClasesAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClasesAdminPage]
})
export class ClasesAdminPageModule {}
