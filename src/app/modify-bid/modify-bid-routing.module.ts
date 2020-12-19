import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyBidPage } from './modify-bid.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyBidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyBidPageRoutingModule {}
