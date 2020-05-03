import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfolderPageRoutingModule } from './pdfolder-routing.module';

import { PdfolderPage } from './pdfolder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfolderPageRoutingModule
  ],
  declarations: [PdfolderPage]
})
export class PdfolderPageModule {}
