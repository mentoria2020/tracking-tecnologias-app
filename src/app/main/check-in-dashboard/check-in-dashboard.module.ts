import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckInDashboardPageRoutingModule } from './check-in-dashboard-routing.module';

import { CheckInDashboardPage } from './check-in-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckInDashboardPageRoutingModule
  ],
  declarations: [CheckInDashboardPage]
})
export class CheckInDashboardPageModule {}
