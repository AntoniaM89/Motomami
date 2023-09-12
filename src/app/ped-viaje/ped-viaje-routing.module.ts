import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedViajePage } from './ped-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: PedViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedViajePageRoutingModule {}
