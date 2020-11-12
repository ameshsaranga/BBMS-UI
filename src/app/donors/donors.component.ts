import { Component, OnInit, TemplateRef } from '@angular/core';
import { DonorService } from '../shared/donor.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { Donor } from '../shared/donor.model';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.component.html',
  styleUrls: ['./donors.component.scss']
})
export class DonorsComponent implements OnInit {
  modalRef: BsModalRef;
  dornerList: any[];

  constructor(private service: DonorService, private modalService: BsModalService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.resetForm();
    this.service.refreshList();
  }

  openModal(template: TemplateRef<any>, form: NgForm) {
    this.modalRef = this.modalService.show(template, {
      class: 'modal-xl'
    });
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      DonorID: null,
      FirstName: '',
      SecondName: '',
      thirdName: '',
      LastName: '',
      Gender: '',
      Nationality: '',
      BloodGroup: '',
      Status: '',
      LastDonation: null,
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.DonorID) {
      this.updateRecord(form);
    } else {
      this.insertRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postDonor(form.value);
    this.toastr.success('Inserted Successfully', 'Donor Register');
    this.resetForm(form);
    this.refresGrid();
  }

  refresGrid = () => {
    this.dornerList = this.service.refreshList();
    this.updateStatus();
  }

  updateRecord(form: NgForm) {
    this.service.putDonor(form.value);
    this.toastr.info('Updated Successfully', 'Donor Register');
    this.resetForm(form);
    this.refresGrid();
  }

  populateForm(donor: Donor) {
    this.service.formData = Object.assign({}, donor);
  }

  onDelete(id: number) {
    if (confirm('Are You sure to delete this record?')) {
      this.service.deleteDonor(id);
      this.refresGrid();
      this.toastr.warning('Deleted Successfully', 'Donor Register');
    }
  }

  updateStatus = () => {
    for (let index = 0; index < this.service.status.length; index++) {
      const count = this.service.getCount(this.service.status[index].status);
      const statTitle: string = this.service.status[index].status;
      this.donorStatuses[this.donorStatuses.findIndex(x => x.title === statTitle)].value = count;

    }

  }


  donorStatuses = [
    {
      title: 'Accepted',
      value: 0
    },
    {
      title: 'Hold',
      value: 0
    },
    {
      title: 'Deffered Tempory',
      value: 0
    },
    {
      title: 'Deffered Permanently',
      value: 0
    },
    {
      title: 'Blocked',
      value: 0
    },
  ]



}