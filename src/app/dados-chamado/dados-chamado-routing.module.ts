import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosChamadoPage } from './dados-chamado.page';

const routes: Routes = [
  {
    path: '',
    component: DadosChamadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosChamadoPageRoutingModule {}
