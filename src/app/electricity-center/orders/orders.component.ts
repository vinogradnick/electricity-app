import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderServiceService} from '../order-service.service';
import {Order} from 'src/app/models/order';
import {DELAY} from '../../config';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  order: Order = {
    name: '',
    message: '',
    type: {name: 'dd'},
    status: '',
    dateStart: new Date(),
    dateClose: new Date(),
    electroObject: {type: ''}
  };
  id: number;

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private os: OrderServiceService
  ) {

  }

  ngOnInit() {
    this.id = 0;
    this.ar.params.subscribe(el => this.id = el['id']);
    this.os.getModel(this.id).subscribe(el => this.order = el);
  }

  onSubmit() {
    this.router.navigate(['/electro/orders/change/', this.id]);
  }

  removeOrder() {
    this.os.remove(this.order.id, this.order);

    this.back();
  }

  back() {
    setTimeout(() => {
      this.router.navigate(['/electro/main']);
    }, DELAY);
  }
}
