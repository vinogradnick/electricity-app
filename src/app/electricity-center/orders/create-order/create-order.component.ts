import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../../order-service.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  order: IOrder = { id: 0, name: 'FD', message: "Loream", type: "def", dateClose: new Date(), dateStart: new Date(), status: "false", electroObject: { id: 0, type: "fider" } }
  constructor(private os: OrderServiceService) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log("ok");
    this.os.create(this.order);
  }

}
