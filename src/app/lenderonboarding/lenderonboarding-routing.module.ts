import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LenderonboardingPage } from './lenderonboarding.page';

const routes: Routes = [
  {
    path: '',
    component: LenderonboardingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LenderonboardingPageRoutingModule {}
