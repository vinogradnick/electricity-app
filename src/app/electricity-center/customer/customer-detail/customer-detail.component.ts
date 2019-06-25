import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/models/customer';
import {Router, ActivatedRoute} from '@angular/router';
import {RtlScrollAxisType} from '@angular/cdk/platform';
import {ElectricityService} from '../../electricity.service';
import {CustomerServiceService} from '../../customer-service.service';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer = {
    id: 0,
    objectAddress: '',
    name: '',
    lineId: 0,
    objectName: '',
    placeInstall: '',
    status: false,
    counter: {id: 0, name: '', brand: {id: 0, name: ''}, date: new Date(), dateLastCheck: new Date()}
  };

  constructor(
    private rt: Router,
    private ar: ActivatedRoute,
    private cs: CustomerServiceService,
    private router:Router
  ) {


  }

  ngOnInit() {
    let id = 0;
    this.ar.params.subscribe(el => id = el['id']);
    this.cs.getModel(id).subscribe(el => this.customer = el);
  }

  changeCustomer() {
    this.rt.navigate(['/electro/customer/change', this.customer.id]);
  }

  removeCustomer() {
    this.cs.remove(this.customer.id, this.customer);
  this.back();
  }

  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/customer/view']);
    },DELAY);
  }
}
