import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DonationService } from '../shared/donation.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    private modalService: BsModalService,
    private donationService: DonationService) { }

  donationStatuses = [
    {
      title: 'Consent Done',
      value: '45'
    },
    {
      title: 'Initiated',
      value: '10'
    },
    {
      title: 'Medical exam done',
      value: '5'
    },
    {
      title: 'Complete',
      value: '2'
    },
    {
      title: 'Incomplete',
      value: '20'
    },
    {
      title: 'Complete with reaction',
      value: '20'
    },
    {
      title: 'Incomplete with reaction',
      value: '20'
    },
    {
      title: 'Screening Done',
      value: '20'
    },
    {
      title: 'Label Printed',
      value: '20'
    },
    {
      title: 'Cancelled',
      value: '20'
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

  openModal(template: TemplateRef<any>, form: NgForm) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-xl'
    });
  }

  onSubmit = (form: NgForm) => {
    console.log(form.value);

  }
}
