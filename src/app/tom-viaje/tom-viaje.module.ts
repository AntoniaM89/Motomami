import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomViajePageRoutingModule } from './tom-viaje-routing.module';

import { TomViajePage } from './tom-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomViajePageRoutingModule
  ],
  declarations: [TomViajePage]
})
export class TomViajePageModule {}
