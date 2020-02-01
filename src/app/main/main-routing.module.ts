import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: '',
        redirectTo: 'check-in'
      },
      {
        path: 'check-in',
        loadChildren: () => import('./check-in/check-in.module').then(m => m.CheckInPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./check-in-dashboard/check-in-dashboard.module').then( m => m.CheckInDashboardPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
