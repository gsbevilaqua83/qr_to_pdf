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

  // This executes when the phone's back button is pressed.
  // This is customizable per page.
  // In this it jsut goes back to the 'home' page
  onBack = ()=>{
    this.router.navigate(['home']);
  };

  // Assigns onBack as the callback to the back button subscription
  ionViewDidEnter() {
    this.backButtonSub = this.platform.backButton.subscribeWithPriority(
      10000,
      () => this.onBack()
    );
  }
  
  ionViewWillLeave() {
    this.backButtonSub.unsubscribe();
  }  

  // Goes to 'pdfviewer' page
  // It's called on pdfolder.page.html file
  openPdf(){
    this.router.navigate(['pdfviewer']);
  }
  
  ngOnInit() {
  }
}
