import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyBidPageRoutingModule } from './modify-bid-routing.module';

import { ModifyBidPage } from './modify-bid.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ModifyBidPageRoutingModule
  ],
  declarations: [ModifyBidPage]
})
export class ModifyBidPageModule {}
