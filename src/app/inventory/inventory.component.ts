import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inventoryStatuses = [
    {
      title:'Hold',
      value:'45'
    },
    {
      title:'Available',
      value:'10'
    },
    {
      title:'Assigned',
      value:'5'
    },
    {
      title:'Quarantine',
      value:'2'
    },
    {
      title:'Expired',
      value:'20'
    },
    {
      title:'Discarded',
      value:'20'
    }
  ]

}
