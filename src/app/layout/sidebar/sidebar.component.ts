import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sidebarItems = [
    {
      title:'Dashboard',
      route:'/dashboard',
      icon:''
    },
    {
      title:'Donors',
      route:'/donors',
      icon:''
    },
    {
      title:'Donations',
      route:'/donations',
      icon:''
    },
    {
      title:'Inventory',
      route:'/inventory',
      icon:''
    },
  ]

}
