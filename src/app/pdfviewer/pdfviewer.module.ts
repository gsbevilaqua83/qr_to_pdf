import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfviewerPageRoutingModule } from './pdfviewer-routing.module';

import { PdfviewerPage } from './pdfviewer.page';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import {PinchZoomModule} from 'ngx-pinch-zoom';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfviewerPageRoutingModule,
    PdfViewerModule,
    PinchZoomModule,
  ],
  declarations: [PdfviewerPage]
})
export class PdfviewerPageModule {}
