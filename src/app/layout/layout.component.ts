import { Component, OnInit, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  title = 'BBMS';
  sideMenuToggle: boolean = false;

  public buttonName: string;
  // private previousBtnName: string;

  constructor() {
    // right side panel
    document.addEventListener('click', () => {
      document.getElementById("sidePanel").classList.remove('is-active');
      document.getElementById('content-body').classList.remove("hiddenMenu");
      this.sideMenuToggle = false;
    })
  }

  ngOnInit() {
    // right side panel
    // document.getElementById("sidePanel").addEventListener("click", (e) => {
    //   e.stopPropagation();
    // });
  }
  //side bar toggle
  toggleSideMenu() {
    // console.log(this.sideMenuToggle);
    this.sideMenuToggle = !this.sideMenuToggle;
    event.stopPropagation();
  }
  
  onButtonClicked(name:string) {
    // console.log(name);
    const sidePanelEl = document.getElementById("sidePanel");
    document.getElementById(name).classList.toggle("is-active");
    event.stopPropagation();
    
    if (this.buttonName === name) {
      sidePanelEl.classList.toggle('is-active');
    } else {
      sidePanelEl.classList.add("is-active");
    }

    this.buttonName = name;   
    // this.previousBtnName = name;
  }
}
