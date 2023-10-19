import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenViajePageRoutingModule } from './gen-viaje-routing.module';

import { GenViajePage } from './gen-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenViajePageRoutingModule
  ],
  declarations: [GenViajePage]
})
export class GenViajePageModule {}
