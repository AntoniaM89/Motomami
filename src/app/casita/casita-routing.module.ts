import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasitaPage } from './casita.page';

const routes: Routes = [
  {
    path: '',
    component: CasitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasitaPageRoutingModule {}
