import { Component, OnInit } from '@angular/core';
import { Tp } from 'src/app/models/tp';
import { Workload } from 'src/app/models/workload';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import { ElectricityService } from '../electricity.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-workload',
  templateUrl: './workload.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  styleUrls: ['./workload.component.scss']
})
export class WorkloadComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name', 'Date', 'TpName'];
  dataSource;
  phaseDisplay=["Id","LineName","Values"];
  busbarSectionsDisplay = ["Id", "Name", "Value"];

  expandedElement: PeriodicElement | null;
  constructor(
    private ws:ElectricityService<Workload>
  ) {
    this.dataSource=new MatTableDataSource([{Id:0,Name:"fdsfds",Date:new Date(),Tp:{Id:0,Name:"Tp",Voltage:120,Power:20,Geocode:""},Phases:[{Id:0,LineName:"some",Values:[1,2,34]}]}])
   }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
    
}
