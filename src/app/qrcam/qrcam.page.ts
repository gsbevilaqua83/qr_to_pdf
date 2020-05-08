import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-qrcam',
  templateUrl: './qrcam.page.html',
  styleUrls: ['./qrcam.page.scss'],
})
export class QrcamPage implements OnInit {
  qrScan: any;
  backButtonSub: any;

  constructor(
    private router: Router,
    private platform: Platform,
    private qrScanner: QRScanner,
  ) {}

  // This executes when the phone's back button is pressed.
  // This is customizable per page.
  // In this it makes the 'home' page opacity back to 1
  // and then goes to the 'home' page
  onBack = ()=>{
    document.getElementById("home-page").style.opacity = "1";
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

  // Goes to 'pdfolder' page
  openArchive(){
    this.router.navigate(['pdfolder']);
  }

  // this is called on the initialization of the page below
  startScan() {
    this.qrScanner.prepare().then((status:QRScannerStatus)=>{
      if(status.authorized){ // asks for user authorization to use cam
        this.qrScan = this.qrScanner.scan().subscribe((textFound)=>{ // the below is executed after it succeeds in reading a qr code
          document.getElementById("home-page").style.opacity = "1"; // this is needed for a more smooth transition between this and the 'home' page
          this.qrScan.unsubscribe();
          alert(textFound);
          this.openArchive(); // goes to 'pdfolder' page
        },(err)=>{ // on error
          alert(JSON.stringify(err)); // alerts error message
        })
        this.qrScanner.show(); // this makes the camera visible
        document.getElementById("home-page").style.opacity = "0"; // this is needed for a more smooth transition between the 'home' and this page
        document.getElementById("qr-inst").style.opacity = "1"; // makes camera message visible
        document.getElementById("qr-area").style.opacity = "1"; // makes the border of the qr code area visible
      }
    });
  }

  // page initialization
  // starts the qr code scan
  ngOnInit() {
    this.startScan()
  }
}
