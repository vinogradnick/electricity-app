import {Component, OnInit} from '@angular/core';
import {OrderServiceService} from '../../order-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Order, IOrder} from 'src/app/models/order';
import {DELAY} from '../../../config';

@Component({
  selector: 'app-change-order',
  templateUrl: './change-order.component.html',
  styleUrls: ['./change-order.component.scss']
})
export class ChangeOrderComponent implements OnInit {
  order: Order = {
    name: 'FD',
    message: 'Loream',
    type: {name: 'ddf'},
    dateClose: new Date(),
    dateStart: new Date(),
    status: 'false',
    electroObject: {type: 'fider'}
  };
  id: number;

  constructor(private os: OrderServiceService, private ar: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
    this.id = 0;
    this.ar.params.subscribe(el => this.id = el['id']);
    this.os.getModel(this.id).subscribe(el => this.order = el);
  }

  onSubmit() {
    this.os.update(this.order.id, this.order);
    this.back();
  }

  back() {
    setTimeout(() => {
      this.router.navigate(['/electro/main']);
    }, DELAY);
  }
}
