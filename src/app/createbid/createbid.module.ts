import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatebidPageRoutingModule } from './createbid-routing.module';

import { CreatebidPage } from './createbid.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CreatebidPageRoutingModule
  ],
  declarations: [CreatebidPage]
})
export class CreatebidPageModule {}
