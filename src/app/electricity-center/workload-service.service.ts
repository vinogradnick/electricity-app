import { Injectable } from '@angular/core';
import { ElectricityService } from './electricity.service';
import { Workload } from '../models/workload';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root'
})
export class WorkloadServiceService  extends ElectricityService<Workload>{

  constructor( http: HttpClient,
     mesService: MessageService) {
    super(http, mesService,'workloads');
  }
}
