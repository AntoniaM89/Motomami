import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Casita2PageRoutingModule } from './casita2-routing.module';
import { Casita2Page } from './casita2.page';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    Casita2PageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  declarations: [Casita2Page],
})
export class Casita2PageModule {}