import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { ElectricityService } from './electricity.service';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService  extends ElectricityService<Order>{

  constructor( http: HttpClient,
     mesService: MessageService) {
    super(http, mesService,'orders');
  }
}
