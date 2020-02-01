import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckInDashboardPage } from './check-in-dashboard.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: CheckInDashboardPage
    }])
  ],
  declarations: [CheckInDashboardPage]
})
export class CheckInDashboardPageModule { }
