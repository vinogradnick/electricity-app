import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { ElectricityService } from './electricity.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService  extends ElectricityService<IOrder>{

  constructor( http: HttpClient,
     mesService: MessageService) {
    super(http, mesService,'orders');
  }
}
