import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsComponent} from '../donations/donations.component'
import { DonationsRoutingModule} from '../donations/donations-routing.module'

@NgModule({
  declarations: [DonationsComponent],
  imports: [
    CommonModule,
    DonationsRoutingModule
  ]
})
export class DonationsModule { }
