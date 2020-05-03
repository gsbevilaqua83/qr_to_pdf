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
    // private file: File,
    // private docviewer: DocumentViewer
  ) {}

  onBack = ()=>{
    if(window.confirm("Are you sure you want to exit?")){
      navigator["app"].exitApp();
    }
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

  decaptate(){
    const vis = document.getElementsByTagName("ion-header")[0].style.visibility
    if(vis === "hidden"){
      document.getElementsByTagName("ion-header")[0].style.visibility = "visible"
      document.getElementsByTagName("ion-header")[0].style.opacity = "1";
    }else{
      document.getElementsByTagName("ion-header")[0].style.visibility = "hidden";
      document.getElementsByTagName("ion-header")[0].style.opacity = "0";
    }
  }

  changePage(page){
    this.router.navigate([page]);
  }
}
