import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes=[
  {
    path:'',
    component:InventoryComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class InventoryRoutingModule { }
