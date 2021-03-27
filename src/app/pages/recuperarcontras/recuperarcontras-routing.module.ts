import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarcontrasPage } from './recuperarcontras.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarcontrasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarcontrasPageRoutingModule {}
