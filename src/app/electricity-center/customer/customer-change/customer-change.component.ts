import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ElectricityService } from '../../electricity.service';
import { Customer } from 'src/app/models/customer';
import { CustomerServiceService } from '../../customer-service.service';

@Component({
  selector: 'app-customer-change',
  templateUrl: './customer-change.component.html',
  styleUrls: ['./customer-change.component.scss']
})
export class CustomerChangeComponent implements OnInit {
  customer: Customer={ id: 0, objectAddress: '', name: '',objectName:'', tpNumber: 0, fiderNumber: 0, lineNumber: 0, placeInstall: '', status: false, counter: { id: 0, brand: {id:0,name:''}, date: new Date(), dateLastCheck: new Date() } };
  constructor(private rt: Router,
    private ar: ActivatedRoute,
    private cs: CustomerServiceService) {
    let id = 0;
    this.ar.params.subscribe(el => id = el['id']);
    cs.getModel(id).subscribe(el =>this.customer = el);
    
  }

  ngOnInit() {
    
  }
  onSubmit() {
    this.cs.update(this.customer.id, this.customer);
  }

}
