import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefinirHoraPrecioPageRoutingModule } from './definir-hora-precio-routing.module';

import { DefinirHoraPrecioPage } from './definir-hora-precio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefinirHoraPrecioPageRoutingModule
  ],
  declarations: [DefinirHoraPrecioPage]
})
export class DefinirHoraPrecioPageModule {}
