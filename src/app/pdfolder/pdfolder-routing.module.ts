import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfolderPage } from './pdfolder.page';

const routes: Routes = [
  {
    path: '',
    component: PdfolderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfolderPageRoutingModule {}
