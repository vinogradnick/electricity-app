import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Counter } from 'src/app/models/counter';
import { ElectricityService } from '../../electricity.service';
import { CustomerServiceService } from '../../customer-service.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer = { id: 0, objectAddress: '', name: '',objectName:'', tpNumber: 0, fiderNumber: 0, lineNumber: 0, placeInstall: '', status: false, counter: { id: 0, brand: {id:0,name:''}, date: new Date(), dateLastCheck: new Date() } };
  constructor(
    private cs: CustomerServiceService) {
  }

  ngOnInit() {
  }
  onSubmit() {
    this.cs.create(this.customer);
  }

}
