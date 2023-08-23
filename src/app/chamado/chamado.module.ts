import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChamadoPageRoutingModule } from './chamado-routing.module';

import { ChamadoPage } from './chamado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChamadoPageRoutingModule
  ],
  declarations: [ChamadoPage]
})
export class ChamadoPageModule {}
