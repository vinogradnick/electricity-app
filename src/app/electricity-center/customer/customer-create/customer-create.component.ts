import {Component, OnInit} from '@angular/core';
import {Customer} from 'src/app/models/customer';
import {Counter} from 'src/app/models/counter';
import {ElectricityService} from '../../electricity.service';
import {CustomerServiceService} from '../../customer-service.service';
import {MessageService} from 'src/app/message.service';
import {Router} from '@angular/router';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  customer: Customer = {
    objectAddress: '',
    name: '',
    objectName: '',
    placeInstall: '',
    status: false,
    counter: {id: 0, name: '', brand: {id: 0, name: ''}, date: new Date(), dateLastCheck: new Date()}
  };

  constructor(
    private cs: CustomerServiceService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.cs.create(this.customer);
    this.back();
  }

  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/customer/view']);
    },DELAY);
  }

}
