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
  currentScroll = 0;
  headerDisplay = "block";
  mode = "neutral";
  annotations = [];
  backButtonSub: any;
  pdfdiv: any;

  constructor(
      private platform: Platform,
      private router: Router,
    ) {}

  onBack = ()=>{
    if(this.mode==='neutral') {
      this.router.navigate(['pdfolder']);
    } else if(this.mode==='annotate') {
      this.mode = "neutral";
      this.headerDisplay = "block";
      document.getElementById("outer-header").style.display = this.headerDisplay;
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

  handleClick(ev){
    if(this.mode === "neutral"){
      if(this.headerDisplay === "block"){
        this.headerDisplay = "none";
      }else{
        this.headerDisplay = "block";
      }
      document.getElementById("outer-header").style.display = this.headerDisplay;
    } else if(this.mode === "annotate"){
      console.log(ev);
      var posX = ev.pageX;
      var posY = ev.pageY;
      var scrollPos = this.currentScroll;
      let text = prompt("Please enter your annotation", "");
      if(text){
        if(text.length > 0){
          this.annotations.push([text, posY + scrollPos, posX])
        }
      }
    }
    console.log(this.annotations)
  }

  annotateModeOn() {
    this.mode = "annotate";
    this.headerDisplay = "none";
    document.getElementById("outer-header").style.display = this.headerDisplay;
  }

  setScroll(ev){
    this.currentScroll = ev.detail.scrollTop;
  }

  ngOnInit() {
    document.getElementById("outer-header").style.display = this.headerDisplay;
  }
}
