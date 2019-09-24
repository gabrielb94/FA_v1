import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BalanceAdminPage } from './balance-admin.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BalanceAdminPage]
})
export class BalanceAdminPageModule {}
