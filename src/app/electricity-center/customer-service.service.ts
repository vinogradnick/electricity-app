import { Injectable } from '@angular/core';
import { ElectricityService } from './electricity.service';
import { Customer } from '../models/customer';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService extends ElectricityService<Customer> {

  constructor( http: HttpClient,
     mesService: MessageService) {
    super(http, mesService,'customers');
  }
}
