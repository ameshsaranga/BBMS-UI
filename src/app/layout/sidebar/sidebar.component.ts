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
      icon:'flaticon-dashboard'
    },
    {
      title:'Donors',
      route:'/donors',
      icon:'flaticon-donor-1'
    },
    {
      title:'Donations',
      route:'/donations',
      icon:'flaticon-blood-donation-2'
    },
    {
      title:'Inventory',
      route:'/inventory',
      icon:'flaticon-blood-donation-6'
    },
    {
      title:'Setup & Configuration',
      route:'/inventory',
      icon:'flaticon-file'
    },
  ]

}
