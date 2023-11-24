import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefinirHoraPrecioPage } from './definir-hora-precio.page';

const routes: Routes = [
  {
    path: '',
    component: DefinirHoraPrecioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefinirHoraPrecioPageRoutingModule {}
