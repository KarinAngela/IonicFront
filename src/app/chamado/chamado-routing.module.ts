import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChamadoPage } from './chamado.page';

const routes: Routes = [
  {
    path: '',
    component: ChamadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChamadoPageRoutingModule {}
