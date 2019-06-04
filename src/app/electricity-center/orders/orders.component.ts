import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  order: IOrder = { id: 0, name: '', message: '', type: '', status: '', dateStart: new Date(), dateClose: new Date(), electroObject: { id: 0, type: '' } }
  
  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private os: OrderServiceService
  ) {
    let id = 0;
    this.ar.params.subscribe(el => id = el['id'])
    this.os.getModel(id).subscribe(el => this.order = el);
  }

  ngOnInit() {

  }

}
