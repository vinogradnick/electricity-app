import { Component, OnInit } from '@angular/core';
import { Tp } from 'src/app/models/tp';
import { Workload } from 'src/app/models/workload';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import { ElectricityService } from '../electricity.service';
import {WorkloadServiceService} from '../workload-service.service';
import {ExcelService} from '../../excel.service';
import {map} from 'rxjs/operators';

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
  displayedColumns: string[] = ['id', 'name', 'date', ];
  dataSource:MatTableDataSource<Workload>;
  phaseDisplay=["id","name","values"];
  busbarSectionsDisplay = ["id", "name", "value"];

  expandedElement: Workload | null;
  constructor(
    private ws:WorkloadServiceService,
    private excel:ExcelService
  ) {
    this.ws.getModelArray().subscribe(el=>this.dataSource=new MatTableDataSource(el));
   }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  exportReport(){
    console.log('report');
    this.excel.workloadReportExcel(this.dataSource.data);

  }
    
}
