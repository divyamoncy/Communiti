import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LenderonboardingPageRoutingModule } from './lenderonboarding-routing.module';

import { LenderonboardingPage } from './lenderonboarding.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    LenderonboardingPageRoutingModule
  ],
  declarations: [LenderonboardingPage]
})
export class LenderonboardingPageModule {}
