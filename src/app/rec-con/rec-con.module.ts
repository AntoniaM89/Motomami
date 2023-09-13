import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecConPageRoutingModule } from './rec-con-routing.module';

import { RecConPage } from './rec-con.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecConPageRoutingModule
  ],
  declarations: [RecConPage]
})
export class RecConPageModule {}
