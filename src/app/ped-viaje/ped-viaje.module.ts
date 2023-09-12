import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedViajePageRoutingModule } from './ped-viaje-routing.module';

import { PedViajePage } from './ped-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedViajePageRoutingModule
  ],
  declarations: [PedViajePage]
})
export class PedViajePageModule {}
