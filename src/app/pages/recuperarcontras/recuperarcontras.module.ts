import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarcontrasPageRoutingModule } from './recuperarcontras-routing.module';

import { RecuperarcontrasPage } from './recuperarcontras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarcontrasPageRoutingModule
  ],
  declarations: [RecuperarcontrasPage]
})
export class RecuperarcontrasPageModule {}
