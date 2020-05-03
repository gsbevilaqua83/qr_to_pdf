import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdfolder',
  templateUrl: './pdfolder.page.html',
  styleUrls: ['./pdfolder.page.scss'],
})
export class PdfolderPage implements OnInit {
  backButtonSub: any;
  constructor(private platform: Platform, private router: Router) {}

  onBack = ()=>{
    this.router.navigate(['home']);
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

  openPdf(){
    this.router.navigate(['pdfviewer']);
  }
  
  ngOnInit() {
  }
}
