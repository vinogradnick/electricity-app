import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-dispatcher-profile',
  templateUrl: './dispatcher-profile.component.html',
  styleUrls: ['./dispatcher-profile.component.scss']
})


export class DispatcherProfileComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'message', 'type'];
  dataSource: IOrder[] = [];

  constructor(
    private router: Router,
    private os: OrderServiceService
  ) {

  }

  ngOnInit() {

    this.os.getModelArray().subscribe(el => this.dataSource = el);
  }
  selectOrder(order: IOrder) {

    this.router.navigate(['/electro/orders/view', order.id]);
  }

}
