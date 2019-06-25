import {Component, OnInit} from '@angular/core';
import {OrderServiceService} from '../../order-service.service';
import {Order} from 'src/app/models/order';
import {Router} from '@angular/router';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  order: Order = {
    name: '',
    message: '',
    type: {name: ''},
    dateClose: new Date(),
    dateStart: new Date(),
    status: 'false',
    electroObject: {type: ''}
  };

  constructor(private os: OrderServiceService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('ok');
    this.os.create(this.order);
    this.back();

  }

  back() {
    setTimeout(()=>{
      this.router.navigate(['/electro/main']);
    },DELAY);
  }
}
