import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecConPage } from './rec-con.page';

const routes: Routes = [
  {
    path: '',
    component: RecConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecConPageRoutingModule {}
