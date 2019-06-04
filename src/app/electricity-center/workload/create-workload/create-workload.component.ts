import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BusbarSection } from 'src/app/models/busbar-section';
import { Form } from '@angular/forms';
import { Phase } from 'src/app/models/phase';
import { Line } from 'src/app/models/line';
import { ElectricityService } from '../../electricity.service';
import { Workload } from 'src/app/models/workload';
import { WorkloadServiceService } from '../../workload-service.service';
import { LineServiceService } from '../../line-service.service';

@Component({
  selector: 'app-create-workload',
  templateUrl: './create-workload.component.html',
  styleUrls: ['./create-workload.component.scss']
})
export class CreateWorkloadComponent implements OnInit {
  private workload:Workload={id:0,name:"",date:new Date(),phases:[],busbarSections:[]};
  private idCounter: number;
  busbarSectionsDisplay = ["id", "name", "value"];
  currentBusbar: BusbarSection = { id: 0, name: "", value: 0 }
  busbarSections: MatTableDataSource<BusbarSection>;
  phase1DataSource: MatTableDataSource<Phase>;
  phase2DataSource: MatTableDataSource<Phase>;
  phaseDisplay=["id","lineName","value"];
  arr: BusbarSection[] = [];
  phaseArr1: Phase[] = [];
  phaseArr2: Phase[] = [];
  tpname: string;
  options: string[] = ['One', 'Two', 'Three'];
  lineList: Line[] = [];
  constructor(
    private ls: LineServiceService,
    private ws:WorkloadServiceService
  ) {
    ls.getModelArray().subscribe(el => this.lineList=el);
    this.idCounter = 0;
  }

  ngOnInit() {
  }
  add(name: string, value: number) {

    let busbar: BusbarSection = { id: this.idCounter++, name,  value };
    this.arr.push(busbar);
    this.busbarSections = new MatTableDataSource(this.arr);
    console.log(this.arr);
  }
  addPhase1(name: string, ...values: number[]) {
    let busbar: Phase =  { id: this.idCounter++, lineName: name, values: values,sectionValue:1 };
    this.phaseArr1.push(busbar);
    this.phase1DataSource = new MatTableDataSource(this.phaseArr1);
    console.log(this.phaseArr1);
  }
  addPhase2(name: string, ...values: number[]) {
    let busbar: Phase = { id: this.idCounter++, lineName: name, values: values,sectionValue:2 };
    this.phaseArr2.push(busbar);
    this.phase2DataSource = new MatTableDataSource(this.phaseArr2);
    console.log(this.phaseArr2);
  }
  onSubmit(){
    this.workload.busbarSections=this.arr;
    this.phaseArr1.forEach(el=>this.workload.phases.push(el));
    this.phaseArr2.forEach(el=>this.workload.phases.push(el));


  }
}
