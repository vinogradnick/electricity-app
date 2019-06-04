import { Injectable } from '@angular/core';
import { ElectricityService } from './electricity.service';
import { Line } from '../models/line';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class LineServiceService  extends ElectricityService<Line>{
  constructor( http: HttpClient,
     mesService: MessageService) {
    super(http, mesService,'lines');
  }
}
