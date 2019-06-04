import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../../order-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-order',
  templateUrl: './change-order.component.html',
  styleUrls: ['./change-order.component.scss']
})
export class ChangeOrderComponent implements OnInit {
  order:IOrder;
  constructor( private os:OrderServiceService,private ar:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.os.create(this.order);
  }
}
