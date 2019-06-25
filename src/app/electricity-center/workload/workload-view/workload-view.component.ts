import { Component, OnInit } from '@angular/core';
import {WorkloadServiceService} from '../../workload-service.service';
import {MatTableDataSource} from '@angular/material';
import {Workload} from '../../../models/workload';

@Component({
  selector: 'app-workload-view',
  templateUrl: './workload-view.component.html',
  styleUrls: ['./workload-view.component.scss']
})
export class WorkloadViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'date', 'tpName'];
  dataSource:MatTableDataSource<Workload>;
  phaseDisplay=["id","name","values"];
  busbarSectionsDisplay = ["id", "name", "value"];


  constructor(
    private ws:WorkloadServiceService
  ) {
    this.ws.getModelArray().subscribe(el=>this.dataSource=new MatTableDataSource(el));
  }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
