import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ElectricityService} from '../../electricity.service';
import {Customer} from 'src/app/models/customer';
import {CustomerServiceService} from '../../customer-service.service';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-customer-change',
  templateUrl: './customer-change.component.html',
  styleUrls: ['./customer-change.component.scss']
})
export class CustomerChangeComponent implements OnInit {
  customer: Customer = {
    id: 0,
    objectAddress: '',
    name: '',
    objectName: '',
    lineId: 0,
    placeInstall: '',
    status: false,
    counter: {id: 0, name: '', brand: {id: 0, name: ''}, date: new Date(), dateLastCheck: new Date()}
  };

  constructor(private rt: Router,
              private ar: ActivatedRoute,
              private cs: CustomerServiceService) {


  }

  ngOnInit() {
    let id = 0;
    this.ar.params.subscribe(el => id = el['id']);
    this.cs.getModel(id).subscribe(el => this.customer = el);
  }

  onSubmit() {
    console.log('change');
    console.log(this.customer.counter);
    this.cs.update(this.customer.id, this.customer);
  }
  back() {
    setTimeout(()=>{
      this.rt.navigate(['/electro/customer/view']);
    },DELAY);
  }

}
