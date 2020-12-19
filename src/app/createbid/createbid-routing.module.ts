import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatebidPage } from './createbid.page';

const routes: Routes = [
  {
    path: '',
    component: CreatebidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatebidPageRoutingModule {}
