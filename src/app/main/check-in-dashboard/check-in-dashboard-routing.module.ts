import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckInDashboardPage } from './check-in-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CheckInDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckInDashboardPageRoutingModule {}
