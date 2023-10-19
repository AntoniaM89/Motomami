import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenViajePage } from './gen-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: GenViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenViajePageRoutingModule {}
