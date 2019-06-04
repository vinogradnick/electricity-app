import { Injectable } from '@angular/core';
import { ElectricityService } from './electricity.service';
import { Fider } from '../models/fider';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FiderServiceService extends ElectricityService<Fider> {
  constructor( http: HttpClient,
     mesService: MessageService) {
    super(http, mesService,'fiders');
  }

}
