import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DonationService } from '../shared/donation.service';
import { DonorService } from '../shared/donor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {
  modalRef: BsModalRef;
  formData: any = {};
  donationList: any[] = [];
  dornorList: any[] = [];

  constructor(
    private modalService: BsModalService,
    private donationService: DonationService,
    private donorService: DonorService,
    private toastrService: ToastrService) { }

  donationStatuses = [
    {
      title: 'Consent Done',
      value: 0
    },
    {
      title: 'Initiated',
      value: 0
    },
    {
      title: 'Medical exam done',
      value: 0
    },
    {
      title: 'Complete',
      value: 0
    },
    {
      title: 'Incomplete',
      value: 0
    },
    {
      title: 'Complete with reaction',
      value: 0
    },
    {
      title: 'Incomplete with reaction',
      value: 0
    },
    {
      title: 'Screening Done',
      value: 0
    },
    {
      title: 'Label Printed',
      value: 0
    },
    {
      title: 'Cancelled',
      value: 0
    }
  ];

  ngOnInit() {
    this.getDornorList();
    this.refreshDonations();
  }

  delete = (donationId) => {
    if (donationId) {
      this.donationService.deleteDonation(donationId);
    }
  }

  edit = (record: any, template: TemplateRef<any>) => {
    this.formData = record;
    this.openModal(template, record);
  }

  getDornorList = () => {
    this.dornorList = this.donorService.refreshList();
  }

  openModal(template: TemplateRef<any>, initialState?: any) {
    this.modalRef = this.modalService.show(template, {
      initialState: initialState,
      class: 'modal-xl'
    });
  }

  onSubmit = (form: NgForm) => {
    const formValues = form.value;
    if (formValues.donationId) {
      this.donationService.putDonation(formValues);
      this.toastrService.success('Successfully updated..', 'Success');
    } else {
      this.donationService.postDonation(formValues);
      this.toastrService.success('Successfully saved.', 'Success');
    }
    this.refreshDonations();
    this.resetForm(form);
  }

  refreshDonations = () => {
    this.donationList = this.donationService.refreshList();
    this.updateStatus();
  }


  resetForm(form?: NgForm) {
    if (form) {
      form.resetForm();
    }
    this.formData = {
      DonorID: null,
      Gender: '',
      Nationality: '',
      BloodGroup: '',
      Status: '',
      LastDonation: null,
    };
  }

  updateStatus = () => {
    for (let index = 0; index < this.donationService.status.length; index++) {
      const count = this.donationService.getCount(this.donationService.status[index].status);
      const statTitle: string = this.donationService.status[index].status;
      this.donationStatuses[this.donationStatuses.findIndex(x => x.title === statTitle)].value = count;
    }
  }
}
