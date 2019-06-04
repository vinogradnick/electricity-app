import { Component, OnInit } from '@angular/core';
import { Tp } from 'src/app/models/tp';
import { ElectricityService } from '../../electricity.service';
import { TpServiceService } from '../../tp-service.service';

@Component({
  selector: 'app-tp-create',
  templateUrl: './tp-create.component.html',
  styleUrls: ['./tp-create.component.scss']
})
export class TpCreateComponent implements OnInit {
  tp:Tp={id:0,name:"",voltage:0,power:0,geocode:"",transformer:{id:0,name:'',dateCheck:new Date(),dateInstallation:new Date(),type:''}}
  constructor(private ts:TpServiceService) { 

  }

  ngOnInit() {
  }
  onSubmit(){
     this.ts.create(this.tp);
  }

}
