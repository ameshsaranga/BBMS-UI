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
 
  constructor(private service: DonorService, private modalService: BsModalService, private toastr : ToastrService) {
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

  onSubmit(form: NgForm){
    if (form.value.DonorID ==null) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm){
    this.service.postDonor(form.value).subscribe(res => {
      this.toastr.success('Inserted Successfully', 'Donor Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm){
    this.service.putDonor(form.value).subscribe(res => {
      this.toastr.info('Updated Successfully', 'Donor Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  populateForm(donor: Donor) {
    this.service.formData = Object.assign({}, donor);
  }

  onDelete(id: number) {
    if (confirm('Are You sure to delete this record?')){
    this.service.deleteDonor(id).subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Deleted Successfully', 'Donor Register');
    });
  }
  }


  donorStatuses = [
    {
      title:'Accepted',
      value:'45'
    },
    {
      title:'Hold',
      value:'10'
    },
    {
      title:'Deffered Tempory',
      value:'5'
    },
    {
      title:'Deffered Permanently',
      value:'2'
    },
    {
      title:'Blocked',
      value:'20'
    },
  ]

  

}