import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasitaPageRoutingModule } from './casita-routing.module';

import { CasitaPage } from './casita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasitaPageRoutingModule
  ],
  declarations: [CasitaPage]
})
export class CasitaPageModule {}
