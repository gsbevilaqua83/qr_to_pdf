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

  onBack = ()=>{
    document.getElementById("home-page").style.opacity = "1";
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

  openArchive(){
    this.router.navigate(['pdfolder']);
  }

  startScan() {
    this.qrScanner.prepare().then((status:QRScannerStatus)=>{
      if(status.authorized){
        this.qrScan = this.qrScanner.scan().subscribe((textFound)=>{
          document.getElementById("home-page").style.opacity = "1";
          this.qrScan.unsubscribe();
          alert(textFound);
          this.openArchive();
        },(err)=>{
          alert(JSON.stringify(err));
        })
        this.qrScanner.show();
        document.getElementById("home-page").style.opacity = "0";
        document.getElementById("qr-inst").style.opacity = "1";
        document.getElementById("qr-area").style.opacity = "1";
      }
    });
  }

  ngOnInit() {
    this.startScan()
  }
}
