import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LenderdashboardPage } from './lenderdashboard.page';

const routes: Routes = [
  {
  path: '',
    component: LenderdashboardPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'loans',
        loadChildren: () => import('../loans/loans.module').then(m => m.LoansPageModule)
      },
      {
        path: 'bids',
        loadChildren: () => import('../bids/bids.module').then(m => m.BidsPageModule)
      },
      {
        path: 'inbox',
        loadChildren: () => import('../inbox/inbox.module').then(m => m.InboxPageModule)
      },
      {
        path: '',
        redirectTo: '/lenderdashboard/loans',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/lenderdashboard/loans',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LenderdashboardPageRoutingModule {}
