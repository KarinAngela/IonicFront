import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosChamadoPageRoutingModule } from './dados-chamado-routing.module';

import { DadosChamadoPage } from './dados-chamado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosChamadoPageRoutingModule
  ],
  declarations: [DadosChamadoPage]
})
export class DadosChamadoPageModule {}
