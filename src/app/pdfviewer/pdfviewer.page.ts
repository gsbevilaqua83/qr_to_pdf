import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.page.html',
  styleUrls: ['./pdfviewer.page.scss'],
})
export class PdfviewerPage implements OnInit {
  pdfSrc = 'assets/datasheet.pdf';
  zoom_to = 1;
  backButtonSub: any;

  constructor(
      private platform: Platform,
      private router: Router,
    ) {}

  onBack = ()=>{
    this.router.navigate(['pdfolder']);
  };

  ionViewDidEnter() {
    this.backButtonSub = this.platform.backButton.subscribeWithPriority(
      10000,
      () => this.onBack()
    );
  }
  
  ionViewWillLeave() {
    this.backButtonSub.unsubscribe();
  }

  zoom_in() {
    this.zoom_to = this.zoom_to + 0.1;
      document.getElementById("pdf-viewer").style.display = "block";
      document.getElementById("pdf-viewer").style.visibility = "visible";
      document.getElementById("pdf-viewer").style.opacity = "1"; 
  }

  zoom_out() {
    if (this.zoom_to > 1) {
       this.zoom_to = this.zoom_to - 0.1;
    }
  }

  ngOnInit() {
  }
}
