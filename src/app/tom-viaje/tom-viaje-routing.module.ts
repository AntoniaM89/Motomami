import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomViajePage } from './tom-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: TomViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomViajePageRoutingModule {}
