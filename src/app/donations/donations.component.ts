import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {

  constructor() { }

  donationStatuses = [
    {
      title:'Consent Done',
      value:'45'
    },
    {
      title:'Initiated',
      value:'10'
    },
    {
      title:'Medical exam done',
      value:'5'
    },
    {
      title:'Complete',
      value:'2'
    },
    {
      title:'Incomplete',
      value:'20'
    },
    {
      title:'Complete with reaction',
      value:'20'
    },
    {
      title:'Incomplete with reaction',
      value:'20'
    },
    {
      title:'Screening Done',
      value:'20'
    },
    {
      title:'Label Printed',
      value:'20'
    },
    {
      title:'Cancelled',
      value:'20'
    }
  ];

  // donationsList = [
  //  { DonationID,
  //   FirstName,
  //   Gender,
  //   Nationality,
  //   BloodGroup,
  //   Status,
  //   LastDonation}
  // ]

  ngOnInit() {
  }
}
