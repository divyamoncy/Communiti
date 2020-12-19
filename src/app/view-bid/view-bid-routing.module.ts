import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewBidPage } from './view-bid.page';

const routes: Routes = [
  {
    path: '',
    component: ViewBidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewBidPageRoutingModule {}
