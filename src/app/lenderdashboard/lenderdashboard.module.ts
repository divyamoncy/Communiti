import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LenderdashboardPageRoutingModule } from './lenderdashboard-routing.module';

import { LenderdashboardPage } from './lenderdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LenderdashboardPageRoutingModule
  ],
  declarations: [LenderdashboardPage]
})
export class LenderdashboardPageModule {}
