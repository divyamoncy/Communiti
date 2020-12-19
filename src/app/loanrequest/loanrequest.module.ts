import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanrequestPageRoutingModule } from './loanrequest-routing.module';

import { LoanrequestPage } from './loanrequest.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    LoanrequestPageRoutingModule
  ],
  declarations: [LoanrequestPage]
})
export class LoanrequestPageModule {}
