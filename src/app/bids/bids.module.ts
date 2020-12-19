import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BidsPageRoutingModule } from './bids-routing.module';

import { BidsPage } from './bids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BidsPageRoutingModule
  ],
  declarations: [BidsPage]
})
export class BidsPageModule {}
