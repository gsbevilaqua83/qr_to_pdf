import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
// import { File } from '@ionic-native/file/ngx';
// import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  backButtonSub: any;

  constructor(
    private router: Router,
    private platform: Platform,
    // private file: File, // Need to uninstall, not using
    // private docviewer: DocumentViewer // Need to uninstall, not using
  ) {}

  // This executes when the phone's back button is pressed.
  // This is customizable per page.
  // In this it exits the app, but first prompts the
  // user with a confirmation
  onBack = ()=>{
    if(window.confirm("Are you sure you want to exit?")){
      navigator["app"].exitApp();
    }
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

  // This is called to change to a different page.
  // Has calls on the home.page.html file for 'qrcam' and 'pdfolder' pages
  changePage(page){
    this.router.navigate([page]);
  }
}
