import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcamPage } from './qrcam.page';

const routes: Routes = [
  {
    path: '',
    component: QrcamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcamPageRoutingModule {}
