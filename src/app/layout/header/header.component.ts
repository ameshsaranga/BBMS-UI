import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LayoutComponent } from '../layout.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropDown: boolean = false;

  @Input() PARENT: LayoutComponent
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onProfileClick() {
    this.showDropDown = !this.showDropDown;
  }


  toggleSideMenu() {
    this.PARENT.toggleSideMenu();
  }

  onButtonClicked(name) {
    this.buttonClicked.emit(name);
  }

}
