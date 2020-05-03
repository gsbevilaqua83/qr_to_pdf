import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcamPageRoutingModule } from './qrcam-routing.module';

import { QrcamPage } from './qrcam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcamPageRoutingModule
  ],
  declarations: [QrcamPage]
})
export class QrcamPageModule {}
