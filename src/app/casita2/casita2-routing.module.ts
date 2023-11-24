import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Casita2Page } from './casita2.page';

const routes: Routes = [
  {
    path: '',
    component: Casita2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Casita2PageRoutingModule {}
