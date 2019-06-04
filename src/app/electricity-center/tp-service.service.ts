import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { extend } from 'webdriver-js-extender';
import { ElectricityService } from './electricity.service';
import { Tp } from '../models/tp';

@Injectable({
  providedIn: 'root'
})
export class TpServiceService extends ElectricityService<Tp> {
  constructor( http: HttpClient,
     mesService: MessageService) {
    super(http, mesService,'tps');
  }
  
}
