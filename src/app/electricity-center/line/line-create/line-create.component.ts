import { Component, OnInit } from '@angular/core';
import { Line } from 'src/app/models/line';
import { Counter } from 'src/app/models/counter';
import { ElectricityService } from '../../electricity.service';
import { LineServiceService } from '../../line-service.service';

@Component({
  selector: 'app-line-create',
  templateUrl: './line-create.component.html',
  styleUrls: ['./line-create.component.scss']
})
export class LineCreateComponent implements OnInit {
  line:Line={id:0,name:'',voltage:0,power:0,geocode:"",counter:{id:0,brand:{id:0,name:''},dateLastCheck:new Date(),date:new Date()}};
  constructor(
    private ls:LineServiceService
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    this.ls.create(this.line);
  }

}
