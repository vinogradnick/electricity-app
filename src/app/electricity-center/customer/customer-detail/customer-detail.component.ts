import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Router, ActivatedRoute } from '@angular/router';
import { RtlScrollAxisType } from '@angular/cdk/platform';
import { ElectricityService } from '../../electricity.service';
import { CustomerServiceService } from '../../customer-service.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer = { id: 0,objectAddress:'', name: '', tpNumber: 0, fiderNumber: 0, lineNumber: 0, objectName: '', placeInstall: '', status: false, counter: { id: 0, brand: {id:0,name:''}, date: new Date(), dateLastCheck: new Date() } };

  constructor(
    private rt: Router,
    private ar: ActivatedRoute,
    private cs: CustomerServiceService
  ) {
    let id = 0;
    this.ar.params.subscribe(el => id = el['id'])
    cs.getModel(id).subscribe(el=>this.customer=el);
   

  }

  ngOnInit() {
    console.log(this.customer);
  }

  changeCustomer() {
    this.rt.navigate(['/electro/customer/change', this.customer.id]);
  }
}
