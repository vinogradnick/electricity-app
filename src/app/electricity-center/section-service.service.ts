import { Injectable } from '@angular/core';
import { ElectricityService } from './electricity.service';
import { HttpClient } from '@angular/common/http';
import { Section } from '../models/section';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class SectionServiceService extends ElectricityService<Section> {

  constructor( http: HttpClient,
     mesService: MessageService) {
    super(http, mesService,'sections');
  }
}
