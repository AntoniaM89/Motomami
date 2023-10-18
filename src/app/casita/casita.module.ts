import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CasitaPageRoutingModule } from './casita-routing.module';
import { CasitaPage } from './casita.page';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CasitaPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  declarations: [CasitaPage],
})
export class CasitaPageModule {}