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
  showHide = "H";
  backButtonSub: any;
  pdfdiv: any;

  constructor(
      private platform: Platform,
      private router: Router,
    ) {}

  // This executes when the phone's back button is pressed.
  // This is customizable per page.
  // In this it changes from the 'annotation' mode back to
  // the 'neutral' mode or goes back to 'pdfolder' page
  // if already in 'neutral' mode
  onBack = ()=>{
    if(this.mode==='neutral') {
      this.router.navigate(['pdfolder']);
    } else if(this.mode==='annotate') {
      this.mode = "neutral";
      this.headerDisplay = "block"; // makes header visible again
      document.getElementById("outer-header").style.display = this.headerDisplay; // makes header visible again
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

  // handles clicks on the pdf
  // in 'neutral' mode it just toggles header's visibility
  // in 'annotations' mode it gets the position to put the new note
  handleClick(ev){
    if(this.mode === "neutral"){
      if(this.headerDisplay === "block"){
        this.headerDisplay = "none";
      }else{
        this.headerDisplay = "block";
      }
      document.getElementById("outer-header").style.display = this.headerDisplay;
    } else if(this.mode === "annotate"){
      var posX = ev.pageX; // click's x position
      var posY = ev.pageY; // click's y position
      let text = prompt("Please enter your annotation", ""); // gets note's text
      if(text){ // if text is not null
        if(text.length > 0){ // if text is not empty // this 'if' might not even be necessary
          this.annotations.push([text, posY + this.currentScroll, posX]) // adds new note to the array of notes
          this.showHide = "H"; // toggles to show annotations
        }
      }
    }
  }

  // toggles between showing or hiding notes
  toggleNotes(){
    if(this.showHide === "S"){
      this.showHide = "H";
    } else {
      this.showHide = "S";
    }
  }

  // turn 'annotation' mode on
  annotateModeOn() {
    this.mode = "annotate";
    this.headerDisplay = "none"; // makes header invisible
    document.getElementById("outer-header").style.display = this.headerDisplay; // makes header invisible
  }

  // this is called when scrolled on the pdf
  // and sets the current distance to the top 
  // of the pdf
  setScroll(ev){
    this.currentScroll = ev.detail.scrollTop; // sets current scroll
    this.mode = "neutral"; // changes to 'neutral' mode
    this.headerDisplay = "block"; // makes header visible
    document.getElementById("outer-header").style.display = this.headerDisplay; // makes header visible
    this.showHide = "S"; // toggles to hide annotations
  }

  removeNote(ev){
    console.log(ev);
    // for(let i = 0; i < this.annotations.length; i++){
    //   if(this.annotations[i][0] === ev.target.innerText 
    //     && this.annotations[i][1] === ev.target.style.top.replace('px','') - this.currentScroll 
    //     && this.annotations[i][2] === parseInt(ev.target.style.left.replace('px',''))) {
    //       this.annotations.splice(i, 1);
    //       break;
    //   }
    // }
  }

  // page initialization
  ngOnInit() {
    document.getElementById("outer-header").style.display = this.headerDisplay; // gets current header's 'display' property
  }
}
