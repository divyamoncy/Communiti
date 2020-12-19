import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'loanrequest',
    loadChildren: () => import('./loanrequest/loanrequest.module').then( m => m.LoanrequestPageModule)
  },
  {
    path: 'lenderdashboard',
    loadChildren: () => import('./lenderdashboard/lenderdashboard.module').then( m => m.LenderdashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'bids',
    loadChildren: () => import('./bids/bids.module').then( m => m.BidsPageModule)
  },
  {
    path: 'loans',
    loadChildren: () => import('./loans/loans.module').then( m => m.LoansPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'lenderonboarding',
    loadChildren: () => import('./lenderonboarding/lenderonboarding.module').then( m => m.LenderonboardingPageModule)
  },
  {
    path: 'createbid',
    loadChildren: () => import('./createbid/createbid.module').then( m => m.CreatebidPageModule)
  },  {
    path: 'modify-bid',
    loadChildren: () => import('./modify-bid/modify-bid.module').then( m => m.ModifyBidPageModule)
  },
  {
    path: 'view-bid',
    loadChildren: () => import('./view-bid/view-bid.module').then( m => m.ViewBidPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
