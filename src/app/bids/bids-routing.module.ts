import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BidsPage } from './bids.page';

const routes: Routes = [
  {
    path: '',
    component: BidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BidsPageRoutingModule {}
